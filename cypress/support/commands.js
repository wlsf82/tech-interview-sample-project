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

Cypress.Commands.add('login', () => {
    
    cy.visit('')

    cy.contains('.navbar-nav a', 'Login').click()
    cy.get('#email').type(Cypress.env('user_mail'), {log: false})
    cy.get('#password').type(Cypress.env('password'), {log: false})
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('createNote', () => {
    cy.contains('Create a new note').click()

    cy.get('#content').type(noteText)
    cy.contains('Create').click()
})

Cypress.Commands.add('editNote', () => {
    cy.get('.list-group').contains(noteText).click()

    cy.get('#content').type(' updated')
    cy.contains('Save').click()
})


Cypress.Commands.add('deleteCreatedNote', () => {
    cy.get('.list-group').contains(`${noteText} updated`).click()
    cy.contains('Delete').click()
})