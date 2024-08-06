import { Page } from "@playwright/test";
import { BasePage } from "../base/basepage";
export class Homepage extends BasePage {
  constructor(public page: Page) {
    super(page);
  }

  elements = {
    searchInputField: "[id='twotabsearchtextbox']",
    searchButton: "[id='nav-search-submit-button']",
  };

  async searchForProduct(product) {
    await this.page.fill(this.elements.searchInputField, product);
    await this.page.click(this.elements.searchButton);
  }
}
