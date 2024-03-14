import { BasketPage } from "../pageObjects/BasketPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { RegistrationPage } from "../pageObjects/RegistrationPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";
import { BasePage } from "../pageObjects/basePage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.profileMenuOption.should("contain", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.newCustomer.click();
      // Find - how to generate random number in JS
      //skaitlis = Math.round((Math.random() * 100) + 100);
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      const email = `email_${Math.round((Math.random() * 100) + 100)}@ebox.com`;
      RegistrationPage.inputInEmailField.type(email);
      // Fill in password field and repeat password field with same password
      RegistrationPage.inputPassword.type("1234567asdfg");
      RegistrationPage.inputRepeatPassword.type("1234567asdfg");
      // Click on Security Question menu
      RegistrationPage.securityQuestionField.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.getFavoritePetName.click();
      // Fill in answer
      RegistrationPage.inputSecurityAnswer.type("Milka");
      // Click Register button
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type("1234567asdfg");
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.profileMenuOption.should("contain", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchQuery.click();
      // Search for Lemon
      HomePage.inputInSearchQuery.type("Lemon");
      cy.get('input').type('{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.clickOnLemonButton.click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.lemonFieldValidation.should("contain", "Sour but full of vitamins.");
    });
  });


  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it.only("Search 500ml and validate Lemon", () => {
      // Click on search icon
      HomePage.searchQuery.click();
      // Search for 500ml
      HomePage.inputInSearchQuery.type("500ml");
      cy.get('input').type('{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.clickOnLemonButton.click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.justLemonFieldValidation.should('contain', 'Sour but full of vitamins.');
    });
  });

  // Create scenario - Search 500ml and validate cards
  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search 500ml and validate cards", () => {  
    // Click on search icon
    HomePage.searchQuery.click();
    // Search for 500ml
    HomePage.inputInSearchQuery.type("500ml");
    cy.get('input').type('{enter}');
    // Select a product card - Eggfruit Juice (500ml)
    HomePage.clickOnEgfruitJuice.click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    HomePage.validateCardEgfruitJuice.should('contain','Now with even more exotic flavour.');
    // Close the card
    HomePage.closeCard.click();
    // Select a product card - Lemon Juice (500ml)
    HomePage.clickOnLemonButton.click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.justLemonFieldValidation.should('contain', 'Sour but full of vitamins.');
    // Close the card
    HomePage.closeCard.click();
    // Select a product card - Strawberry Juice (500ml)
    HomePage.clickOnStrawberryJuice.click();
    // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.validateCardStrawberryJuice.should('contain', 'Sweet & tasty!');
  });

  // Create scenario - Read a review
  it("Read a review", () => {
    // Click on search icon
    HomePage.searchQuery.click();
    // Search for King
    HomePage.inputInSearchQuery.type("King");
    cy.get('input').type('{enter}');
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    HomePage.clickOnKingOfTheHill.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.expandReviews.click();
    cy.wait(150);
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    HomePage.validateARewiev.should('contain', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');
  });

  // Create scenario - Add a review
  it("Add a review", () => {
    // Click on search icon
    HomePage.searchQuery.click();
    // Search for Raspberry
    HomePage.inputInSearchQuery.type("Raspberry");
    cy.get('input').type('{enter}');
    // Select a product card - Raspberry Juice (1000ml)
    HomePage.clickOnRaspberryButton.click();
    // Type in review - "Tastes like metal"
    HomePage.writeAReview.type("Tastes like metal");
    //cy.wait(150);
    // Click Submit
    HomePage.clickSubbmit.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.expandReviews.click();
    //cy.wait(150);
    // Validate review -  "Tastes like metal"
    HomePage.validateRaspberryRewiev.should('contain', 'Tastes like metal');
  });

    // Create scenario - Validate product card amount
  it("Validate product card amount", () => {
    // Validate that the default amount of cards is 12
    HomePage.validateCards.should('have.length', 12);
    // Change items per page (at the bottom of page) to 24
    // Validate that the amount of cards is 24
    //HomePage.validateCards.should('have.length', 24);
    // Change items per page (at the bottom of page) to 36
    // Validate that the amount of cards is 35
    //HomePage.validateCards.should('have.length', 35);
  });

  // Create scenariso - Buy Girlie T-shirt
  it.only("Validate product card amount", () => {
    // Click on search icon
    HomePage.searchQuery.click();
    // Search for Girlie
    HomePage.inputInSearchQuery.type("Girlie");
    cy.get('input').type('{enter}');
    // Add to basket "Girlie"
    //HomePage.addToBascet.click();
    // Click on "Your Basket" button
    HomePage.clickOnBasket.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
    BasketPage.clickOnCheckout.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    SelectAddressPage.addressFakedom.click();
    // Click Continue button
    SelectAddressPage.pressContinue.click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    DeliveryMethodPage.deliveryOptions.contains("Standard Delivery").click();
    // Click Continue button
    DeliveryMethodPage.clickContinue.click();
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    PaymentOptionsPage.chooseCard.click();
    // Click Continue button
    PaymentOptionsPage.pressContinue.click();
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
  });

    // Create scenario - Add address
    // Click on Account
    // Click on Orders & Payment
    // Click on My saved addresses
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    // Click Submit button
    // Validate that previously added address is visible

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
  });
});
