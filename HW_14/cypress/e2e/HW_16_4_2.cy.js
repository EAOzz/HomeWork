const textDataName = require ("../fixtures/dataSantaTestRegistrationName.json");
const textDataMail = require ("../fixtures/dataSantaTestRegistrationMail.json");
let randomMail;

// function randomEMail()  {
//   let EMail = "0";
//   cy.visit('https://www.temporary-email.org/ru');
//   cy.get('#trsh_mail').wait(2000).invoke('val').then((sometext) => {
//     EMail = sometext;
//     cy.log(EMail)
//   });
//   cy.log(EMail);
//   return EMail
// }; // рандомайзер

describe('registration', () => {
  
    beforeEach(() => {
        cy.visit('https://www.temporary-email.org/ru'),
        cy.get('#trsh_mail').wait(2000).invoke('val').then((sometext) => {
          randomMail = sometext;
          cy.log(randomMail);
          }),
          cy.visit('/')
    })
      
    // beforeEach(() => {
    //     randomMail =  randomEMail(),
    //     cy.log(randomMail),
    //     cy.visit('/')
    // })

    it('registration_name_test', () => {
      textDataName.forEach((item) => {
        cy.registration(randomMail, item.userName, item.status)
      })         
    })

    })


