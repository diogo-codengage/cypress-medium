/// <reference types="Cypress" />

context('Fetch', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })

    it('Find dog', () => {
        cy.get('[data-test=button]').contains('CLICK')
        cy.get('[data-test=button]').click()
        cy.get('[data-test=img]').should('be.visible')
        cy.get('[data-test=button]').click()
        cy.get('[data-test=img]').should('be.visible')
    })
  })
  