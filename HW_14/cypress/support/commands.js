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
Cypress.Commands.add('testLink', (selector, pathnameForTest, selectorForTest,TextForTest) => {
    cy.get(selector).last().click(),
    cy.location('pathname').should('eq', pathnameForTest),
    cy.get(selectorForTest).first().should('have.text', TextForTest),
    cy.visit('/')
 }) // Тестирование перехода по ссылке


 Cypress.Commands.add('login', (login, password, status) => {
    cy.request({
        method: 'POST',
        url: '/api/login?redirect=%2',
        failOnStatusCode: false,
        body: {
          email: login,
          password: password
               }
      }).then((response) => {
        expect(response.status).to.eq(status)
      })
}) // Тестирование авторизации

Cypress.Commands.add('registration', (UserEmail, Name, status) => {
    cy.request({
        method: 'POST',
        url: '/api/register',
        failOnStatusCode: false,
        body: {
          email: UserEmail,
          username: Name
               }
      }).then((response) => {
        expect(response.status).to.eq(status)     
      })
}) // Тестирование регистрации





