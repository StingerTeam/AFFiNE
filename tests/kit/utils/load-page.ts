import type { Page } from '@playwright/test';

export const coreUrl = 'http://localhost:8080';

export async function openHomePage(page: Page) {
  await page.goto(coreUrl);
}

export async function open404Page(page: Page) {
  await page.goto(`${coreUrl}/404`);
}
