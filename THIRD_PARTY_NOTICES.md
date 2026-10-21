# Third-party notices and content rights

## Original SILA code

The original SILA application source code is offered under the MIT licence in [LICENSE](LICENSE). That licence applies only to original SILA code and other material the authors have the right to license. It does not relicense third-party questionnaire content, linked services, trademarks or external repositories.

## WHO-5 instrument

The WHO-5 instrument and any reproduced questionnaire wording are separate third-party content:

**World Health Organization. The World Health Organization-Five Well-Being Index (WHO-5). Geneva: World Health Organization; 2024. Licence: CC BY-NC-SA 3.0 IGO. © World Health Organization 2024.**

- [Official publication](https://www.who.int/publications/m/item/WHO-UCN-MSD-MHE-2024.01)
- [Official English instrument and scoring PDF](https://cdn.who.int/media/docs/default-source/mental-health/who-5_english-original4da539d6ed4b49389e3afe47cda2326a.pdf?download=true&sfvrsn=ed43f352_11)
- [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 IGO licence](https://creativecommons.org/licenses/by-nc-sa/3.0/igo/)
- [WHO rights and permissions](https://www.who.int/about/policies/publishing/copyright)

The questionnaire content is excluded from SILA's MIT licence. Attribution and the noncommercial/share-alike conditions must be preserved as applicable. Review WHO permissions before commercial use or distribution beyond the permitted scope. Any adaptation or translation must follow the source licence; an unofficial translation must not be represented as an official WHO edition.

No WHO logo is used, and no WHO endorsement of SILA is claimed. Interface layout and surrounding explanatory text do not change the instrument's ownership. SILA's prototype navigation rules are original demonstration logic and are not part of a WHO clinical protocol.

## Repositories reviewed, not incorporated

The following repositories were reviewed online for architecture and future integration ideas. Their source code is not incorporated into this prototype, and they are not deployed dependencies or clinical integrations. Listing a project does not imply endorsement or partnership.

| Repository | Upstream licence | Reference purpose |
|---|---|---|
| [medplum/medplum](https://github.com/medplum/medplum) | [Apache-2.0](https://github.com/medplum/medplum/blob/main/LICENSE.txt) | Future FHIR backend, identity and care-workflow architecture. |
| [smart-on-fhir/client-js](https://github.com/smart-on-fhir/client-js) | [Apache-2.0](https://github.com/smart-on-fhir/client-js/blob/master/LICENSE) | Future authorized SMART/FHIR client integration. |
| [LHNCBC/lforms](https://github.com/LHNCBC/lforms) | [BSD-based custom terms; LOINC/UCUM conditions may also apply](https://github.com/LHNCBC/lforms/blob/master/LICENSE.md) | Interoperable questionnaire rendering. |
| [microsoft/FHIR-Converter](https://github.com/microsoft/FHIR-Converter) | [MIT](https://github.com/microsoft/FHIR-Converter/blob/main/LICENSE) | Future health-data format adapters. |
| [openemr/openemr](https://github.com/openemr/openemr) | [GPL-3.0](https://github.com/openemr/openemr/blob/master/LICENSE) | EHR workflow and sandbox API reference. |

Any future incorporation requires reviewing the exact version, dependency tree and applicable notices. The source licences above do not grant rights to third-party clinical instruments, terminology, service branding or data contained in those projects.

## External services and demonstration media

DoH, SEHA/SAKINA, Sahatna and UAE government links are navigation and evidence references. SILA claims no affiliation, live referral connection or access to their systems. Service availability, eligibility and policies remain with the receiving service.

Any accompanying narration and video are demonstration materials. Synthetic people, cases and dashboard values are illustrative; they do not represent patient records, measured outcomes or verified service performance.

The editable video source uses Inter, JetBrains Mono and Source Serif fonts under their separate SIL Open Font Licenses, retained beside the font files in `video/assets/fonts/`. GSAP retains its original header and [standard licence](https://gsap.com/standard-license/). Narration was generated with the local Kokoro-82M engine; no model weights are distributed. See [video asset provenance](video/README.md) for details. These third-party assets are excluded from the original-code MIT grant.
