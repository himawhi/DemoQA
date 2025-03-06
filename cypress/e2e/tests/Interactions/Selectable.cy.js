/// <reference types="cypress"/>
import { SelectablePage } from "../../PageObjects/Interactions/SelectablePage"


  describe('Test Selectable ', () => {
    before(() => {
      cy.visit("selectable")
    })
    
    const selectablePage = new SelectablePage()
  
    it("Verify list select is working properly or not", () => {
        selectablePage.selectListItem()
  
    })
    it("Verify Grid select is working properly or not", () => {
      selectablePage.selectGridItem()

  })
  
  })
  