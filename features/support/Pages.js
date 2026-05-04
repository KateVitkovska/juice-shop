import LoginPage from "../pageobjects/auth/login.page.js";
import RegisterPage from "../pageobjects/auth/register.page.js";
import BasketPage from "../pageobjects/basket.page.js";
import BasePage from "../pageobjects/common/base.page.js";
import ComplaintPage from "../pageobjects/complaint.page.js";
import ProductsPage from "../step-definitions/products.page.js";
import ProfilePage from "../pageobjects/profile.page.js"

export default class Pages {
    constructor() {
        this.basePage = new BasePage();
        this.basketPage = new BasketPage();
        this.complaintPage = new ComplaintPage();
        this.loginPage = new LoginPage();
        this.registerPage = new RegisterPage();
        this.productsPage = new ProductsPage();
        this.profilePage = new ProfilePage();
    }
}