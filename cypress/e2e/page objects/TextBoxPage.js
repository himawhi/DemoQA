/**
 * To store all actions of Text Box Page
 * @class
 */
class TextBoxPage {
	/**
	 * Save and display user details.
	 * @method
	 */
	saveUser() {
		cy.get('.category-cards > :nth-child(1)').click();
		cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
		cy.get('#userName').type("Himasha Silva");
		cy.get('#userEmail').type("himasha@gmail.com");
		cy.get('#currentAddress').type("Colombo");
		cy.get('#permanentAddress').type("Sri Lanka");
		cy.get('#submit').click();

	}

	/**
	 * Checking the validity of email
	 * @method
	 */

	isValidEmail(email) {
		// Regular expression for a basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
}

export default new TextBoxPage();
