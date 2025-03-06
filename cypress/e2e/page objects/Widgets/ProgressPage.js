/// <reference types="cypress"/>

export class ProgressBarPage {

    verifyProgressBar() {
        cy.get('#startStopButton').should('have.text', 'Start').click()
        cy.wait(3000)
        cy.get('#startStopButton').should('have.text', 'Stop').click()
        cy.get("div[role='progressbar']").should('have.attr', 'aria-valuenow').then((value) => {
            expect(parseInt(value)).greaterThan(10)
        })
    }


}