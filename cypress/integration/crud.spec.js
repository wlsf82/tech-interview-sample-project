describe('Notes', () => {
  beforeEach(() => {
    cy.login()
  })

  it('create , edit and delete a note', () => {
    cy.createNote()
    cy.validateCreatedNote()
 
    cy.editNote()
    cy.validateEditNote()   

    cy.deleteCreatedNote()
    cy.validateNoteNotExist()
  })
})