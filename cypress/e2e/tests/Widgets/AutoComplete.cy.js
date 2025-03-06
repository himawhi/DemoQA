/// <reference types="cypress"/>
import { AutoCompletePage } from "../../PageObjects/Widgets/AutoCompletePage"


  
  describe('Test Auto Complete', () => {
    before(() => {
      cy.visit("auto-complete")
    })
  
    it("Verify Multiple input Auto Complete", () => {
        const autoComplete = new AutoCompletePage()
        autoComplete.verifyMultipleInput()
  
    })
  
    it("Verify Single input Auto Complete",  ()=> {
        const autoComplete = new AutoCompletePage()
        autoComplete.verifySingleInput()
  
    })
  
  })
  