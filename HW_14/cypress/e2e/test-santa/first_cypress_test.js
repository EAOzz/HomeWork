describe('example to-do app', () => {
  before(() => {
    cy.visit('https://staging.lpitko.ru/')
  })

  it('page loading', () => {
      cy.get('.header-item__text span').first().should('have.text', 'Вход и регистрация')
  })

})
