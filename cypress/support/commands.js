/// <reference types="Cypress"/>
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
Cypress.Commands.add('login', (user = {
  email: Cypress.env('email'),
  password: Cypress.env('password')
}) => {
  cy.visit('/login');
  cy.get('#email').should('be.visible').type(user.email)
  cy.get('#password').should('be.visible').type(user.password)
  cy.get('button[type="submit"]').should('be.visible').click()
  cy.location('href').should('equal', 'https://notes-serverless-app.com/')
})

Cypress.Commands.add('createsANote', data => {
  cy.contains('Create a new note').should('be.visible').click()
  cy.get('#content').should('be.visible').type(data.content)
  cy.contains('Create').should('be.visible').click()
  cy.get('.list-group').should('contain', data.content)
})

Cypress.Commands.add('editsANote', data => {
  cy.get('.list-group').contains(data.content).should('be.visible').click()
  cy.get('#content').clear().type(data.newContent)
  cy.contains('Save').click()
  cy.get('.list-group').should('contain', data.newContent)
  cy.get(`.list-group:contains(${data.newContent})`).should('be.visible')
})

Cypress.Commands.add('deletesANote', data => {
  cy.get('.list-group').contains(data.newContent).click()
  cy.contains('Delete').click()
  cy.get(`.list-group:contains(${data.newContent})`).should('not.exist')
})
