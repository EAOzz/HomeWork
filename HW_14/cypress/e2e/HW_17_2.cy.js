const boxData = require("../fixtures/dataSantaTestBox.json");
let keyBox;

describe("box", () => {

    before(() => {
    cy.request({
        method: "GET",
        url: "/api/box/key",
        headers: {
          cookie: boxData.cookie,
        },
        body: {
          email: Cypress.env("username"),
          password: Cypress.env("password"),
        },
      }).then(({ body }) => {
        keyBox = body      
      });
    }); // получение ключа коробки
  

  it("new box", () => {
    cy.request({
        method: "POST",
        url: "/api/box",
        headers: {
          cookie: boxData.cookie,
        },
        body: {
          usePost: true,
          useWish: true,
          cashLimit: boxData.cashLimit,
          cashLimitCurrency: boxData.cashLimitCurrency,
          createAdminCard: null,
          email: null,
          isArchived: null,
          isCreated: true,
          isInviteAfterDraw: null,
          isPhoneRequired: true,
          key: keyBox,
          logo: null,
          name: boxData.nameBox,
          picture: boxData.picture,
          useCashLimit: true,
          useCircleDraw: null,
          useNames: true,
          usePost: true,
          useWish: true,
        }
      }); // создание коробки
    
      cy.request({
        method: "POST",
        url: "/api/box",
        headers: {
          cookie: boxData.cookie,
        },
        body: {
          usePost: true,
          useWish: true,
          cashLimit: boxData.cashLimit,
          cashLimitCurrency: boxData.cashLimitCurrency,
          createAdminCard: null,
          email: null,
          isArchived: null,
          isCreated: true,
          isInviteAfterDraw: null,
          isPhoneRequired: true,
          key: keyBox,
          logo: null,
          name: boxData.nameBox,
          picture: boxData.changPicture,
          useCashLimit: true,
          useCircleDraw: null,
          useNames: true,
          usePost: true,
          useWish: true,
        }
      }); // редактирование коробки

      let urlBox = "/api/box/" + keyBox;
      cy.request({
        method: "DELETE",
        url: urlBox,
        headers: {
          cookie: boxData.cookie,
        }
      }); //удаление коробки

});
});
