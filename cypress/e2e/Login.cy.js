describe("Login test", () => {
   beforeEach(() => {
      cy.visit("localhost:3000", {timeout: 10000});
      cy.get("button").should("contain.text", "Войти").click();
      cy.location().should((loc) => {
         expect(loc.pathname).to.eq('/login')
      })
   })

   it("should Email input work", () => {
      cy.get("[id='LoginEmailInput']")
      .type('cththes@gmail.com')
      .should('have.value','cththes@gmail.com');
      }
   )
   it("should Password input work", () => {
      cy.get("[id='LoginPasswordInput']")
      .type('Test12345')
      }
   )
   it("should Submit button work", () => {
      cy.get("[id='LoginEmailInput']")
      .type('cththes@gmail.com')
      cy.get("[id='LoginPasswordInput']")
      .type('Test12345')
      cy.contains('Submit').click();
      cy.wait(2000)
      cy.url().should('eq', 'http://localhost:3000/');
   }
   )
   it("should main page work correct", () => {
      cy.get("[id='LoginEmailInput']")
      .type('cththes@gmail.com')
      cy.get("[id='LoginPasswordInput']")
      .type('Test12345')
      cy.contains('Submit').click();
      cy.contains("Выйти").should("exist");
      cy.contains("Главная страница").should("exist");
      cy.get('input[type="file"]').should("exist");
      }
   )
})


/*
it.only("should login button work", () => {
      cy.get("button").should("contain.text", "Войти").click();
      }
   )
   */