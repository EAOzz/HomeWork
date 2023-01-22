import { faker } from '@faker-js/faker';
const loginPageElemrnts = require("../fixtures/pages/loginPageSelectors.json");
const accountPageElements = require("../fixtures/pages/accauntPageSelectors.json");

describe('login - UI', () => {
    let firstPassword = "1qaz2wsx";
    let secondPassword = faker.internet.password(8);
    console.log(secondPassword);
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    });

  
    it('registration_name_test', () => {
      
      cy.visit('/');
      cy.contains("Вход и регистрация").click({force: true});
      cy.login_UI(loginPageElemrnts.loginField, "katarinami@inbox.ru", loginPageElemrnts.passwordField, firstPassword, loginPageElemrnts.loginButton);
      cy.contains("Kate").click({force: true});
      cy.changePassword(accountPageElements.changePasswordField1, accountPageElements.changePasswordField2, accountPageElements.changePasswordButton, secondPassword);
      cy.contains("Выйти с сайта").click();

      cy.contains("Вход и регистрация").click({force: true});
      cy.login_UI(loginPageElemrnts.loginField, "katarinami@inbox.ru", loginPageElemrnts.passwordField, firstPassword, loginPageElemrnts.loginButton);
      cy.contains("Неверное имя пользователя или пароль").should("exist");
      cy.get(loginPageElemrnts.passwordField).clear().type(secondPassword);
      cy.get(loginPageElemrnts.loginButton).click();
      cy.contains("Kate").click({force: true});
      cy.changePassword(accountPageElements.changePasswordField1, accountPageElements.changePasswordField2, accountPageElements.changePasswordButton, firstPassword);
      cy.contains("Выйти с сайта").click()

    })
})

