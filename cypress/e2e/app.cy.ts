describe("Navigation", () => {
  // should be able to navigate to the home page
  it("should navigate to the home page", () => {
    cy.visit("http://localhost:3000");
    cy.get("#email").click();
    cy.get("#email-value").should("contain", "test@gmail.com");
  });
});

export {};
