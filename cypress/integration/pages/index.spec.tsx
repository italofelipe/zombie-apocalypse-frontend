import { cy, it } from "local-cypress";

describe("Index page navigation", () => {
  it("Should visit the page and verify the existence of a h1 element", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("Zombie");
  });
});
