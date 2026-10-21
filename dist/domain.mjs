/** Original SILA prototype logic. Instrument wording has separate WHO content rights. */
export function scoreWho5(responses) {
  if (!Array.isArray(responses) || responses.length !== 5 ||
      responses.some(x => !Number.isInteger(x) || x < 0 || x > 5)) {
    throw new TypeError('Answer all five questions with integers from 0 to 5.');
  }
  const rawScore = responses.reduce((sum, value) => sum + value, 0);
  const score = rawScore * 4;
  const suggestAssessment = score < 50;
  return {
    rawScore, score, suggestAssessment,
    interpretation: suggestAssessment
      ? 'Your answers suggest that further support may be helpful. Consider discussing them with a licensed professional.'
      : 'This reflects your reported wellbeing over the past two weeks. You can still ask for support at any score.',
    limitation: 'WHO-5 is not a diagnosis or a crisis assessment. A score cannot establish that someone is safe.'
  };
}

/** Navigation preferences are not clinical triage or a treatment eligibility decision. */
export function matchServices(services, preferences = {}) {
  return services.filter(service => {
    const languageMatch = !preferences.language || !service.languages || service.languages.includes(preferences.language);
    const typeMatch = !preferences.type || preferences.type === 'all' || service.type === preferences.type;
    return languageMatch && typeMatch;
  }).map(service => ({...service, reason: 'Matches the access preferences you selected. Confirm eligibility, cost, language and availability directly.'}));
}

/** Build a new allow-listed object; never copy arbitrary context into a handoff. */
export function buildHandoff(context = {}, consent = {}) {
  const payload = {};
  if (consent.score === true && Number.isFinite(context.score)) payload.score = context.score;
  if (consent.needs === true && Array.isArray(context.needs)) payload.needs = context.needs.filter(x => typeof x === 'string').slice(0, 10);
  if (consent.physicalContext === true && Array.isArray(context.physicalContext)) payload.physicalContext = context.physicalContext.filter(x => typeof x === 'string').slice(0, 10);
  return payload;
}

const transitions = {
  sent: {accept:'accepted', decline:'declined', reroute:'rerouted', withdraw:'withdrawn'},
  accepted: {complete:'completed', decline:'declined', reroute:'rerouted', withdraw:'withdrawn'},
  declined: {reroute:'rerouted', withdraw:'withdrawn'},
  rerouted: {withdraw:'withdrawn'},
  completed: {withdraw:'withdrawn'},
  withdrawn: {}
};
export function transitionReferral(referral, action, now = new Date().toISOString()) {
  if (!referral || !transitions[referral.status]?.[action]) throw new Error('This referral transition is not available.');
  const status = transitions[referral.status][action];
  const next = {...referral, status, updatedAt: now, events:[...(referral.events || []), {action, status, at:now, simulated:true}]};
  if (status === 'withdrawn') {
    next.payload = {};
    next.sharedData = {};
    next.withdrawnAt = now;
  }
  if (status === 'accepted') next.acceptedAt = now;
  if (status === 'completed') next.completedAt = now;
  return next;
}

export function summarizeOutcomes(referrals = []) {
  const total = referrals.length;
  const completed = referrals.filter(r => r.status === 'completed' || r.completedAt || (r.events || []).some(e => e.action === 'complete')).length;
  const acknowledged = referrals.filter(r => ['accepted','declined','rerouted','completed'].includes(r.status) || (r.events || []).some(e => ['accept','decline','reroute'].includes(e.action))).length;
  const waits = referrals.filter(r => r.acceptedAt && r.completedAt).map(r => Math.max(0, (Date.parse(r.completedAt) - Date.parse(r.acceptedAt)) / 3600000)).filter(Number.isFinite);
  return {synthetic:true, total, acknowledged, completed, completionRate:total ? completed / total : null, meanHoursToContact: waits.length ? waits.reduce((a,b) => a+b,0) / waits.length : null};
}

export function fairnessCell(records, minimumCohort = 5) {
  if (!Number.isInteger(minimumCohort) || minimumCohort < 5) throw new Error('Small-cohort suppression requires at least five records.');
  if (records.length < minimumCohort) return {suppressed:true, value:null};
  return {suppressed:false, value:summarizeOutcomes(records).completionRate};
}

/** A disclosure opens human help independently of WHO-5 or other scores. */
export function shouldShowUrgentHelp(disclosure) {
  return disclosure === true;
}
