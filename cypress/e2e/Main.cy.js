describe("Main page test", () => {
   it.skip("should visit localhost and login", () => {
      cy.visit("localhost:3000", {timeout: 10000});
      cy.get("button").should("contain.text", "Войти").click();
      cy.get("[id='LoginEmailInput']")
      .type('fdfjsdfldsfhl')
      cy.get("[id='LoginPasswordInput']")
      .type('Test12345')
      cy.contains('Submit').click();
      }
   )
   it.skip("should be 2 pictures",() => {
      cy.get("img").should("exist")
   })
   it.skip("should be 2 pictures after reload",() => {
      cy.reload()
      cy.get("img").should("exist")
   })

   it.skip("should upload button work correct",() => {
      cy.get("button").click()
   })
})