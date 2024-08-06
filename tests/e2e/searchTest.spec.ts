import { test, expect } from "@playwright/test";

test.describe("Search tests", () => {
  test.beforeEach(async ({ page }) => {
    let cookiePolicy = page.getByRole("button", { name: "accept" });
    // Go to the starting url before each test.
    await page.goto("https://amazon.co.uk");
    if (cookiePolicy) {
      cookiePolicy.click();
    }
  });

  test("Verfiy that the title contains the search term", async ({ page }) => {
    let iPhoneSearchTerm = "iPhone";
    await page.fill("[id='twotabsearchtextbox']", iPhoneSearchTerm);
    await page.click("[id='nav-search-submit-button']");
    await page.waitForLoadState();
    await expect(page).toHaveTitle(`Amazon.co.uk : ${iPhoneSearchTerm}`);
  });

  test("launch on the main page and search for a term", async ({ page }) => {
    await page.fill("[id='twotabsearchtextbox']", "iPhone");
    await page.click("[id='nav-search-submit-button']");
    await page.waitForLoadState();

    const firstResultSelector =
      'div.s-main-slot.s-result-list div[data-component-type="s-search-result"] h2 a span';
    const firstResultElement = page.locator(firstResultSelector).first();
    const firstResultText = await firstResultElement.innerText();

    // Verify that the first result contains the word "iPhone"
    expect(firstResultText).toContain("iPhone");
  });
});
