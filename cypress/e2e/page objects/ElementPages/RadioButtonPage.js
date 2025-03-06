/// <reference types="cypress"/>

export class RadioButtonPage{

    checkYesRadioBtn(){
        cy.get("#yesRadio").first().check({force: true})
    }
    checkImpressiveRadioBtn(){
        cy.get("#impressiveRadio").first().check({force: true})
    }

}