import { Page, test as baseTest } from "@playwright/test";
import { Homepage } from "../pages/home.page.ts";
import { SearchResultsPage } from "../pages/searchResults.page.ts";

// declaring the objects type for autocompletion
interface PageObjects {
  homePage: Homepage;
  searchResultsPage: SearchResultsPage;
}
// intializing all the page objects you have in your app
// and import them as fixture in spec file
const test = baseTest.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new Homepage(page));
  },
  searchResultsPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  },
});

test.beforeEach(async ({ page }) => {
  let cookiePolicy = page.getByRole("button", { name: "accept" });
  // Go to the starting url before each test.
  await page.goto("https://amazon.co.uk");
  if (cookiePolicy) {
    cookiePolicy.click();
  }
});

test.afterEach(async ({}) => {
  // console.log('afterEach tests');
});

// export default and name export so spec files can use it
export default test;
export const expect = test.expect;
