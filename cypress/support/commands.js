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
Cypress.Commands.add('login', () => {
  cy.visit('/');
  cy.get('.navbar-nav a:contains(Login)').click();
  cy.get('#email').type(Cypress.env('user'));
  cy.get('#password').type(Cypress.env('password'));
  cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('createsANote', data => {
  cy.contains('Create a new note', { timeout: 30000 }).should('be.visible').click();
  cy.get('#content').type(data.content);
  cy.contains('Create').click();
  cy.get('.list-group').should('contain', data.content);
})

Cypress.Commands.add('editsANote', data => {
  cy.get('.list-group').contains(data.content).click();
  cy.get('#content').clear().type(data.newContent);
  cy.contains('Save').click();
  cy.get('.list-group').should('contain', data.newContent);
  cy.get(`.list-group:contains(${data.newContent})`).should('be.visible');
})

Cypress.Commands.add('deletesANote', data => {
  cy.get('.list-group').contains(data.newContent).click()
  cy.contains('Delete').click()
  cy.get(`.list-group:contains(${data.newContent})`).should('not.exist')
})