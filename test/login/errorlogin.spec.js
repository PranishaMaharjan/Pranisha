const { test, expect } = require("@playwright/test");
const testdata = require("../../fixture/login.json");

test.beforeEach(async ({ page }) => {
  await page.goto("./");
});
test.describe("Valid login tests", () => {
  test("login", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill(testdata.validUser.userName);
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();

    await expect(page.locator(".post-title")).toHaveText(
      /Logged In Successfully/
    );
  });
});

test.describe("Invalid login tests", () => {
  test("invalid", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("incorrectUser");
    await page.locator("#password").fill("incorrectPassword");
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("invalid password", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("incorrectPassword");
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your password is invalid!");
  });

  test("invalid username", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("incorrectUsername");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("empty", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("");
    await page.locator("#password").fill("");
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("empty username", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("empty password", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("");
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your password is invalid!");
  });

  test("Username with leading spaces", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("    student");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your username is invalid!");
  });

  test("Password with leading spaces", async ({ page }) => {
    // await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("    Password123");
    await page.locator("#submit").click();
    const errorMessage = await page.locator("#error").textContent();
    expect(errorMessage).toContain("Your password is invalid!");
  });
});
