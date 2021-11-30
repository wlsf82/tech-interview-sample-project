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

import { LOGIN, NOTES } from '../commons/locators';

Cypress.Commands.add('login', (email = Cypress.env('email'), password = Cypress.env('password')) => {    
    cy.get(LOGIN.LINK_LOGIN).click()
    cy.get(LOGIN.EMAIL).type(email)
    cy.get(LOGIN.PASSWORD).type(password, { log: false })
    cy.get(LOGIN.BTN_LOGIN).click()
})

Cypress.Commands.add('createNote', (text) => {
    cy.contains(NOTES.BTN_NEW_NOTE).click()
    cy.get(NOTES.TEXT_AREA).type(text.nameNote)
    cy.contains(NOTES.BTN_CREATE_NEW_NOTE).click()
})

Cypress.Commands.add('editNote', (text) => {
    cy.get(NOTES.LIST_GROUP).contains(text.nameNote).click()
    cy.get(NOTES.TEXT_AREA).clear().type(text.nameNoteUpdated)
    cy.contains(NOTES.BTN_SAVE_UPDATE_NOTE).click()
})

Cypress.Commands.add('deleteNote', (text) => {
    cy.get(NOTES.LIST_GROUP).contains(text.nameNoteUpdated).click()
    cy.contains(NOTES.BTN_DELETE_NOTE).click()
})

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

