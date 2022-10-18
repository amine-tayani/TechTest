describe("search with autocomplete", () => {
  it("should show autocomplete results", () => {
    cy.visit("http://localhost:3000");
    cy.get("data-cy=search-input").type("a");
    cy.get("data-cy=autocomplete-results").should("contain", "");
  });
});
