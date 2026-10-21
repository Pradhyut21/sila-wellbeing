# Prototype validation

Verified on 20 October 2026 using synthetic records and a local Chromium browser.

## Automated domain checks

`npm test`: **9 passed, 0 failed**. Coverage includes all 26 possible WHO-5 raw totals; invalid and incomplete answers; field-level consent minimisation; decline and re-route; fresh approval for an alternate recipient; withdrawal; preservation of already recorded contact after withdrawal; missing outcome data; small-cohort suppression; and urgent-disclosure precedence.

`npm run check`: JavaScript syntax checks passed.

## Browser walkthrough

**9 checks passed with no page errors.** The full journey used a WHO-5 score of 44/100, Arabic access preference and the predefined physical context “Sleep concerns.” It then created a simulated Sakina handoff, declined and rerouted it, approved a new primary-care handoff, accepted it, confirmed contact and revoked sharing.

The available care-team payload disappeared after revocation; previously recorded outcome events remained visible in aggregate session counts. Urgent help showed the official UAE ambulance option and explicitly stated that no service had been contacted. Reloading cleared in-memory records. All seven views were checked at 390, 768 and 1440 pixels with no document horizontal overflow.

The downloadable receipt was separately checked: approving access preferences alone did not export a score or physical-health context. It explicitly labels the JSON as a synthetic demonstration, not a validated FHIR resource or evidence of care.

The [browser result record](browser-results.json) contains the checked scenarios. These functional checks do not establish clinical effectiveness, population fairness, professional usability, production security, or regulatory approval.
