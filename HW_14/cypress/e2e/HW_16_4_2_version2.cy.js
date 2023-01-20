const textDataName = require ("../fixtures/dataSantaTestRegistrationName.json");
const textDataMail = require ("../fixtures/dataSantaTestRegistrationMail.json");
let randomMail;

function randomEMail()  {
  var abc = "abcdefghijklmnopqrstuvwxyz";
  var rs = "";
  while (rs.length < 8) {
    rs += abc[Math.floor(Math.random() * abc.length)];
  };
  rs = rs + "@enoiv.com";
  console.log(rs);
  return rs
  }

describe('registration', () => {
  
    it('registration_name_test', () => {
      cy.visit('/'),
      textDataName.forEach((item) => {
       cy.registration(randomEMail(), item.userName, item.status)
      })         
    })

    it('registration_mail_test', () => {
      
      let dataMail = [];
      while (dataMail.length < textDataMail.length) {
        dataMail.push ("", randomEMail().slice(0, 14), randomEMail().slice(0, 8)+randomEMail().slice(10, 18), randomEMail().slice(0, 15)+"*&^");
      }; // создание массива с рандомной некорректной почты
      
      let i = 0;

      textDataMail.forEach((item) => {
        cy.registration(dataMail[i], item.userName, item.status);
        i++;
      })         
    })
})


