/// <reference types="cypress" />

describe("Testing login", () => {
  it.only("Should visit website benih baik", () => {
    cy.visit("https://m.benihbaik.com/");
  });
  it("Should test login form with valid account - Positive test", () => {
    cy.get(":nth-child(5) > a > .icon-footer").click();
    cy.get(".title-nav").should("have.attr", "class", "title-nav ml-3"); // assertion
    cy.get(".block0").click();
    cy.get("b").should("have.text", "Login"); // assertion
    cy.get(".m-b-18 > .input100").type("terayterye@gmail.com");
    cy.get(".m-b-18 > .input100").should("have.attr", "name", "username"); // assertion
    cy.get(".m-b-12 > .input100").type("Bismillah123");
    cy.get(".m-b-12 > .input100").should("have.attr", "name", "password");
    cy.get(".login100-form-btn").click();
    cy.get(".banner-event > .font_benihbaik_judul > b").should("have.text", "CSR Marketplace"); // assertion
  });
  it("Should test login form with unregistered email - Negative test", () => {
    cy.get(":nth-child(5) > a > .icon-footer").click();
    cy.get(".title-nav").should("have.attr", "class", "title-nav ml-3"); // assertion
    cy.get(".block0").click();
    cy.get("b").should("have.text", "Login"); // assertion
    cy.get(".m-b-18 > .input100").type("test123");
    cy.get(".m-b-18 > .input100").should("have.attr", "name", "username"); // assertion
    cy.get(".m-b-12 > .input100").type("Bismillah1231");
    cy.get(".m-b-12 > .input100").should("have.attr", "name", "password");
    cy.get(".login100-form-btn").click();
  });
  it("Should test login form with unvalid email format - Negative test", () => {
    cy.get(":nth-child(5) > a > .icon-footer").click();
    cy.get(".title-nav").should("have.attr", "class", "title-nav ml-3"); // assertion
    cy.get(".block0").click();
    cy.get("b").should("have.text", "Login"); // assertion
    cy.get(".m-b-18 > .input100").type("test123");
    cy.get(".m-b-18 > .input100").should("have.attr", "name", "username"); // assertion
    cy.get(".m-b-12 > .input100").type("Bismillah1231");
    cy.get(".m-b-12 > .input100").should("have.attr", "name", "password");
    cy.get(".login100-form-btn").click();
  });
  it("Should test login form with no fill condition - Negative test", () => {
    cy.get(":nth-child(5) > a > .icon-footer").click();
    cy.get(".title-nav").should("have.attr", "class", "title-nav ml-3"); // assertion
    cy.get(".block0").click();
    cy.get("b").should("have.text", "Login"); // assertion
    cy.get(".m-b-18 > .input100").type(" ");
    cy.get(".m-b-18 > .input100").should("have.attr", "name", "username"); // assertion
    cy.get(".m-b-12 > .input100").type(" ");
    cy.get(".m-b-12 > .input100").should("have.attr", "name", "password");
    cy.get(".login100-form-btn").click();
  });
  it.only("Should test link forgot password", () => {
    cy.get(":nth-child(5) > a > .icon-footer").click();
    cy.get(".title-nav").should("have.attr", "class", "title-nav ml-3"); // assertion
    cy.get(".block0").click();
    cy.get("b").should("have.text", "Login"); // assertion
    cy.get(":nth-child(2) > .subtitle-green").click();
    cy.get(".subtitle4").should("have.text", "\n                         Pulihkan Password\n                    ");
  });
});
