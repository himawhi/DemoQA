/// <reference types="cypress"/>
import { LoginPage } from "../BookStoreApplication/LoginPage"
export class BookStorePage {


loginFromBookStorePage(userName,password){
    const loginPage = new LoginPage()

    cy.get('#login').click()
    loginPage.loginToTheApplication(userName,password)
    
}

    addToCollection(bookName) {
       cy.contains(bookName).click()
       cy.contains("Add To Your Collection").click()
       cy.on('window:alert', (str) => {
        expect(str).to.equal("Book added to your collection.")
    })
    cy.on('window:confirm', () => true);
    cy.visit("profile")
    cy.get(".rt-tbody").should('contain',bookName)
    cy.get("#gotoStore").click()
    }

}