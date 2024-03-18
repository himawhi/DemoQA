///<reference types="cypress" />

import TextBoxPage from "../page objects/TextBoxPage"

//Saving user details without using json

// describe("Check Text Box Element", () => {
// 	beforeEach(() => {
// 		cy.visit("https://demoqa.com/");
// 		TextBoxPage.saveUser();
// 	  })

// 	it("Should be able to Save and Display User Details", () => {
// 		// Assertions
// 		cy.get('#name').should("have.text","Name:Himasha Silva");
// 		cy.get('#email').should("have.text","Email:himasha@gmail.com");
// 		cy.get('.border > #currentAddress').contains("Colombo");
// 		cy.get('.border > #permanentAddress').should("have.text","Permananet Address :Sri Lanka");
// 		}
// 	)
// });

//saving user details using json

describe("Check Text Box Element", () => {
	it("Should be able to Save and Display User Details", () => {
		cy.visit("https://demoqa.com/");
		
		cy.fixture("userData.json").then((data) => {
			cy.get('.category-cards > :nth-child(1)').click();
			cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
			
			data.forEach((userinfo) => {
				cy.get('#userName').clear().type(userinfo.name);
				cy.get('#userEmail').clear().type(userinfo.email);
				cy.get('#currentAddress').clear().type(userinfo.current_address);
				cy.get('#permanentAddress').clear().type(userinfo.permanent_address);
				cy.get('#submit').click();

				//Assertions
				if(TextBoxPage.isValidEmail(userinfo.email)){
					cy.get('#name').should('contain', 'Name:' + userinfo.name);
					cy.get('#email').should("contain","Email:"+userinfo.email);
					cy.get('.border > #currentAddress').contains(userinfo.current_address);
					cy.get('.border > #permanentAddress').should('contain',"Permananet Address :"+userinfo.permanent_address);
				}else{
					cy.get('#name').should('not.contain',"name:"+userinfo.name);
				}
			})
		})
	})
});
