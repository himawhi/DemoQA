/// <reference types="cypress"/>

import { ButtonsPage } from "../../PageObjects/ElementPages/ButtonsPage"



describe('Test Button Feature', () => {

    before(() => {
        cy.visit("buttons")
    
    })
    
    it("Verify buttons are working properly or not", () => {
        const buttons = new ButtonsPage()
        buttons.doubleClick()
        cy.get("#doubleClickMessage").should('contain', 'You have done a double click')
        buttons.rightClick()
        cy.get("#rightClickMessage").should('contain', 'You have done a right click')
        buttons.dynamicClick()
        cy.get("#dynamicClickMessage").should('contain', 'You have done a dynamic click')
    })

})