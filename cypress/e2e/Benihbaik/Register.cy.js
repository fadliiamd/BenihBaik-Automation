/// <reference types="cypress" />

describe("Testing register", () => {
  it.only("Should visit website benih baik", () => {
    cy.visit("https://m.benihbaik.com/");
  });
  it("Should access register form - Positive test", () => {
    cy.get(":nth-child(5) > a > .icon-footer").click();
    cy.get(".title-nav").should("have.attr", "class", "title-nav ml-3"); // assertion
    cy.get(".block1").click();
    cy.get("b").should("have.text", "Daftar"); // assertion
    cy.get(".m-b-16 > .input100").type("Fadli Amada");
    cy.get(".m-b-16 > .input100").should("have.attr", "name", "fullname"); // assertion
    cy.get(".m-b-12 > .input100").type("asdfdghjk@gmail.com");
    cy.get(".m-b-12 > .input100").should("have.attr", "name", "username"); // assertion
    cy.get(".mt-2 > input").click();
    cy.get(".login100-form-btn").click();
    cy.get("label").should("have.text", "Selamat bergabung di lingkaran kebaikan.");
  });
  it("Should test register form with no fill condition - Negative test", () => {
    cy.get(":nth-child(5) > a > .icon-footer").click();
    cy.get(".title-nav").should("have.attr", "class", "title-nav ml-3"); // assertion
    cy.get(".block1").click();
    cy.get("b").should("have.text", "Daftar"); // assertion
    cy.get(".m-b-16 > .input100").type(" ");
    cy.get(".m-b-16 > .input100").should("have.attr", "name", "fullname"); // assertion
    cy.get(".m-b-12 > .input100").type(" ");
    cy.get(".m-b-12 > .input100").should("have.attr", "name", "username"); // assertion
    // cy.get(".mt-2 > input").click();
    cy.get(".login100-form-btn").click();
  });
  it.only("Should test register form with invalid fullname field (text) - Negative test", () => {
    cy.get(":nth-child(5) > a > .icon-footer").click();
    cy.get(".title-nav").should("have.attr", "class", "title-nav ml-3"); // assertion
    cy.get(".block1").click();
    cy.get("b").should("have.text", "Daftar"); // assertion
    cy.get(".m-b-16 > .input100").type("test123");
    cy.get(".m-b-16 > .input100").should("have.attr", "name", "fullname"); // assertion
    cy.get(".m-b-12 > .input100").type("test123@gmail.com");
    cy.get(".m-b-12 > .input100").should("have.attr", "name", "username"); // assertion
    cy.get(".mt-2 > input").click();
    cy.get(".login100-form-btn").click();
  });
  it("Should test register form with invalid email field - Negative test", () => {
    cy.get(":nth-child(5) > a > .icon-footer").click();
    cy.get(".title-nav").should("have.attr", "class", "title-nav ml-3"); // assertion
    cy.get(".block1").click();
    cy.get("b").should("have.text", "Daftar"); // assertion
    cy.get(".m-b-16 > .input100").type("test123");
    cy.get(".m-b-16 > .input100").should("have.attr", "name", "fullname"); // assertion
    cy.get(".m-b-12 > .input100").type("test123");
    cy.get(".m-b-12 > .input100").should("have.attr", "name", "username"); // assertion
    cy.get(".mt-2 > input").click();
    cy.get(".login100-form-btn").click();
  });
  it("Should test check button with no click - Negative test", () => {
    cy.get(":nth-child(5) > a > .icon-footer").click();
    cy.get(".title-nav").should("have.attr", "class", "title-nav ml-3"); // assertion
    cy.get(".block1").click();
    cy.get("b").should("have.text", "Daftar"); // assertion
    cy.get(".m-b-16 > .input100").type("test");
    cy.get(".m-b-16 > .input100").should("have.attr", "name", "fullname"); // assertion
    cy.get(".m-b-12 > .input100").type("test123@gmail.com");
    cy.get(".m-b-12 > .input100").should("have.attr", "name", "username"); // assertion
    cy.get(".login100-form-btn").click();
  });
});
