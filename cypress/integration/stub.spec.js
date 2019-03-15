/// <reference types="Cypress" />

context('Fetch', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/', {
          onBeforeLoad (win) {
            delete win.fetch
          },
        })
    })

    it('Stub', () => {
      // Alias the route to wait for its response
      cy.server()
      cy.route('GET', '/api/breeds/image/random', { message: 'Intercepted', status: 'success' })
      cy.get('[data-test=button]').contains('CLICK')
      cy.get('[data-test=button]').click()
    })
  })
  