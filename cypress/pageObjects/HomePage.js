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

  static get clickOnKingOfTheHill(){
    return cy.get("[class='mat-tooltip-trigger product']");
  }

  static get expandReviews(){
    return cy.get("[aria-label='Expand for Reviews']");
  }

  static get validateARewiev(){
    return cy.get("[class='mat-tooltip-trigger review-text']");
  }

  static get clickOnRaspberryButton(){
    return cy.get("[alt='Raspberry Juice (1000ml)']");
  }

  //mat-input-30
  static get writeAReview(){
    return cy.get("textarea[aria-label='Text field to review a product']");
  }

  static get clickSubbmit(){
    return cy.get("button#submitButton");
  }

  static get validateRaspberryRewiev(){
    return cy.get("[class='mat-tooltip-trigger review-text']");
  }

  static get validateCards(){
    return cy.get("[class='mat-grid-tile ng-star-inserted']");
  }

  static get addToBascet(){
    return cy.get("button[aria-label='Add to Basket']");
  }

  static get clickOnBasket(){
    return cy.get("button[class='mat-focus-indicator buttons mat-button mat-button-base ng-star-inserted']")
  }

  static get clickOnOrdersAndPayment(){
    return cy.get("button[aria-label='Show Orders and Payment Menu']");
  }

  static get clickOnMySavedAddresses(){
    return cy.get("button[aria-label='Go to saved address page']");
  }

  static get clickOnPaymentOptions(){
    return cy.get("[aria-label='Go to saved payment methods page']");
  }

}
