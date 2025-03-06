/// <reference types="cypress"/>

import { AlertPage } from "../../PageObjects/AlertFrameWindowsPages/AlertPage"




describe('Test alerts Feature', () => {
    before(() => {
        cy.visit("alerts")
    })

    it("Verify simple alert is working properly or not", () => {
        const alertPage = new AlertPage()
        alertPage.verifyAlertMessage("You clicked a button")
    })

    it("Verify simple alert after 5 second is working properly or not", () => {
        const alertPage = new AlertPage()
        alertPage.verifyAlertMessageAfterTimeDelay("This alert appeared after 5 seconds")
    })

    it("Verify Confirmation OK Alert message is working properly or not", () => {
        const alertPage = new AlertPage()
        alertPage.verifyConfirmOkAlertMessage("Do you confirm action?")
    })

    it("Verify Confirmation Cancel Alert message is working properly or not", () => {
        const alertPage = new AlertPage()
        alertPage.verifyConfirmCancelAlertMessage("Do you confirm action?")
    })

    it("Verify prompt Alert message is working properly or not", () => {
        const alertPage = new AlertPage()
        alertPage.verifyPromptAlertMessage("Auntor")
    })

})