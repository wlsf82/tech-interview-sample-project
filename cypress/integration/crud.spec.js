import locators from "../commons/locators";

describe('Notes', () => {
  beforeEach(() => {
    cy.visit('/')    
    cy.loginAs()
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/login`)
  })

  it('should validate crud flow successfully', () => {    
    cy.createANote();
    cy.get(locators.NOTES.LIST_GROUP).should('contain', 'My note');

    cy.editANote();
    cy.get(locators.NOTES.LIST_GROUP).should('contain', 'My note updated');
    cy.get(locators.NOTES.LIST_GROUP_UPDATED).should('be.visible');

    cy.deleteANote();
    cy.get(locators.NOTES.LIST_GROUP_UPDATED).should('not.exist');
  })
})
