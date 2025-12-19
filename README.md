# Cypress E2E Tests

## Project Overview

This project contains end-to-end (E2E) tests written using **Cypress**. The tests cover login functionalities for different applications, including handling cross-origin scenarios.

All tests are located in the `cypress/e2e` folder.

---

## Test Files

### 1. `crossorigin.cy.js`

- Tests GitHub login functionality.
- Demonstrates **cross-origin testing** with Cypress.
- Covers scenarios with and without using `cy.origin()`.

### 2. `gactions.cy.js`

- Tests login functionality for **Bajra Technologies** website.
- Contains two test scenarios:
  - Valid login
  - Invalid login

---

## Prerequisites

- Node.js installed (v16 or above recommended)
- Cypress installed via npm:
  ```bash
  npm install cypress
  ```
