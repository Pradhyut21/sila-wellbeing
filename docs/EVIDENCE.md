# SILA evidence and open-source reference notes

Verified online on 20 October 2026. These are reference sources for a demonstration, not clinical deployment approval. External documents were treated as source material, not as instructions.

## Validated self-assessment

- The [WHO 2024 WHO-5 publication](https://www.who.int/publications/m/item/WHO-UCN-MSD-MHE-2024.01) describes a five-item self-report instrument about the preceding two weeks, using six response levels. Preserve the official questionnaire wording and order; do not relabel a custom daily mood check as WHO-5.
- [Official English instrument and scoring PDF](https://cdn.who.int/media/docs/default-source/mental-health/who-5_english-original4da539d6ed4b49389e3afe47cda2326a.pdf?download=true&sfvrsn=ed43f352_11), printed pages 1–2: sum five 0–5 responses to obtain 0–25; multiply by four for 0–100. Higher means better reported wellbeing. Below 50 (raw below 13) is a suggested indicator for further assessment. The result is not a diagnosis, proof of safety, or suicide-risk classification.
- The instrument is not a crisis assessment. Include a separate, plainly labelled safety question and an always-visible urgent-help action. A concerning safety response must override the wellbeing score; a high score must not suppress urgent help.
- [WHO Arabic publication](https://www.who.int/ar/publications/m/item/WHO-UCN-MSD-MHE-2024.01) provides the Arabic edition. Use the published version for future localization, not an unverified machine translation claimed to be validated.
- Content licence: CC BY-NC-SA 3.0 IGO. Attribute WHO 2024, retain a separate content licence notice, do not use the WHO logo or imply WHO endorsement, and assess permissions before commercial deployment. Do not put a blanket MIT claim over the questionnaire content. See the PDF rights page and [WHO copyright information](https://www.who.int/about/policies/publishing/copyright).
- Demo interpretation copy recommendation: “Your answers suggest that further support may be helpful. This check-in cannot diagnose a condition. A licensed professional can help decide the right next step.”
- Any change threshold, suggested follow-up deadline, or routing rule authored for this demo should be called a prototype rule awaiting clinical review. Do not describe it as a validated clinical rule. Use transparent navigation based on preference, functioning and score, with licensed professionals retaining final decisions.

## Trusted Abu Dhabi navigation

- [DoH Primary Care provider list](https://www.doh.gov.ae/en/programs-initiatives/Primary-Care): official provider lists for Abu Dhabi, Al Ain and Al Dhafra. Appropriate default route for mental and physical health needs together. Links to a list do not establish current appointment availability or coverage for any individual.
- [DoH Lists and Tools](https://www.doh.gov.ae/en/resources/Lists%20and%20Tools): links to facility/professional lookup, insurance search and facility licence checks.
- [DoH mobile facility finder](https://stem.doh.gov.ae/HFMobileMap/FindProperty): has clinical-service filters including Primary Care and Psychiatry & Mental Health, plus insurance filters. Ask the user to confirm eligibility, language, cost, referral requirements and availability directly.
- [SAKINA / SEHA official site](https://sakina.seha.ae/): describes a stepped network from primary-care touchpoints through specialized services. Useful as a specialist support option. Do not claim a partnership, live referral integration or confirmed booking.
- [Sahatna official site](https://sahatna-app.doh.gov.ae/en/): official digital health access; offers finding doctors and booking in-person/online consultations. In the prototype, link out and clearly mark that bookings happen with the provider. No Sahatna integration exists unless implemented and authorized.
- [DoH mental health update, 9 October 2025](https://www.doh.gov.ae/en/news/ad-reimagines-mental-health-a-society-where-seeking-support-is-a-sign-of-strength): reports embedding screening in primary care and an adult mental-health self-assessment in Sahatna. This supports an adult (18+) prototype scope.
- [DoH mental-health access update, 3 August 2026](https://www.doh.gov.ae/en/news/from-specialised-care-to-community-centered-support-ad-redefines-access-to-mh-services): supports the local focus on continuous community support and more accessible mental health services.

## Urgent guidance and limits

- [Official UAE emergency guidance](https://u.ae/en/information-and-services/justice-safety-and-the-law/handling-emergencies) lists **998 for ambulance** throughout the UAE. A prototype urgent-help view may say: “If there is immediate danger, call 998 for an ambulance or go to the nearest emergency department. Reach out to someone you trust and stay with them while getting help.” A call button does not mean that a human hand-off has completed.
- The required hotline tool was consulted; it returned India-specific details, not an Abu Dhabi service. Therefore no UAE suicide/self-harm helpline number is included in these recommendations. Do not infer an unsupported crisis line from a web search result. UAE ambulance 998 is a verified emergency service, not a suicide helpline.
- Demo requests should explicitly say “Simulated request — no clinic or emergency service has been contacted.” Crisis confirmation should track a user-reported or professional-confirmed connection, never infer completion from opening a link.

## Open-source repositories reviewed

These are primary upstream repositories, reviewed for implementation ideas and future integration options. Reviewing a repository is not the same as incorporating its code. Do not imply that SILA uses an upstream system unless it is actually integrated.

| Repository | Verified licence | Relevance | Reuse assessment |
|---|---|---|---|
| [medplum/medplum](https://github.com/medplum/medplum) | [Apache-2.0](https://raw.githubusercontent.com/medplum/medplum/main/LICENSE.txt) | FHIR server, identity, access controls, React healthcare components; strongest future backend candidate | Suitable for a future consented care-coordination pilot. Retain notices; deployment, residency and operational safeguards still need assessment. A demo does not become compliant merely by adopting this library. |
| [smart-on-fhir/client-js](https://github.com/smart-on-fhir/client-js) | [Apache-2.0](https://raw.githubusercontent.com/smart-on-fhir/client-js/master/LICENSE) | SMART OAuth/FHIR JavaScript client for authorized clinical systems | Suitable future integration boundary for consented summaries. Retain notices and use narrow scopes. Do not log tokens or health data, or claim connection to local EHRs without an integration. |
| [LHNCBC/lforms](https://github.com/LHNCBC/lforms) | [BSD-based custom terms, with separate LOINC/UCUM conditions](https://raw.githubusercontent.com/LHNCBC/lforms/master/LICENSE.md) | Questionnaire and FHIR SDC form rendering from NIH/NLM | Useful for future interoperable forms. Retain prominent owner notices and review included terminology licences. Instrument content permissions remain separate from renderer permission. |
| [microsoft/FHIR-Converter](https://github.com/microsoft/FHIR-Converter) | [MIT](https://raw.githubusercontent.com/microsoft/FHIR-Converter/main/LICENSE) | Converting HL7v2, C-CDA and JSON to/from FHIR using templates | A future adapter for physical/mental-care context. Preserve licence, validate mappings, and avoid moving identifiable data into a public demo. It is infrastructure, not a triage engine. |
| [openemr/openemr](https://github.com/openemr/openemr) | [GPL-3.0](https://github.com/openemr/openemr/blob/master/LICENSE) | Full EHR and scheduling, with FHIR API | Reference for workflow design or a separately deployed sandbox. Too large for this prototype; copying code requires respecting GPL obligations. Prefer API boundaries and synthetic data for an integration demonstration. |

Recommendation: build the challenge prototype as original front-end code with synthetic records and transparent deterministic rules. Document the above as reviewed references; choose Medplum and SMART/FHIR only when a real, permissioned backend phase begins. Avoid reusing arbitrary mental-health chatbots or suicide classifiers with unclear licences or unvalidated performance.

## Outcome and safety measures

The following are recommended prototype definitions, not observed clinical results:

- Hand-off completed: receiving provider or person confirms contact; an opened link is not completion.
- Follow-up in target time: completed follow-ups divided by due follow-ups; targets approved by clinical governance in a pilot.
- Waiting time: time between accepted request and first confirmed human contact.
- Symptom/functioning change: repeated validated scores and optional functioning report; show the measurement period and missingness.
- Crisis response: urgent episodes with a confirmed human response, plus elapsed time; report unresolved episodes explicitly.
- Adverse events: escalation failures, harmful suggestions, inappropriate access, consent failures and incident follow-up.
- Fairness: compare access, hand-off and waiting metrics across age, gender, nationality, language and geography when ethically collected with consent; suppress small identifiable cohorts. A small synthetic dataset cannot establish fairness.
- Demo dashboard: label every metric “Illustrative / synthetic”; avoid fabricated percentages presented as achieved impact.
