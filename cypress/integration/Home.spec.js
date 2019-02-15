/// <reference types="Cypress" />

context('Home', () => {

  const endpoint = 'http://localhost:3000';

  it('should load and show welcome message', () => {
    cy.visit(endpoint)
    cy.contains('Welcome')
    cy.contains('Select a page from the menu above')
  })
})
