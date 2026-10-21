# SILA evaluation plan

SILA currently demonstrates a workflow with synthetic records. No patients have been enrolled, no clinical study has been conducted, and no improvement in health outcomes, access or fairness has been established. Dashboard values are illustrative, not achieved impact. Software checks establish only the behavior they exercise; they do not validate clinical safety or effectiveness.

## Measures and denominators

| Measure | Proposed operational definition | Interpretation and limits |
|---|---|---|
| Assessment completion | Fully completed voluntary assessments divided by assessments started within the evaluation period. Report exits and skipped items separately. | Completion is not benefit. Do not count a synthetic prefilled example as a real assessment. |
| Confirmed hand-off | Referrals with confirmed human contact divided by accepted referrals due for contact. Preserve requested, acknowledged, contacted and completed as separate states. | A button click, exported summary or opened directory is not a completed hand-off. Report how contact was confirmed. |
| Follow-up within the intended time | Follow-ups completed by their clinically approved deadline divided by all follow-ups due in that period. Include overdue and unresolved records. | Deadlines must be set by clinical governance and receiving-service capacity. Demo deadlines are illustrative. |
| Waiting time | Time from accepted referral to first confirmed contact with the receiving professional. Report median, upper percentiles and the number still waiting. | Excluding unresolved requests would bias the result. Track both request acceptance and initial request time. |
| Repeated wellbeing | Within-person WHO-5 change between defined timepoints; report baseline, interval, follow-up score, paired sample size and missingness. | Score change is not proof that SILA caused improvement or a substitute for professional assessment. Repeated measures must retain the two-week recall period. |
| Functioning | Change in a prespecified, appropriately validated functioning measure, collected with consent. | An unvalidated demo question may support conversation but must not be presented as a validated outcome instrument. |
| Crisis-response completion | Urgent episodes with a confirmed human response divided by all urgent episodes; also report response time, unresolved episodes and failed contact. | Opening emergency guidance or pressing a call button is not proof of response. Emergency pathways require real operational partners before use. |
| Adverse events | Number, severity and rate of harmful recommendations, missed/failed escalations, delayed responses, unauthorized disclosure, consent failures and other defined incidents. | Record incidents even when no health outcome is known. Include clinical review, remediation and recurrence tracking. |
| Autonomy and trust | Consented feedback on understanding, ability to decline, control over sharing and perceived pressure; record withdrawal and complaint rates. | Participation must remain voluntary. Do not interpret silence as consent or satisfaction. |
| Fairness | Compare completion, hand-off, waiting time and unresolved urgent events by prespecified age, gender, nationality, language and geography groups when ethically and lawfully collected. | Show denominators, missingness and uncertainty; suppress small identifiable cells. Synthetic cases cannot establish population fairness. |

## Targets are proposed, not achieved

No numeric clinical performance target is claimed in this submission. Before a pilot, a licensed clinical owner and receiving services should jointly define acceptable response windows by urgency, service capacity, eligibility and operating hours. The protocol should specify success thresholds, minimum sample sizes, uncertainty reporting, safety stopping rules and how missing data will be handled before analysis begins.

Suggested engineering acceptance criteria are: correct WHO-5 arithmetic at boundary scores; no scored result from incomplete responses; urgent guidance reachable without assessment; explicit safety disclosures taking precedence over score; consent choices reflected in preview/export; and simulated actions clearly identified. Passing these checks would establish prototype behavior only.

## Staged evaluation

1. **Desk and scenario review:** licensed clinicians review content, interpretation, urgent-disclosure paths, failure states and local service suitability. Use scripted low wellbeing, mixed physical/mental need, declined sharing, immediate-danger, unavailable-service and unresolved-contact cases.
2. **Usability and accessibility:** adults test comprehension, navigation, voluntary choices, keyboard use, screen-reader support and language clarity using synthetic information. Assess whether people understand that requests and clinician views are simulated.
3. **Technical and security validation:** test scoring, state changes, consent boundaries and failure handling. Before real data, add authorization, server enforcement, logging controls, recovery and integration tests using authorized sandbox systems.
4. **Governed prospective pilot:** only after the gates in [SAFETY.md](SAFETY.md) are met, enroll consented adults under an approved protocol with staffed receiving services, appropriate clinical oversight and incident management.
5. **Transparent reporting:** report counts, denominators, missingness, unresolved cases, adverse events and subgroup uncertainty alongside any benefit. Separate feasibility outcomes from causal effectiveness claims; the latter require an appropriate study design.

## Evidence required for a later claim

“Connected a person to support” requires confirmed receiving-human contact. “Reduced waiting time” requires a defined comparison and comparable populations. “Improved wellbeing” requires repeated valid measurement, an explicit follow-up period and a study design supporting the attribution. “Fair” or “safe” cannot be established by a handful of synthetic scenarios or the absence of reported incidents.

No such claims are made for this demonstration.
