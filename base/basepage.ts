import { Page } from "@playwright/test";

export class BasePage {
  private dataMap = new Map();
  constructor(public page: Page) {}
}
