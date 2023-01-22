import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/loginPage';
import { PersonalAccountPage } from '../pages/personalAccountPage';
import { StartPage } from '../pages/startPage';

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
      let loginPage = new LoginPage();
      let accountPage = new PersonalAccountPage();
      let startPage = new StartPage();
      cy.visit('/');
      startPage.elements.autorizationButton().click({force: true});
      loginPage.login("katarinami@inbox.ru", firstPassword); // авторизация
      loginPage.goToPersonalAccount("Kate");
      accountPage.changePassword(secondPassword); // смена пароля
      accountPage.elements.exitAccountButton().click();
           
      startPage.elements.autorizationButton().click({force: true});
      loginPage.login("katarinami@inbox.ru", firstPassword); // авторизация с неверным паролкм
      cy.contains("Неверное имя пользователя или пароль").should("exist");
      loginPage.elements.passwordField().clear().type(secondPassword); // авторизация с верным паролем
      loginPage.elements.loginButton().click();
      loginPage.goToPersonalAccount("Kate");
      accountPage.changePassword(firstPassword); // смена пароля
      accountPage.elements.exitAccountButton().click()

    })
})

