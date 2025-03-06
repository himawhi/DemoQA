/// <reference types="cypress"/>
import { LoginPage } from "../BookStoreApplication/LoginPage"

export class ProfilePage {


    loginFromProfilePage(userName,password){
        const loginPage = new LoginPage()

        cy.get("a[href='/login']").click()
        loginPage.loginToTheApplication(userName,password)
       
    }

    deleteAllBook() {
        cy.contains("Delete All Books").click()

        cy.get(".modal-header").should("be.visible").and('contain', 'Delete All Books')
        cy.get(".modal-body").should("be.visible").and('contain', 'Do you want to delete all books?')
        cy.get("#closeSmallModal-ok").click()
        cy.on('window:alert', (str) => {
            if(str==="All Books deleted."){
                expect(str).to.equal("All Books deleted.")
            }else{
                expect(str).to.equal("No books available in your's collection!")
            }
           
        })
        cy.on('window:confirm', () => true);


    }

    deleteAccount() {
        cy.contains("Delete Account").click()
        cy.get(".modal-header").should("be.visible").and('contain', 'Delete Account')
        cy.get(".modal-body").should("be.visible").and('contain', 'Do you want to delete your account?')
        cy.get("#closeSmallModal-ok").click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal("User Deleted.")
        })
        cy.on('window:confirm', () => true);

        cy.url().should('contain','/login')
    }

}