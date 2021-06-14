/// <reference types="cypress" />

describe("GET /todos/todo", () => {
  it("returns array", () => {
    cy.request("/todos/todo").its("body").should("be.an", "array");
  });
  it("contains only incomplete todos", () => {
    cy.request("/todos/todo")
      .its("body")
      .each((item) => expect(item.complete).to.equal(false));
  });
});

describe("GET /todos/completed", () => {
  it("returns array", () => {
    cy.request("/todos/completed").its("body").should("be.an", "array");
  });
  it("contains only complete todos", () => {
    cy.request("/todos/completed")
      .its("body")
      .each((item) => expect(item.complete).to.equal(true));
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
