/// <reference types="cypress"/>

export class LoginPage {

    loginToTheApplication(userName, password) {
        cy.get("#userName").clear().type(userName)
        cy.get("#password").clear().type(password)
        cy.get("#login").click()
    }

    verifyValidLogin(userName) {
        cy.url().should('contain', '/profile')
        cy.get("#userName-value").should('have.text', userName)
        cy.visit('/login')
        cy.get('#loading-label').should('contain', 'You are already logged in. View your profile.')
        cy.get('#loading-label>a').click()
        cy.url().should('contain', '/profile')
        cy.get("#submit").click()
        cy.url().should('contain', '/login')
    }

    verifyAlertMessageForInvalidCredantial() {
        cy.get("#name").should('have.text', "Invalid username or password!")
    }

    verifyEmptyFieldValidation(userName, password) {
        if (userName === "" && password !== "") {
            cy.get("#userName").clear().focus()
                .blur()
            cy.get("#password").clear().type(password)
            cy.get("#login").click()
            cy.get("#userName").should('have.css', 'border-color', 'rgb(220, 53, 69)')
        } else if (password === "" && userName !== "") {
            cy.get("#userName").clear().type(userName)
            cy.get("#password").clear().clear().focus()
                .blur()
            cy.get("#login").click()
            cy.get("#password").should('have.css', 'border-color', 'rgb(220, 53, 69)')
        } else {
            cy.get("#userName").clear().focus()
                .blur()
            cy.get("#password").clear().focus()
                .blur()
            cy.get("#login").click()
            cy.get("#userName").should('have.css', 'border-color', 'rgb(220, 53, 69)')
            cy.get("#password").should('have.css', 'border-color', 'rgb(220, 53, 69)')
        }
    }


}