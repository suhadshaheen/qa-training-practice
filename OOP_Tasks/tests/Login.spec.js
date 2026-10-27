const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");

test("should display error message for invalid credentials", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate("https://example.com/login");
  await loginPage.login("wrongusertest", "wrongpassword");

  await expect(loginPage.errorMessage).toBeVisible();
});
