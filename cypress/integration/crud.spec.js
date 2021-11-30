import { NOTES } from "../commons/locators";

describe('Notes', () => {
  beforeEach(() => {
    cy.visit('/')    
    cy.login()
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/login`)
  })

  it('should validate crud flow successfully', () => { 
    const text = {
      nameNote: 'My note',
      nameNoteUpdated: 'My note updated'
    } 

    cy.createNote(text);
    cy.get(NOTES.LIST_GROUP).should('contain', text.nameNote);

    cy.editNote(text);
    cy.get(NOTES.LIST_GROUP).should('contain', text.nameNoteUpdated);
    cy.get(NOTES.LIST_GROUP_UPDATED).should('be.visible');

    cy.deleteNote(text);
    cy.get(NOTES.LIST_GROUP_UPDATED).should('not.exist');
  })
})
