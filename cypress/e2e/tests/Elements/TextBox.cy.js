/// <reference types="cypress"/>

import { TextBoxPage } from "../../PageObjects/ElementPages/TextBoxPage";


before(() => {
    cy.fixture('testData').as('data')
})

describe('Test Text Box Feature', () => {
    before(() => {
        cy.visit("text-box")
    })

    it("Verify Placeholders are visiable or not", () => {
        cy.findElementByXpath("//input[@id='userName']").invoke('attr', 'placeholder').should('eq', 'Full Name')
        cy.findElementByXpath("//input[@id='userEmail']").invoke('attr', 'placeholder').should('eq', 'name@example.com')
        cy.get("#currentAddress").invoke('attr', 'placeholder').should('eq', 'Current Address')

    })

    it("Verify Text box is working properly or not using valid and invalid input", function () {
        const textBox = new TextBoxPage()
        const textBoxDataLength = this.data.textBoxData.length
        for (var i = 0; i < textBoxDataLength; i++) {
            textBox.enterFullName(this.data.textBoxData[i].fullname)
            textBox.enterEmail(this.data.textBoxData[i].email)
            textBox.enterCurrentAddress(this.data.textBoxData[i].currentAddress)
            textBox.enterPermanentAddress(this.data.textBoxData[i].permanentAddress)
            textBox.clickSubmitButton()

            cy.xpath("//p[@id='name']").should('contain', this.data.textBoxData[i].fullname)
            cy.xpath("//p[@id='email']").should('contain', this.data.textBoxData[i].email)
            cy.xpath("//p[@id='currentAddress']").should('contain', this.data.textBoxData[i].currentAddress)
            cy.xpath("//p[@id='permanentAddress']").should('contain', this.data.textBoxData[i].permanentAddress)
        }



    })
})