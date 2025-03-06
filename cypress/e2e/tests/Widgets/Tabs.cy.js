/// <reference types="cypress"/>
import { TabsPage } from "../../PageObjects/Widgets/TabsPage"



describe('Test Tab Page', () => {
  before(() => {
    cy.visit("tabs")
  })

  it("Verify Tabs is working propely or not", () => {
    const tabPage = new TabsPage()
    tabPage.verifyWhatTab()
    tabPage.verifyOriginTab()
    tabPage.verifyUseTab()

  })


})
