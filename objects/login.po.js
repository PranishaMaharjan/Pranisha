const { expect } = require("@playwright/test");
exports.LoginPage = class LoginPage {
  constructor(Page) {
    this.page = page;
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = "#submit";
  }

  async login(username, password) { 
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
};
