import { Page } from '@playwright/test';

export class EmployeePage {
  constructor(private page: Page) {}

  async goToPIM() {
    await this.page.getByRole('link', { name: 'PIM' }).click();
  }

  async clickAddEmployee() {
    await this.page.getByRole('button', { name: 'Add' }).click();
    await this.page.waitForURL(/addEmployee/);
    await this.page.locator('input[name="firstName"]').waitFor();
  }

  async fillFirstName(name: string) {
    await this.page.locator('input[name="firstName"]').fill(name);
  }

  async fillLastName(name: string) {
    await this.page.locator('input[name="lastName"]').fill(name);
  }

  async save() {
    const saveButton = this.page.getByRole('button', { name: 'Save' });
    await saveButton.waitFor({ state: 'visible' });
    await saveButton.click();
  }

async searchByName(name: string) {
  await this.page
    .locator('input[placeholder="Type for hints..."]')
    .first()
    .fill(name);
}

  async clickSearch() {
    await this.page.getByRole('button', { name: 'Search' }).click();
  }  
}