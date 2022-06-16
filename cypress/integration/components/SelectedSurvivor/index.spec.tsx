import { cy, it } from "local-cypress";

describe("Tests the SelectedSuvivor component", () => {
  it("Enter the page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Should enable the button once the user types something", () => {
    cy.get("input[data-testid='search-survivor-input']").type("bear");
    cy.get("button").should("be.enabled").click();
  });

  it("Should click on the first element", () => {
    cy.get("button[data-testid='search-button']").click();
    cy.get("p").first().click();
  });
});
