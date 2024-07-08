import { ftruncate } from "fs";

test("Contact Edit test", async ({ context, page, request }) => {
  const contact = new ContactPage(page);
  const Data = { firstNAme: "hello", LastNAme: "world" };
  const accessToken = await authenticateUser1({ request });
  const entityId = await createEntity(Data, accessToken, "/contacts", {
    request,
  });
  await intercept("https://thinking-tester-contact-list.herokuapp.com/", {
    context,
    page,
  });
  page.reload();
  page.waitForTimeOut(5000);
  await contact.contactEdit();
  await page.waitForTimeOut(5000);
  await deleteEntity(accessToken);
});

async function intercept(module, { context, page }) {
  await context.route(module, async (route) => {
    await route.continue();
    const response = await page.waitForResponse(module);
    const reponseBody = await response.json();
  });
}
