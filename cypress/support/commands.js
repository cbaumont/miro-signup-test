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
Cypress.Commands.add('getDataTest', (value) => {
    cy.get(`[data-testid="${value}"]`)
})

Cypress.Commands.add('typeRandomEmail', () => {
    var uuid = require("uuid")
    var id = uuid.v4()
    cy.getDataTest('mr-form-signup-email-1').type(id + '@carlos.com')
})

Cypress.Commands.add('typeRandomPassword', () => {
    var uuid = require("uuid");
    var id = uuid.v4();
    cy.getDataTest('mr-form-signup-password-1').type(id)
})