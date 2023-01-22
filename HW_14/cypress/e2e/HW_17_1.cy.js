import { faker } from '@faker-js/faker';

describe('login - UI', () => {
    let firstPassword = "Ov8ltbXS";
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
      cy.get(':nth-child(3) > .frm').type("katarinami@inbox.ru");
      cy.get(':nth-child(4) > .frm').type(firstPassword);
      cy.get('.btn-main').click();
      cy.contains("Kate").click({force: true});
      cy.get('.layout-column-start > :nth-child(1) > .frm').type(secondPassword);
      cy.get(':nth-child(4) > .form-page-group__main > .layout-column-start > :nth-child(2) > .frm').type(secondPassword);
      cy.get('.layout-row-end > .btn-service').click();
      cy.contains("Выйти с сайта").click();
      
      cy.contains("Вход и регистрация").click({force: true});
      cy.get(':nth-child(3) > .frm').type("katarinami@inbox.ru");
      cy.get(':nth-child(4) > .frm').type(firstPassword);
      cy.get('.btn-main').click();
      cy.contains("Неверное имя пользователя или пароль").should("exist");
      cy.get(':nth-child(4) > .frm').clear().type(secondPassword);
      cy.get('.btn-main').click();
      cy.contains("Kate").click({force: true});
      cy.get('.layout-column-start > :nth-child(1) > .frm').type(firstPassword);
      cy.get(':nth-child(4) > .form-page-group__main > .layout-column-start > :nth-child(2) > .frm').type(firstPassword);
      cy.get('.layout-row-end > .btn-service').click();
      cy.contains("Выйти с сайта").click()




    })
})