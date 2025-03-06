/// <reference types="cypress"/>
import { ProgressBarPage } from "../../PageObjects/Widgets/ProgressPage"

describe('Test Progress Page', () => {


  before(() => {
    cy.visit("progress-bar")
  })


  it("Verify Progress Bar is working propely or not", () => {
    const progressBar = new ProgressBarPage()
    progressBar.verifyProgressBar()

  })


})
