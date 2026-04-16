import { Page } from '@playwright/test';

export async function waitForPageLoad(page: Page, heading: string) {
  await page.getByRole('heading', { name: heading }).waitFor();
}