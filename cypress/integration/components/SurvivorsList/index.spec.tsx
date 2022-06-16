import { cy, it } from "local-cypress";

describe("Tests the SurvivorList component", () => {
  it("Should visit the page and verify the existence of a h1 element", () => {
    cy.visit("http://localhost:3000/");
    cy.get("label").contains("Procurar por nome");
  });

  it("Should verify that the button is initially set as disabled", () => {
    cy.get("button").should("be.disabled");
  });

  it("Should enable the button once the user types something", () => {
    cy.get("input[data-testid='search-survivor-input']").type("bear");
    cy.get("button").should("be.enabled").click();

  });

  it("Should filter based on previous test input", () => {
    cy.get("button").click();
    cy.get("div[title='bear']").should("exist")
  })
});
