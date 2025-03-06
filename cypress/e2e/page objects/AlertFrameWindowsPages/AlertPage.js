/// <reference types="cypress"/>

export class AlertPage {

    verifyAlertMessage(alertMessage) {
        cy.get('#alertButton').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(alertMessage)
        })
        cy.on('window:confirm', () => true);
    }

    verifyAlertMessageAfterTimeDelay(alertMessage) {
        cy.get('#timerAlertButton').click()
        cy.wait(5000)
        cy.on('window:alert', (str) => {
            expect(str).to.equal(alertMessage)
        })
        cy.on('window:confirm', () => true);
    }


    verifyConfirmOkAlertMessage(alertMessage) {
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal(alertMessage)
        })
        cy.on('window:confirm', () => true);
        cy.get('#confirmResult').contains('You selected Ok')
    }

    verifyConfirmCancelAlertMessage(alertMessage) {
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal(alertMessage)
        })
        cy.on('window:confirm', () => false);
        cy.get('#confirmResult').contains('You selected Cancel')
    }
    verifyPromptAlertMessage(message) {
        const winPromptStub = () => {
            return message
        }
        cy.window().then(win => {
            cy.stub(win, 'prompt', winPromptStub).as('winPromptStubReturnNonNull')
        })
        cy.get('#promtButton').click()
        cy.get('@winPromptStubReturnNonNull').should('be.calledOnce')
          .and('be.calledWith', 'Please enter your name')
          cy.get('#promptResult').contains(message)
    }

}