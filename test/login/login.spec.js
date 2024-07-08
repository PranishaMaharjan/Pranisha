const { test, expect } = require("@playwright/test");
const testdata = require("../../fixture/login.json");

test.beforeEach(async ({ page }) => {
  await page.goto("./");
});
test.describe("Valid login tests", () => {
  test("has title", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Test Login | Practice Test Automation/);
  });

  test("login", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill(testdata.validUser.username);
    await page.locator("#password").fill(testdata.validUser.password);
    await page.locator("#submit").click();

    await expect(page.locator(".post-title")).toHaveText(
      /Logged In Successfully/
    );
  });
});

test.describe("Invalid login tests", () => {
  test("invalid", async ({ page }) => {
    // const login = new LoginPage(page);
    // await login.login();
    await page
      .locator("#username")
      .fill(testdata.invalidUser.invalidcredentials.username);
    await page
      .locator("#password")
      .fill(testdata.invalidUser.invalidcredentials.password);
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("invalid password", async ({ page }) => {
    // const login = new LoginPage(page);
    // await login.login();
    await page
      .locator("#username")
      .fill(testdata.invalidUser.invalidPassword.username);
    await page
      .locator("#password")
      .fill(testdata.invalidUser.invalidPassword.password);
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your password is invalid!");
  });

  test("invalid username", async ({ page }) => {
    // const login = new LoginPage(page);
    // await login.login();
    await page
      .locator("#username")
      .fill(testdata.invalidUser.invalidUsername.username);
    await page
      .locator("#password")
      .fill(testdata.invalidUser.invalidUsername.password);
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("empty", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill(testdata.invalidUser.empty.username);
    await page.locator("#password").fill(testdata.invalidUser.empty.password);
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("empty username", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page
      .locator("#username")
      .fill(testdata.invalidUser.emptyUser.username);
    await page
      .locator("#password")
      .fill(testdata.invalidUser.emptyUser.password);
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("empty password", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page
      .locator("#username")
      .fill(testdata.invalidUser.emptyPassword.username);
    await page
      .locator("#password")
      .fill(testdata.invalidUser.emptyPassword.password);
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your password is invalid!");
  });

  test("Username with leading spaces", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page
      .locator("#username")
      .fill(testdata.invalidUser.userLeadingSpace.username);
    await page
      .locator("#password")
      .fill(testdata.invalidUser.userLeadingSpace.password);
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("Password with leading spaces", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page
      .locator("#username")
      .fill(testdata.invalidUser.passwordLeadingSpace.username);
    await page
      .locator("#password")
      .fill(testdata.invalidUser.passwordLeadingSpace.password);
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your password is invalid!");
  });
});


