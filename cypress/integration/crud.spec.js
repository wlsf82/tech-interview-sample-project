describe('Notes', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Create , edit and delete a note', () => {
    const text = {
      annotation: 'My note',
      newAnnotation: 'My note updated'
    }
    cy.createNote()
    cy.get('.list-group').should('contain', text.annotation)
 
    cy.editNote()
    cy.get('.list-group').should('contain', text.newAnnotation)
    cy.get('.list-group').contains(text.newAnnotation).should('be.visible')   

    cy.deleteCreatedNote()
    cy.get('.list-group').contains(text.newAnnotation).should('not.exist')
  })
})
