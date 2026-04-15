import { Page, expect } from '@playwright/test';
import { EmployeePage } from '../pages/EmployeePage';


export async function buscarFuncionarioPorNome(page: Page, name: string) {
  const employee = new EmployeePage(page);

  await employee.goToPIM();

  await employee.searchByName(name);

  await page.waitForSelector('.oxd-autocomplete-dropdown');
  await page.locator('.oxd-autocomplete-option').first().click();

  await employee.clickSearch();

  const resultRow = page
    .locator('.oxd-table-row')
    .filter({ hasText: name });

  await expect(resultRow).toHaveCount(1);
  await expect(resultRow.first()).toBeVisible();
  await expect(resultRow.first()).toContainText(name);
}