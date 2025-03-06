/// <reference types="cypress"/>

import { ModalDialogPage } from "../../PageObjects/AlertFrameWindowsPages/ModalDialogPage"



describe('Test Modal Dialogs Feature', ()=>{
    before(() => {
        cy.visit("modal-dialogs")
    })
    

    it("Verify small Modal Dialog is working properly or not", () => {
        const modalDialog =  new ModalDialogPage()
        modalDialog.verifySmallModalDialog("button")
        modalDialog.verifySmallModalDialog("crossBtn")
    })

    it("Verify Large Modal Dialog is working properly or not", () => {
        const modalDialog =  new ModalDialogPage()
        modalDialog.verifyLargeModalDialog("button")
        modalDialog.verifyLargeModalDialog("crossBtn")
    })

})