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

Cypress.Commands.add('fillPlaylistForm', (editor, title, description, author) => {
  cy.get('[formcontrolname="editors"]').should('be.visible').type(editor)
  cy.get('.ant-select-item').contains(editor).should('be.visible').click()
  cy.get('#title').type(title)
  cy.get("#description").type(description)
  cy.get('#author').type(author)
})

Cypress.Commands.add('revertbutton', () => {
    cy.get('[data-name="revert"]').then((btn) => {
      if (btn.is(':enabled')) {
        cy.wrap(btn).click()
      }
    })
})
