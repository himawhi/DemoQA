/// <reference types="cypress"/>

export class ModalDialogPage {

    verifySmallModalDialog(dialogCloseMethod) {
        cy.get('#showSmallModal').click()
        cy.get('.modal-content').should('be.visible').and('contain', 'This is a small modal. It has very less content')
        if (dialogCloseMethod === "button") {
            cy.get('#closeSmallModal').click()
        } else if (dialogCloseMethod === "crossBtn") {
            cy.get('button.close').click()
        }

        cy.get('.modal-content').should('not.exist')
    }

    verifyLargeModalDialog(dialogCloseMethod) {
        cy.get('#showLargeModal').click()
        cy.get('.modal-content').should('be.visible').and('contain', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry')
        if (dialogCloseMethod === "button") {
            cy.get('#closeLargeModal').click()
        } else if (dialogCloseMethod === "crossBtn") {
            cy.get('button.close').click()
        }

        cy.get('.modal-content').should('not.exist')
    }


}