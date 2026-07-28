import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/web/index.php/auth/login');
  }

  async login(user: string, pass: string) {
    await this.page.getByPlaceholder('Username').fill(user);
    await this.page.getByPlaceholder('Password').fill(pass);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  getError() {
    return this.page.locator('.oxd-alert-content-text');
  }
}