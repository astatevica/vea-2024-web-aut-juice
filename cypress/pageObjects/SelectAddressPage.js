import { BasePage } from "./basePage";

export class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get addressFakedom(){
    return cy.get("[class='mat-row cdk-row ng-star-inserted']");
  }

  static get pressContinue(){
    return cy.get("button[class='mat-focus-indicator btn btn-next mat-button mat-raised-button mat-button-base mat-primary ng-star-inserted']");
  }




}