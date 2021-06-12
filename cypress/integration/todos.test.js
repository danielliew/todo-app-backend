/// <reference types="cypress" />

describe("GET /todos", () => {
  it("returns array", () => {
    cy.request("/todos").its("body").should("be.an", "array");
  });
});

describe("GET /todos/:id", () => {
  it("returns array", () => {
    cy.request("/todos/1").its("body").should("be.an", "array");
  });

  it("load up to 1 one item", () => {
    cy.request("/todos/1").its("body").should("have.length.at.most", 1);
  });
});

describe("POST /todos", () => {
  it("returns boolean", () => {
    cy.request("POST", "/todos", {
      id: "2",
      title: "Cypress test",
      body: "Cypress test",
    })
      .its("body.success")
      .should("be.a", "boolean");
  });
});

describe("PUT /todos", () => {
  it("returns boolean", () => {
    cy.request("PUT", "/todos/2", {
      id: "2",
      title: "Cypress test",
      body: "Cypress test",
    })
      .its("body.success")
      .should("be.a", "boolean");
  });
});

describe("DELETE /todos", () => {
  it("returns boolean", () => {
    cy.request("DELETE", "/todos/2")
      .its("body.success")
      .should("be.a", "boolean");
  });
});
