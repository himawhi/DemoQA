/// <reference types="cypress"/>

export class TabsPage {

    verifyWhatTab() {
      cy.get("#demo-tab-what").should('have.attr','aria-selected').then((value)=>{
          expect(value).equal('true')
      })
    }

    verifyOriginTab() {
        cy.get("#demo-tab-origin").click().should('have.attr','aria-selected').then((value)=>{
            expect(value).equal('true')
        })
      }
      verifyUseTab() {
        cy.get("#demo-tab-use").click().should('have.attr','aria-selected').then((value)=>{
            expect(value).equal('true')
        })
      }


}