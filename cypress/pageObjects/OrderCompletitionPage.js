import { BasePage } from "./basePage";

export class OrderCompletionPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get confirmation(){
    return cy.get("[class='confirmation']");
  }
  

}