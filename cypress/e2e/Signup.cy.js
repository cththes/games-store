describe("Signup test", () => {
   it("should visit localhost", () => {
      cy.visit("localhost:3000", {timeout: 10000});
      }
   )
   it("should redirect work", () => {
      cy.url().should('eq', 'http://localhost:3000/signup');
      cy.get("button").should("contain.text", "Войти");
      cy.get("div").should("contain.text", "Username");
      cy.get("div").should("contain.text", "Email");
      cy.get("div").should("contain.text", "Password");
      }
   )
   it("should Username input work", () => {
      cy.get("[id='SignupUsernameInput']")
      .type('fdfjsdfldsfhl')
      .should('have.value','fdfjsdfldsfhl');
      }
   )
   it("should Email input work", () => {
      cy.get("[id='SignupEmailInput']")
      .type('fdfjsdfldsfhl@mail.ru')
      .should('have.value','fdfjsdfldsfhl@mail.ru');
      }
   )
   it("should Password input work", () => {
      cy.get("[id='SignupPasswordInput']")
      .type('Test12345')
      }
   )
   it("creating exist user causes an error", () => {
      cy.contains('Submit').click();
      cy.get('#errorMessage').should('exist').should('have.text','Email or Username are already taken')
      }
   )
})