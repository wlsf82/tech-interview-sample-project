/// <reference types="Cypress" />

describe('Notes', () => {
  before(() => {
    cy.login()
    cy.url().should('eq', 'https://notes-serverless-app.com/')
  })

  it("Creates, edits and deletes a note", () => {
    const data = {
      content: 'My note',
      newContent: 'My note updated'
    }

    cy.createsANote(data)
    cy.get('.list-group').should('contain', data.content)

    cy.editsANote(data)
    cy.get('.list-group').should('contain', data.newContent)
    cy.get(`.list-group:contains(${data.newContent})`).should('be.visible')

    cy.deletesANote(data)
    cy.get(`.list-group:contains(${data.newContent})`).should('not.exist')
  })
})
