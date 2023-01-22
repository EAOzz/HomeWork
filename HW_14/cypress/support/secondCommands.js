Cypress.Commands.add('login_UI', (loginFieldSelector, email, passwordFieldSelector, password, loginButtonSelector) => {
    cy.get(loginFieldSelector).type(email);
    cy.get(passwordFieldSelector).type(password);
    cy.get(loginButtonSelector).click();
 }) // авторизация

 Cypress.Commands.add('changePassword', (passwordField1Selector, passwordField2Selector, passwordButtonSelector, password) => {
    cy.get(passwordField1Selector).type(password);
    cy.get(passwordField2Selector).type(password);
    cy.get(passwordButtonSelector).click();
 }) // смена пароля