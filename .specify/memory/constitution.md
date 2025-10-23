# KalaConnect Constitution
<!--
Sync Impact Report

- Version change: UNSET -> 1.0.0
- Modified principles: (new) Code Quality, Testing Standards, User Experience Consistency, Performance Requirements
- Added sections: Additional Constraints (security, accessibility), Development Workflow (PR & CI gates)
- Removed sections: none
- Templates requiring updates:
	- .specify/templates/plan-template.md ⚠ pending (Constitution Check: must map to concrete gates derived from Principles)
	- .specify/templates/spec-template.md ⚠ pending (Make User Scenarios & Testing mandatory and reference Testing Standards)
	- .specify/templates/tasks-template.md ⚠ pending (Ensure testing tasks and performance tasks are mandatory in Phase 1/2)
- Follow-up TODOs:
	- TODO(RATIFICATION_DATE): Add ratification date when the governance group formally adopts this constitution.
	- Propagate concrete "Constitution Check" gates into plan/spec/tasks templates when ratified.
-->

## Core Principles

### Code Quality (I)
All code delivered to the repository MUST follow the project's codestyle, linting, and formatting rules. Code is accepted only after a passing CI lint stage and at least one approving review from a designated reviewer.

Rules and expectations:
- MUST use the official repository linters/formatters and fix violations before merging.
- MUST be modular: prefer small, well-scoped modules with clear interfaces and no hidden side-effects.
- MUST include in-line comments only for non-obvious logic; prefer self-documenting code and tests that demonstrate behavior.

Rationale: High code quality reduces bugs, makes reviews faster, and lowers long-term maintenance cost.

### Testing Standards (II)
Testing is non-negotiable. Every change that adds behavior MUST be accompanied by automated tests that exercise the behavior at the appropriate level (unit, integration, or end-to-end).

Rules and expectations:
- MUST follow a test-first workflow where practical: write failing tests for the requested behavior before implementing.
- MUST include unit tests for business logic and critical edge cases, integration tests for cross-module contracts, and E2E tests for major user flows when applicable.
- SHOULD meet a minimum coverage threshold for new/changed code (project default: 80% on new modules; exceptions require explicit approval and documented rationale).
- CI pipelines MUST run the full test suite and block merges on failures for main and release branches.

Rationale: Reliable automated tests enable safe refactoring, catch regressions early, and document expected behavior.

### User Experience Consistency (III)
User experience (UX) consistency is required across the product surface. Visual, interaction, copy, and accessibility patterns MUST adhere to the design system and accessibility guidelines.

Rules and expectations:
- MUST use Material-UI (MUI) components (`Container`, `Card`, `Typography`, etc.) for all standard UI elements.
- MUST use the shared design tokens/components (colors, spacing, typography) where a design system exists.
- MUST satisfy basic accessibility requirements: semantic HTML, keyboard navigation, and ARIA where necessary (WCAG 2.1 AA baseline where applicable).
- MUST keep copy consistent and concise; user-facing text changes should be reviewed by product/UX for tone and clarity when they affect flows.

Rationale: Consistent UX reduces user friction, improves trust, and lowers support costs.

### Styling Standards (IV)
Custom styling MUST be implemented using CSS Modules (`.module.css`). Plain CSS, inline styles, or other CSS-in-JS libraries are not allowed.

Rules and expectations:
- MUST scope styles to components using CSS Modules to avoid global conflicts.
- MUST organize styles in the same directory as the component/page they belong to.
- SHOULD use meaningful class names that reflect the component structure.

Rationale: CSS Modules ensure style encapsulation and maintainability.

### Routing Standards (V)
All navigation and page routing MUST use `react-router-dom`.

Rules and expectations:
- MUST use `Link` for navigation between pages.
- MUST use hooks like `useParams` for accessing route parameters.
- MUST define new pages in `src/pages/`.

Rationale: Consistent routing ensures predictable navigation and maintainable code.

### File Structure and Data Usage (VI)
The project MUST follow the specified file structure and data usage guidelines.

Rules and expectations:
- MUST place new pages in `src/pages/` and reusable components in `src/components/`.
- MUST consume data from the static `src/data/db.js` file until a real API is specified.
- MUST use functional JavaScript components for all new code.

Rationale: A consistent file structure and data usage pattern improve collaboration and maintainability.

## Additional Constraints

Security and compliance:
- MUST follow the project's security checklist for secrets, credentials, and third-party dependencies.
- Sensitive data MUST be handled according to applicable laws and company policies; when unclear, consult security lead.

Accessibility:
- Accessibility requirements in the UX section apply across web and mobile; accessibility must be tested in QA for major UI changes.

Technology choices:
- Preferred languages and frameworks should be listed in the implementation plan; deviations require explicit justification in the plan.


## Development Workflow

Code reviews and PRs:
- All changes MUST be submitted as pull requests with a descriptive title and an explanatory summary linking to the plan/spec when applicable.
- PRs MUST include related tests and, when changing public behavior, compatibility notes and migration guidance.
- At least one approving review is REQUIRED for changes to non-experimental code; two approvers are REQUIRED for high-risk or security-sensitive changes.

Quality gates:
- CI MUST run lint, unit, and integration tests on all PRs. Branch protection rules SHOULD be configured to block merges on failing checks.
- Performance tests and E2E tests MUST run on release candidates where the feature plan specifies budgets.

Releases and versioning:
- Use semantic versioning for published packages. Breaking changes MUST follow the documented migration process and be flagged in the changelog.
- For application releases, follow the release checklist in the repository's release guidance.

Incident & rollback:
- Production incidents MUST follow the incident response playbook. Rollbacks are permitted when a release causes severe regressions; rollback decision and remediation MUST be documented in the incident report.

## Governance

Amendments:
- Amendments to this constitution MUST be proposed by opening a PR to `.specify/memory/constitution.md` with a clear rationale and migration plan for any changes that affect workflows or templates.
- Amendments that add or materially change principles (new obligations or removal of an existing non-negotiable) MUST be approved by a two-thirds majority of the repository maintainers and one representative from engineering leadership.

Versioning and change classification:
- CONSTITUTION versioning follows semantic rules: MAJOR for breaking governance changes, MINOR for added principles or expanded mandatory guidance, PATCH for clarifications and typo fixes.
- The author of the PR MUST state the suggested version bump and rationale in the PR description.

Compliance and enforcement:
- All plans (plan-template.md) MUST include a "Constitution Check" section summarizing how the change meets each relevant principle. The reviewer is responsible for verifying compliance in the PR checklist.
- Repeated violations of these principles (e.g., merging without tests, repeatedly bypassing review) will be escalated to maintainers and can result in temporary contribution restrictions until resolved.

**Version**: 1.1.0 | **Ratified**: TODO(RATIFICATION_DATE) | **Last Amended**: 2025-10-23
