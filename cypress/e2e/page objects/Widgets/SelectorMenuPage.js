/// <reference types="cypress"/>

export class SelectorMenuPage {

    selectValue(option) {
      cy.get("#withOptGroup").click()
      cy.contains(option).click()
      cy.get("#withOptGroup").should('contain',option)   
    }

    selectOne(option) {
        cy.get("#selectOne").click()
        cy.contains(option).click()
        cy.get("#selectOne").should('contain',option)   
      }

      selectOldStyleSelectMenu(option) {
        cy.get("#oldSelectMenu").select(option)
        cy.get("#oldSelectMenu").should('contain',option)   
      }

      selectStandardMultiSelect(option){
        cy.get("#cars").select(option)
      }
     

}