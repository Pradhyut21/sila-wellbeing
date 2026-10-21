# SILA safety and intended-use statement

SILA is a challenge demonstration for adults aged 18 and over, using synthetic examples. It demonstrates a voluntary wellbeing check-in, understandable results, support navigation, consent controls and a human review workflow. It has not been clinically validated or approved for patient care.

## Clinical boundaries

- WHO-5 measures self-reported wellbeing over the previous two weeks. It cannot diagnose a mental health condition, establish the absence of risk or determine treatment. Its scoring is implemented separately from the prototype navigation rules; see [EVIDENCE.md](EVIDENCE.md).
- A lower score may justify offering further professional assessment. A high score does not establish safety. Changes over time, functioning and a person's preferences need context and professional judgement.
- Any navigation priority, change threshold or follow-up interval shown by SILA is a demonstration rule awaiting clinical review. It is not a validated triage protocol or a promise of service.
- SILA does not generate medical advice, prescribe medication, interpret free text as a diagnosis or act as a conversational therapist. Licensed healthcare professionals retain responsibility for clinical decisions in an eventual supervised service.
- Children and adolescents require separate consent, safeguarding, content and escalation design. The current adult demonstration is unsuitable for this population.

## Urgent disclosures

The safety pathway is an explicit disclosure flow, not an automated suicide-risk classifier. A person can open urgent help directly. A disclosed immediate concern should take precedence over any numerical score and display emergency guidance without requiring completion of the check-in. A person must also be able to skip questions and retain access to help.

For immediate danger in the UAE, direct the person to call **998 for an ambulance** or attend the nearest emergency department, and encourage contact with a trusted person who can stay with them while help is arranged. The number is verified against [official UAE emergency guidance](https://u.ae/en/information-and-services/justice-safety-and-the-law/handling-emergencies). The prototype should not promise confidentiality from emergency responders or describe an emergency call as completed merely because a button was pressed.

No live clinician, responder or clinic monitors this demonstration. A demo urgent flag or hand-off record does not notify emergency services. Navigation links leave SILA; telephone links require the person's device and action. Simulated workflow actions must clearly state that no provider or emergency service has been contacted. Human connection and completion must be confirmed separately in a real service.

No unsupported suicide/self-harm helpline number is provided. The hotline lookup available during research did not return an Abu Dhabi service; no number was inferred from search results.

## Privacy, consent and autonomy

The current prototype runs in browser memory without patient accounts or a clinical database. Use fictional information only. A refresh or restart resets the demonstration; this is not a reliable health record or a secure longitudinal care system. Hosting providers may receive ordinary web request metadata, and following an external link is subject to that service's policies.

Consent controls demonstrate separate choices for check-in context and care sharing. Revocation is a local demonstration action, not a revocation request sent to a provider or EHR. Downloading a summary creates a file outside the application; the person controls subsequent sharing and deletion. SILA cannot retract copies already downloaded or shared elsewhere.

There is no employer reporting integration. The demo does not implement production identity, role-based authorization, auditing, encryption key management or access control between real users. A clinician view is a simulated persona, not authenticated access by a licensed professional. No privacy guarantee should be inferred from the visual design.

## Gates before any supervised pilot

These are necessary future work, not completed approvals:

1. **Clinical governance:** a named licensed clinical owner, locally approved intended use, reviewed eligibility and navigation rules, accessible content, validated translations, and documented clinical responsibility.
2. **Human response:** contracted and staffed receiving services, explicit operating hours and response expectations, emergency fallback routes, acknowledged hand-offs, and procedures for unresolved or failed contact. Test the complete pathway with responders before enrolling participants.
3. **Privacy and legal review:** applicable UAE health-data and privacy obligations, data residency and transfers, retention, granular informed consent, withdrawal handling, provider agreements, patient rights and any medical-device classification. No current compliance certification is claimed.
4. **Security engineering:** real authentication and authorization; consent enforcement on the server; least privilege; encryption in transit and at rest; secure secrets; audit trails; backup/recovery; vulnerability review; abuse controls and incident response. Test unauthorized-access and revocation scenarios.
5. **Integration verification:** authorized, validated provider/EHR interfaces with reliable acknowledgements, retry handling and monitoring. A directory link or prototype FHIR payload is not an integrated referral.
6. **Prospective evaluation:** usability and accessibility testing, clinician review of failure cases, consented pilot data, adverse-event monitoring, subgroup analysis and independent review of claims. Define stopping criteria and a rollback route.
7. **Content rights:** preserve the WHO instrument's separate licence and attribution; resolve commercial-use permissions where needed. Recheck all service details and emergency guidance before release.

## Principal failure modes

| Failure | Required control in a pilot |
|---|---|
| High wellbeing score hides immediate danger | Direct safety disclosure and urgent help remain available independently of scores. |
| A request is mistaken for completed care | Distinct requested, acknowledged, contacted and completed states, with time stamps and human confirmation. |
| A service is unavailable or ineligible | Confirm coverage, age, language, cost, referral requirements and capacity; offer a verified alternative. |
| Sensitive context is shared beyond consent | Field-level selection, recipient confirmation, server enforcement, audit and revocation handling. |
| Symptom change is overinterpreted | Show the measurement period and missingness; avoid diagnosis; request clinical interpretation. |
| A small cohort creates a misleading fairness claim | Report denominators and uncertainty, suppress identifiable cells, and defer conclusions where evidence is insufficient. |
