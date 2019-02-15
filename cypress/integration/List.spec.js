/// <reference types="Cypress" />

context('List', () => {

  const endpoint = 'http://localhost:3000/list';

  it('should load and show list page', () => {
    cy.visit(endpoint)
    cy.contains('List')
  })

  it('should load page 1', () => {
    cy.visit(endpoint)
    cy.contains('Page 1')
  })

  it('should not display prevPageBtn on first page', () => {
    cy.visit(endpoint)
    cy.get('button#prevPage').should('not.exist');
  })

  it('should load page next page and then display Page 2', () => {
    cy.visit(endpoint)
    cy.get('button#nextPage').click()
    cy.wait(2000)
    cy.contains('Page 2')
  })

  it('should not show prevPageBtn after go back to page 1 from page 2', () => {
    cy.visit(endpoint)
    cy.get('button#nextPage').click()
    cy.wait(2000)
    cy.contains('Page 2')
    cy.get('button#prevPage').click()
    cy.wait(1000)
    cy.get('button#prevPage').should('not.exist');
  })
})
