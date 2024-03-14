import { BasePage } from "./basePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get chooseCard(){
    return cy.get("[class='mat-row cdk-row ng-star-inserted']");
  }
  
  static get pressContinue(){
    return cy.get("button[class='mat-button-wrapper']");
  }

  static get exitOptions(){
    return cy.get("[class='mat-button-wrapper']"); 
  }

}