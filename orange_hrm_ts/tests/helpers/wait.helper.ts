import { Page } from '@playwright/test';

export async function waitForHeading(page: Page, heading: string) {
  await page.getByRole('heading', { name: heading }).waitFor();
}