/// <reference types="cypress"/>

export class AutoCompletePage {

    verifyMultipleInput() {
        cy.get("//div[@class='auto-complete__value-container auto-complete__value-container--is-multi css-1hwfws3']").type("re{enter}")

        cy.get(".auto-complete__multi-value__label").should('contain',"Red")
    }

    verifySingleInput() {
        cy.get("//div[@class='auto-complete__value-container css-1hwfws3']").type("re{enter}")
        cy.get(".auto-complete__single-value").should('contain',"Red")
    }

}