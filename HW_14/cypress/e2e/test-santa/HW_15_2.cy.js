describe('example to-do app', () => {
  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: 'api/login?redirect=%2',
      body: {
        email: 'katarinami@inbox.ru',
        password: '{{$passwordNew}}',
             }
    })
      // Переходим на главную страницу приложения
    cy.visit('')
    
  })

  it('click links', () => {
    cy.contains('Создать коробку').click(),
    cy.location('pathname').should('eq', '/box/new'),
    cy.get('.form-card__header').first().should('have.text', 'Придумайте название коробке')
  })

   it('click links', () => {
    cy.contains('Быстрая жеребьевка').click(),
    cy.location('pathname').should('eq', '/randomizer'),
    cy.get('.form-card__header').first().should('have.text', 'Быстрая жеребьевка')
  })

  it('click links', () => {
    cy.get('a[href*="/account/boxes"]').last().click(),
    cy.location('pathname').should('eq', '/account/boxes'),
    cy.get('.footer-item').first().should('have.text', 'Быстрая жеребьевка')
  })

  it('click links', () => {
    cy.get('a[href*="/account"]').last().click(),
    cy.location('pathname').should('eq', '/account'),
    cy.get('[id="account_profile_settings"]').should('have.text', 'Настройки профиля')
  })
})


