describe("Login test", () => {
   it("should visit localhost", () => {
      cy.visit("localhost:3000", {timeout: 10000});
      }
   )
   it("should login button work", () => {
      cy.get("button").should("contain.text", "Войти").click();

      }
   )
   it("should Email input work", () => {
      cy.get("[id='LoginEmailInput']")
      .type('fdfjsdfldsfhl')
      .should('have.value','fdfjsdfldsfhl');
      }
   )
   it("should Password input work", () => {
      cy.get("[id='LoginPasswordInput']")
      .type('Test12345')
      }
   )
   it("should Submit button work", () => {
      cy.contains('Submit').click();
      cy.url().should('eq', 'http://localhost:3000/');
   }
   )
   it("should main page work correct", () => {
      cy.contains("Выйти").should("exist");
      cy.contains("Главная страница").should("exist");
      cy.get('input[type="file"]').should("exist");
      }
   )
})