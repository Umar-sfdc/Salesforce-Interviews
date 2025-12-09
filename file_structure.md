```bash

salesforce-interview-qa/
├─ README.md
├─ CONTRIBUTING.md              # optional, if you open it for others
├─ index.md                     # master index of all questions
├─ tags.json                    # optional: meta info (topic, difficulty, type)
│
├─ admin/
│  ├─ theory/
│  │  ├─ Q001-owd-sharing-model.md
│  │  └─ Q002-profiles-vs-permission-sets.md
│  ├─ scenario/
│  │  ├─ Q101-user-cant-see-records.md
│  │  └─ Q102-approval-process-requirement.md
│  └─ hands-on/
│     └─ Q201-validation-rule-task.md
│
├─ apex/
│  ├─ theory/
│  │  ├─ Q001-governor-limits.md
│  │  └─ Q002-trigger-context-variables.md
│  ├─ scenario/
│  │  ├─ Q101-bulkify-trigger-opportunity.md
│  │  └─ Q102-schedule-batch-use-case.md
│  └─ code/
│     ├─ Q101/
│     │  ├─ question.md
│     │  ├─ Trigger_OpportunityHandler.trigger
│     │  └─ OpportunityHandler.cls
│     └─ Q102/
│        ├─ question.md
│        ├─ AccountBatch.cls
│        └─ AccountBatch_Test.cls
│
├─ lwc/
│  ├─ theory/
│  │  ├─ Q001-lwc-vs-aura.md
│  │  └─ Q002-reactivity-and-track.md
│  ├─ scenario/
│  │  ├─ Q101-search-component-wire-apex.md
│  │  └─ Q102-datatable-inline-editing.md
│  └─ code/
│     ├─ Q101-search-component/
│     │  ├─ searchComponent.html
│     │  ├─ searchComponent.js
│     │  ├─ searchComponent.js-meta.xml
│     │  └─ searchComponent.css
│     └─ Q102-datatable-inline-edit/
│        ├─ ...
│
├─ omniscript/
│  ├─ theory/
│  ├─ scenario/
│  └─ assets/                    # screenshots, JSON configs, etc.
│
├─ integration/
│  ├─ theory/
│  ├─ scenario/
│  └─ code/
│
└─ mixed-scenarios/
   ├─ Q001-end-to-end-lead-to-cash.md  # Uses admin + apex + lwc
   └─ Q002-data-migration-strategy.md


```
