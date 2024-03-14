import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton(){
    return cy.get("button#navbarAccount");
  }

  static get loginButton(){
    return cy.get("button#navbarLoginButton");
  }

  static get profileMenuOption(){
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchQuery(){
    return cy.get("#searchQuery");
  }

  static get inputInSearchQuery(){
    return cy.get("input#mat-input-0");
  }

  static get clickOnLemonButton(){
    return cy.get("[aria-label='Click for more information about the product']");
  }

  static get lemonFieldValidation(){
    return cy.get("[class='ng-star-inserted']");
  }

  static get clickOnLemonButton(){
    return cy.get("[alt='Lemon Juice (500ml)']");
  }

  static get justLemonFieldValidation(){
    return cy.get("[class='ng-star-inserted']");
  }

  static get clickOnEgfruitJuice(){
    return cy.get("[alt='Eggfruit Juice (500ml)']");
  }

  static get validateCardEgfruitJuice(){
    return cy.get("[class='container mat-typography']");
  }

  static get closeCard(){
    return cy.get("button[aria-label='Close Dialog']");
  }

  static get clickOnStrawberryJuice(){
    return cy.get("[alt='Strawberry Juice (500ml)']");
  }

  static get validateCardStrawberryJuice(){
    return cy.get("[class='ng-star-inserted']");
  }

}
