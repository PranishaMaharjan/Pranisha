const { test, expect } = require("@playwright/test");
const testData = require("../../fixture/login.v2.json");
const { LoginPage } = require("../../objects/login.v2.po");

const { createEntity, authenticateUser1 } = require("../../util/helper.spec");
const { DashboardPage } = require("../../objects/contactTest.dashboard.po");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
+test.describe("Dashboard crud check", () => {
  test("crud", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.validUser.email, testData.validUser.password);
    await login.verifyValidLogin();

    await page.locator('//*[@id="add-contact"]').click();

    const dashboard = new DashboardPage(page);
    await dashboard.fillForm();
    await dashboard.validFill();
    await dashboard.editData();
    await dashboard.validEdit();
    await dashboard.deleteData();
    await dashboard.validDelete();
    await dashboard.logout();
    await dashboard.validLogout();

    await page.waitForTimeout(10000);
  });
});
