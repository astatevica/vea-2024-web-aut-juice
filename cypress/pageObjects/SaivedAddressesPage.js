import { BasePage } from "../pageObjects/basePage";

export class SaivedAddressesPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get clickAddNewAddresses(){
    return cy.get("button[aria-label='Add a new address']");
  }

  static get validateNewAddresses(){
    return cy.get("[class='mat-card mat-focus-indicator mat-elevation-z6']");
  }
}