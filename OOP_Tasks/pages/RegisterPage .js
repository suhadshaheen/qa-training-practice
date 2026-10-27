const BasePage = require("./BasePage");

class RegisterPage extends BasePage {
  constructor(page) {
    super(page);

    this.firstNameField = page.locator("#firstName");
    this.lastNameField = page.locator("#lastName");
    this.emailField = page.locator("#email");
    this.passwordField = page.locator("#password");
    this.registerButton = page.locator("#registerButton");
  }

  async register(firstName, lastName, email, password) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.registerButton.click();
  }
}

module.exports = RegisterPage;
