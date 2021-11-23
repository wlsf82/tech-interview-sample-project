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

import locators from '../commons/locators';

Cypress.Commands.add('loginAs', (email = Cypress.env('email'), password = Cypress.env('password')) => {    
    cy.get(locators.LOGIN.LINK_LOGIN).click()
    cy.get(locators.LOGIN.EMAIL).type(email)
    cy.get(locators.LOGIN.PASSWORD).type(password, { log: false })
    cy.get(locators.LOGIN.BTN_LOGIN).click()
})

Cypress.Commands.add('createANote', () => {
    cy.contains(locators.NOTES.BTN_NEW_NOTE).click()
    cy.get(locators.NOTES.TEXT_AREA).type('My note')
    cy.contains(locators.NOTES.BTN_CREATE_NEW_NOTE).click()
})

Cypress.Commands.add('editANote', () => {
    cy.get(locators.NOTES.LIST_GROUP).contains('My note').click()
    cy.get(locators.NOTES.TEXT_AREA).type(' updated')
    cy.contains(locators.NOTES.BTN_SAVE_UPDATE_NOTE).click()
})

Cypress.Commands.add('deleteANote', () => {
    cy.get(locators.NOTES.LIST_GROUP).contains('My note updated').click()
    cy.contains(locators.NOTES.BTN_DELETE_NOTE).click()
})