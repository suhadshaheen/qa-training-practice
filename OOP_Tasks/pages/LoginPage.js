const BasePage = require("./BasePage");
class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameField = page.locator("#username");
    this.passwordField = page.locator("#password");
    this.loginButton = page.locator("#loginButton");
    this.errorMessage = page.locator("#errorMessage");
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.innerText();
  }
}
module.exports = LoginPage;
