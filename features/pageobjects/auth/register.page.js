import BasePage from "../common/base.page.js";

export default class LoginPage extends BasePage {
    constructor() {
        super();
    }

    get title() {
        return browser.$('//h1[text()="Login"]');
    }

    get inputEmail() {
        return browser.$('#email');
    }

    get inputPassword() {
        return browser.$('#password');
    }

    get linkForgotPassword() {
        return browser.$('.primary-link.forgot-pw');
    }

    get checkboxRememberMe() {
        return browser.$('[for="rememberMe-input"]');
    }

    get linkRegister() {
        return browser.$("//a[@routerlink=\"/register\"]");
    }

    get buttonLogin() {
        return browser.$('button#loginButton')
    }

    async waitForLoad() {
        await this.title.waitForDisplayed();
        await this.inputEmail.waitForDisplayed();
        await this.inputPassword.waitForDisplayed();
        await this.linkForgotPassword.waitForDisplayed();
        await this.checkboxRememberMe.waitForDisplayed();
        await this.linkRegister.waitForDisplayed();
        await this.buttonLogin.waitForDisplayed();
    }
}