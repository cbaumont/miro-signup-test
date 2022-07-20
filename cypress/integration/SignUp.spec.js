// SignUp.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Sign Up feature testing', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.getDataTest('button-with-input-cta').contains('Sign up free').click()
        cy.get('.signup__title-form').should('contain', 'Get started free today')
    })

    it('Should fill correct sign up data and send email confirmation', () => {
        cy.getDataTest('mr-form-signup-name-1').type('Carlos Test')
        cy.typeRandomEmail()
        cy.typeRandomPassword()
        cy.getDataTest('mr-form-signup-terms-1').find('path').click()
        cy.getDataTest('mr-form-signup-btn-start-1').click()
        cy.get('.signup__title-form').should('contain', 'Check your email')
    })
})