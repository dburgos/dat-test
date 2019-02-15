/// <reference types="Cypress" />

context('Contact', () => {

  const endpoint = 'http://localhost:3000/contact';

  it('should load and show contact page', () => {
    cy.visit(endpoint)
    cy.contains('Contact')
  })

  it('should validate empty form fields', () => {
    cy.visit(endpoint)
    cy.get('input[type="submit"]').click()
    cy.wait(500)
    cy.contains('Sent successfully').should('not');
  })

  it('should submit successfully', () => {
    cy.visit(endpoint)
    cy.get('input[name="name"]').type('david')
    cy.get('textarea[name="message"]').type('just testing via cypress')
    cy.get('input[type="submit"]').click()
    cy.wait(500)
    cy.contains('Sent successfully');
  })
})
