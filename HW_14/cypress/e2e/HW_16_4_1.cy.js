const textData = require ("../fixtures/dataSantaTestLogin.json");


describe('login', () => {
  
    it('login', () => {
      textData.forEach((item) => {
        cy.login(item.login, item.password, item.status)
      })            
    })
  
})


