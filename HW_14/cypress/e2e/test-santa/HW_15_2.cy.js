describe('click links', () => {
  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: 'api/login?redirect=%2',
      body: {
        email: Cypress.env('username'),
        password: Cypress.env('password'),
             }
    })
    cy.visit('') // Переходим на главную страницу приложения
  })

  it('click links new box', () => {
    cy.contains('Создать коробку').click(),
    cy.location('pathname').should('eq', '/box/new'),
    cy.get('.form-card__header').first().should('have.text', 'Придумайте название коробке')
  })

   it('click links randomizer', () => {
    cy.contains('Быстрая жеребьевка').click(),
    cy.location('pathname').should('eq', '/randomizer'),
    cy.get('.form-card__header').first().should('have.text', 'Быстрая жеребьевка')
  })

  it('click links boxes', () => {
    cy.get('a[href*="/account/boxes"]').last().click(),
    cy.location('pathname').should('eq', '/account/boxes'),
    cy.get('.footer-item').first().should('have.text', 'Быстрая жеребьевка')
  })

  it('click links account', () => {
    cy.get('a[href*="/account"]').last().click(),
    cy.location('pathname').should('eq', '/account'),
    cy.get('[id="account_profile_settings"]').should('have.text', 'Настройки профиля')
  })
})


