// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
beforeEach(() => {
  // Set the cookie before every test
  cy.setCookie(
    'access_token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGkiOiJ1c2VyL3N5c3RlbS9zeXN0ZW0iLCJzdWIiOiJ1c2VyL2xkYXAvMTEzNDA2MyIsInNjbyI6IiIsInNsdCI6Ik9pM2RGZSIsImV4cCI6MTc1NzY3NTI5MywiZXhwaCI6MTc1ODAyNzMzMH0.iM5uRRkU2o1nedY2TEOoaaXYyOU3wblSywCHK6PeZ50',
    {domain: '.radioedit.ihrint.com'}
);
});