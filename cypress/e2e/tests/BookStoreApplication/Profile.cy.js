/// <reference types="cypress"/>

import { ProfilePage } from "../../PageObjects/BookStoreApplication/ProfilePage"
import { BookStorePage } from "../../PageObjects/BookStoreApplication/BookStorePage"

before(() => {
    cy.fixture('testData').as('data')
})


describe('Test Profile feature of Book Store Application', () => {
    const profilePage = new ProfilePage()

    before(() => {
        cy.visit("profile")
        
    })
    it("Verify login with valid credantial from Profile page", function () {
        const username = this.data.bookApplication.login.userName
        const password = this.data.bookApplication.login.password
        profilePage.loginFromProfilePage(username, password)
    })

    it("Verify delete all books is working properly or not", () => {
        profilePage.deleteAllBook()

    })

    // it("Verify delete account is working properly or not", () => {
    //     profilePage.deleteAccount()
    // })

})


