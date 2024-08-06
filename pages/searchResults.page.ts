import { Page, expect } from "@playwright/test";
import { BasePage } from "../base/basepage";
export class SearchResultsPage extends BasePage {
  constructor(public page: Page) {
    super(page);
  }

  elements = {
    firstResultSelector:
      'div.s-main-slot.s-result-list div[data-component-type="s-search-result"] h2 a span',
  };

  async verifyFirstResult() {
    const firstResultElement = this.page
      .locator(this.elements.firstResultSelector)
      .first();
    const firstResultText = await firstResultElement.innerText();

    // Verify that the first result contains the word "iPhone"
    expect(firstResultText).toContain("iPhone");
  }

  async verifyPageTitleValue(product) {
    await expect(this.page).toHaveTitle(`Amazon.co.uk : ${product}`);
  }
}
