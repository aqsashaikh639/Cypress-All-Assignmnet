import '@4tw/cypress-drag-drop'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//  import 'cypress-drag-drop';

Cypress.Commands.add('revertbutton', () => {
    cy.get('[data-name="revert"]').then((btn) => {
      if (btn.is(':enabled')) {
        cy.wrap(btn).click()
      }
    })
})
Cypress.Commands.add("accesstoken", () => {
  const refreshToken = "9QtrSCl6KI"
  cy.request({
    method: "POST",
    url: `https://auth.radioedit.ihrint.com/token?grant_type=refresh_token&refresh_token=${refreshToken}`,
  }).then((response) => {
    const accessToken = response.body.access_token
    // Set Authentication cookies
    cy.setCookie("access_token_secure", accessToken, 
      {
      domain: ".radioedit.ihrint.com",
    })
  })
  cy.visit("/")
})