/// <reference types="cypress"/>

import { BookStorePage} from "../../PageObjects/BookStoreApplication/BookStorePage"

before(() => {
    cy.fixture('testData').as('data')
})


describe('Test Book Store feature of Book Store Application', () => {
    const bookStorePage = new BookStorePage()

    before(() => {
        cy.visit("books")
    })

    it("Verify login with valid credantial from Book Store page", function () {
        const username = this.data.bookApplication.login.userName
        const password = this.data.bookApplication.login.password
        bookStorePage.loginFromBookStorePage(username, password)
    })

    it("Verify books can be add to collection or not", function () {
        const totalBooks = this.data.bookApplication.books.length
        for (var i = 0; i < totalBooks; i++) {
            bookStorePage.addToCollection(this.data.bookApplication.books[i])
        }
    })

})


