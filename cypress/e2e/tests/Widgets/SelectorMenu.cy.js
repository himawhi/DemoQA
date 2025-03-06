/// <reference types="cypress"/>
import { SelectorMenuPage } from "../../PageObjects/Widgets/SelectorMenuPage"

before(() => {
    cy.fixture('testData').as('data')
})

describe('Test Selector Menu Page', () => {
    before(() => {
        cy.visit("select-menu")
    })
    const selectorMenuPage = new SelectorMenuPage()

    it("Verify Select value is working propely or not", function(){
        selectorMenuPage.selectValue(this.data.menuData.selectValue)

    })

    it("Verify Select One is working propely or not", function() {
        selectorMenuPage.selectOne(this.data.menuData.selectOne)

    })
    it("Verify Old Style Select Menu is working propely or not", function() {

        selectorMenuPage.selectOldStyleSelectMenu(this.data.menuData.OldStyleSelectMenu)

    })
    it("Verify Standard Multi Select is working propely or not", function() {

        selectorMenuPage.selectStandardMultiSelect(this.data.menuData.StandardMultiSelect)

    })


})
