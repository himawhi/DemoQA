/// <reference types="cypress"/>

export class ButtonsPage{

    doubleClick(){
        cy.get("#doubleClickBtn").dblclick()
    }

    rightClick(){
        cy.get("#rightClickBtn").rightclick()
    }

    dynamicClick(){
    cy.get("//button[normalize-space()='Click Me']").click()
    
    }



}