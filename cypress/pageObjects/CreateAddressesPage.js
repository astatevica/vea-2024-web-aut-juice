import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get getCountry(){
    return cy.get("input#mat-input-1");
  }

  static get getName(){
    return cy.get("input#mat-input-2");
  }

  static get getNumber(){
    return cy.get("input#mat-input-3");
  }

  static get getZipCode(){
    return cy.get("input#mat-input-4");
  }

  static get getAddress(){
    return cy.get("textarea#address");
  }

  static get getCity(){
    return cy.get("input#mat-input-6");
  }

  static get clickSubmit(){
    return cy.get("button#submitButton");
  }
}