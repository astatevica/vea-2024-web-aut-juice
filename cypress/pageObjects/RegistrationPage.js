import { BasePage } from "./basePage";

export class RegistrationPage extends BasePage{
    static get url(){
        return "/#/";
    }

    static get emailFieldRandom(){
        return cy.get("#email");
    } 

    static get inputInEmailField(){
        return cy.get("input#emailControl");
    }

    static get inputPassword(){
        return cy.get("input#passwordControl");
    }

    static get inputRepeatPassword(){
        return cy.get("input#repeatPasswordControl");
    }
}