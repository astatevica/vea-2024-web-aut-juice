import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get deliveryOptions(){
    return cy.get("mat-row.mat-row"); 
  }

  static get clickContinue(){
    return cy.get("button[aria-label='Proceed to delivery method selection']");
  }
  


}