// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const noteText = 'My note'

Cypress.Commands.add('createNote', () => {
    cy.contains('Create a new note').click()

    cy.get('#content').type(noteText)
    cy.contains('Create').click()

})

Cypress.Commands.add('validateCreatedNote', () => {
    cy.contains('Create a new note').click()

    cy.get('#content').type(noteText)
    cy.contains('Create').click()

})
Cypress.Commands.add('editNote', () => {
    cy.get('.list-group').contains(noteText).click()

    cy.get('#content').type(' updated')
    cy.contains('Save').click()

})

Cypress.Commands.add('validateEditNote', () => {
    cy.get('.list-group').should('contain', `${noteText} updated`)
    cy.get('.list-group').contains(`${noteText} updated`).should('be.visible')

})

Cypress.Commands.add('deleteCreatedNote', () => {
    cy.get('.list-group').contains(`${noteText} updated`).click()
    cy.contains('Delete').click()

})

Cypress.Commands.add('validateNoteNotExist', () => {
    cy.get('.list-group').contains(`${noteText} updated`).should('not.exist')

})