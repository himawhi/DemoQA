/// <reference types="cypress"/>

export class SelectablePage{

    selectListItem(){
        cy.get('#verticalListContainer>li').eq(1).click().should('have.css','background-color','rgb(0, 123, 255)')
        cy.get('#verticalListContainer>li').eq(3).click().should('have.css','background-color','rgb(0, 123, 255)')
    }

    selectGridItem(){
        cy.get('#demo-tab-grid').click()
        cy.get('#row1>li').eq(0).click().should('have.css','background-color','rgb(0, 123, 255)')
        cy.get('#row2>li').eq(1).click().should('have.css','background-color','rgb(0, 123, 255)')
        cy.get('#row3>li').eq(2).click().should('have.css','background-color','rgb(0, 123, 255)')
    }
}