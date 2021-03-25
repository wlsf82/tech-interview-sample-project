/// <reference types="Cypress" />

describe('Notes', () => {
  beforeEach(() => cy.login(Cypress.env('user'), Cypress.env('password')))
  
  it('Creates, edits and deletes a note', () => {    
    const data = {
      content: 'My note',
      newContent: 'My note updated'
    }
    
    cy.createsANote(data);
    cy.editsANote(data);
    cy.deletesANote(data);
  })
})  
