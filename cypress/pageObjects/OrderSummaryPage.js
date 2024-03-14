import { BasePage } from "./basePage";

export class OrderSummaryPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get placeOrder(){
    return cy.get("button#checkoutButton");
  }
  

}