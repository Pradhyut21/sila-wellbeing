import test from 'node:test';
import assert from 'node:assert/strict';
import {scoreWho5,buildHandoff,transitionReferral,summarizeOutcomes,fairnessCell,shouldShowUrgentHelp,matchServices} from '../dist/domain.mjs';

test('WHO-5 scoring covers every possible raw total and the professional-assessment boundary', () => {
  for (let raw = 0; raw <= 25; raw++) {
    let remaining = raw;
    const answers = Array.from({length:5}, () => { const value = Math.min(remaining,5); remaining -= value; return value; });
    const result = scoreWho5(answers);
    assert.equal(result.score,raw*4);
    assert.equal(result.suggestAssessment,raw<13);
  }
});
test('missing or invalid answers cannot be silently interpreted as healthy', () => {
  for (const answers of [[],[5,5,5,5],[5,5,5,5,undefined],[5,5,5,5,6],[5,5,5,5,-1],[5,5,5,5,'5'],[5,5,5,5,2.5]]) assert.throws(()=>scoreWho5(answers));
});
test('handoffs share only explicitly approved fields and ignore arbitrary personal context', () => {
  const context={score:32,needs:['Arabic'],physicalContext:['Sleep concerns'],email:'private@example.invalid',secret:'unapproved'};
  assert.deepEqual(buildHandoff(context,{}),{});
  assert.deepEqual(buildHandoff(context,{score:true,needs:true}),{score:32,needs:['Arabic']});
  assert.deepEqual(buildHandoff(context,{physicalContext:true}),{physicalContext:['Sleep concerns']});
  assert.deepEqual(buildHandoff(context,{score:'true'}),{});
});
test('declined referral can be re-routed and human contact is a distinct confirmation', () => {
  let r={id:'DEMO-1',status:'sent',payload:{score:32},events:[]};
  r=transitionReferral(r,'decline','2026-10-20T10:00:00Z');
  assert.equal(r.status,'declined');
  assert.throws(()=>transitionReferral(r,'complete'));
  const rerouted=transitionReferral(r,'reroute','2026-10-20T11:00:00Z');
  assert.equal(rerouted.status,'rerouted');
  assert.throws(()=>transitionReferral(rerouted,'accept'));
  // An alternate recipient needs a new handoff and a new consent approval.
  r=transitionReferral({id:'DEMO-2',status:'sent',events:[],payload:{score:32}},'accept','2026-10-20T12:00:00Z');
  assert.equal(summarizeOutcomes([r]).completed,0);
  r=transitionReferral(r,'complete','2026-10-21T12:00:00Z');
  assert.equal(summarizeOutcomes([r]).meanHoursToContact,24);
  assert.equal(r.events.length,2);
});
test('withdrawal removes available shared payload and blocks further mock clinician actions', () => {
  const r=transitionReferral({status:'accepted',payload:{score:32},sharedData:{score:32}},'withdraw');
  assert.deepEqual(r.payload,{});
  assert.deepEqual(r.sharedData,{});
  assert.throws(()=>transitionReferral(r,'complete'));
});
test('withdrawing sharing does not erase an already recorded acknowledgement or contact', () => {
  let r=transitionReferral({status:'sent',events:[],payload:{score:44}},'accept','2026-10-20T12:00:00Z');
  r=transitionReferral(r,'complete','2026-10-21T12:00:00Z');
  r=transitionReferral(r,'withdraw','2026-10-22T12:00:00Z');
  assert.equal(summarizeOutcomes([r]).acknowledged,1);
  assert.equal(summarizeOutcomes([r]).completed,1);
  assert.equal(summarizeOutcomes([r]).meanHoursToContact,24);
  assert.deepEqual(r.payload,{});
});
test('unobserved outcomes stay unknown and small fairness cohorts are suppressed', () => {
  assert.equal(summarizeOutcomes([]).completionRate,null);
  assert.equal(summarizeOutcomes([{status:'sent'}]).meanHoursToContact,null);
  assert.deepEqual(fairnessCell(Array(4).fill({status:'completed'})),{suppressed:true,value:null});
  assert.equal(fairnessCell(Array(5).fill({status:'completed'})).value,1);
  assert.throws(()=>fairnessCell([],1));
});
test('urgent self-disclosure always presents human help without consulting a score', () => {
  for (let score=0; score<=100; score+=4) assert.equal(shouldShowUrgentHelp(true,score),true);
  assert.equal(shouldShowUrgentHelp(false),false);
});
test('service filtering follows selected preferences without inferring clinical severity', () => {
  const services=[{id:'one',type:'primary',languages:['English','Arabic']},{id:'two',type:'self-help',languages:['English']}];
  assert.deepEqual(matchServices(services,{language:'Arabic'}).map(s=>s.id),['one']);
  assert.equal(matchServices(services,{}).length,2);
});
