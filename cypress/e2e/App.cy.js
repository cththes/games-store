describe("Form test", () => {
   it("should redirect to /signup", () => {
      cy.visit("localhost:3000");
      cy.get("button").should("contain.text", "Войти");
      cy.get("div").should("contain.text", "Username");
      cy.get("div").should("contain.text", "Email");
      cy.get("div").should("contain.text", "Password");
      }
   )
})