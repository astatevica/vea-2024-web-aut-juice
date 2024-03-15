import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/";
  }

  //class='mat-expansion-panel mat-elevation-z0 ng-tns-c41-17 ng-star-inserted'
  static get addNewCard() {
    return cy.get("#mat-expansion-panel-header-1");
  }

  static get fillNAme(){
    return cy.get("input#mat-input-5");
  }

  static get fillCardNymber(){
    return cy.get("input#mat-input-6");
  }

  static get selectExpiryMonth(){
    return cy.get('#mat-input-7'); 
  }
  
  static get selectExpiryYear(){
    return cy.get('#mat-input-8'); 
  }
  static get submitButton(){ 
    return cy.get('button#submitButton'); 
  }

}