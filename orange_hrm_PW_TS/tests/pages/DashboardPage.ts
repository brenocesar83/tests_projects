import { Page } from '@playwright/test';
import { waitForHeading } from '../helpers/wait.helper';

export class DashboardPage {
  constructor(private page: Page) {}

  async waitUntilLoaded() {
    await waitForHeading(this.page, 'Dashboard');
  }
}