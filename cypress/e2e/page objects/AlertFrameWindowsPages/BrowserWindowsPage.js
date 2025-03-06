/// <reference types="cypress"/>

export class BrowserWindowsPage{

    verifyNewTab(){
      // cy.get('#tabButton').invoke('removeAttr', 'target').click()
      // cy.url()
      //     .should('include', '/sample')
      // cy.get('#sampleHeading')
      //     .should('have.text', 'This is a sample page')


          cy.window().then((win) => {
            cy.stub(win, 'open', url => {
              win.location.href = 'https://demoqa.com/sample';
            }).as("popup")
          })
          cy.get('#tabButton').click()
          cy.get('@popup')
            .should("be.called")
          cy.get('#sampleHeading')
            .should('have.text', 'This is a sample page')

    }

    verifyNewWinddow(){
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
              win.location.href = 'https://demoqa.com/sample';
            }).as("popup")
          })
          cy.get('#windowButton').click()
          cy.get('@popup')
            .should("be.called")
          cy.get('#sampleHeading')
            .should('have.text', 'This is a sample page')

            
    }

}