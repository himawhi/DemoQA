/// <reference types="cypress"/>

before(() => {
  cy.fixture('testData').as('data')
})

describe('Test Student Registration Form', () => {
  before(() => {
    cy.visit("automation-practice-form")
    cy.viewport(1280, 720)
  })

  it("Verify empty field validation for Name,Gender,Mobile number input field", () => {
    cy.get('#submit').click()
    cy.get('#firstName').should('have.css', 'border-color', 'rgb(220, 53, 69)')
    cy.get('#lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)')
    cy.get("label[for='gender-radio-1']").should('have.css', 'color', 'rgb(220, 53, 69)')
    cy.get("label[for='gender-radio-2']").should('have.css', 'color', 'rgb(220, 53, 69)')
    cy.get("label[for='gender-radio-3']").should('have.css', 'color', 'rgb(220, 53, 69)')
    cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)')

  })

  it("Verify invalid field validation for Email and Mobile number input field", function () {
    const totalEmail = this.data.formData.email.length
    for (var i = 0; i < totalEmail; i++) {
      cy.get('#userEmail').type(this.data.formData.email[i])
      cy.get('#userNumber').type(this.data.formData.mobileNumber[i])
      cy.get('#submit').click()
      cy.get('#userEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)')
      cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)')
    }


  })

  it("Verify using valid input Student Registration Form can be submit", ()=>{

    cy.get('#firstName').type("Auntor")
    cy.get('#lastName').type("Acharja")
    cy.get('#userEmail').clear().type("auntoracharja@gmail.com")
    cy.get("label[for='gender-radio-1']").click()
    cy.get('#userNumber').clear().type(123456789)
    cy.get('#subjectsInput').type('Dummy Subject')
    cy.get("#hobbies-checkbox-1").click({ force: true })
    cy.get('#uploadPicture').attachFile('demoPic.jpg');
    cy.get('#currentAddress').type('Uttora')
    cy.get('#submit').click()
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')
  })

})
