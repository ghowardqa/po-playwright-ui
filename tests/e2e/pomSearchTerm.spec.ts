import test, { expect } from "../../base/basetest";
import { SearchResultsPage } from "../../pages/searchResults.page";

let iPhoneSearchTerm = "iPhone";

test.describe("Search tests", () => {
  test("Verfiy that the title contains the search term", async ({
    page,
    homePage,
    searchResultsPage,
  }) => {
    await homePage.searchForProduct(iPhoneSearchTerm);
    await page.waitForLoadState();
    await searchResultsPage.verifyPageTitleValue(iPhoneSearchTerm);
  });

  test("launch on the main page and search for a term", async ({
    page,
    homePage,
    searchResultsPage,
  }) => {
    await homePage.searchForProduct(iPhoneSearchTerm);
    await page.waitForLoadState();
    await searchResultsPage.verifyFirstResult();
  });
});
