/// <reference types="cypress"/>

import { LoginPage } from "../../PageObjects/BookStoreApplication/LoginPage"

before(() => {
   
    cy.fixture('testData').as('data')
})


describe('Test Login feature of Book Store Application', () => {
    const loginPage = new LoginPage()
    before(() => {
        cy.visit("login")
    })

    it("Verify login with valid credantial is working properly or not", function () {
        const username = this.data.bookApplication.login.userName
        const password = this.data.bookApplication.login.password
        loginPage.loginToTheApplication(username, password)
        loginPage.verifyValidLogin(username)
    })

    it("Verify Error Message is showing or not when provide invalid Username and Password", function () {

        const totalInput = this.data.bookApplication.invalidCredantial.length
        for (var i = 0; i < totalInput; i++) {
            loginPage.loginToTheApplication(this.data.bookApplication.invalidCredantial[i].userName, this.data.bookApplication.invalidCredantial[i].password)
            loginPage.verifyAlertMessageForInvalidCredantial()
        }

    })

    it("Verify Empty field validation is showing or not", function () {

        const totalInput = this.data.bookApplication.emptyField.length
        for (var i = 0; i < totalInput; i++) {
            loginPage.verifyEmptyFieldValidation(this.data.bookApplication.emptyField[i].userName, this.data.bookApplication.emptyField[i].password)
        }

    })

})


