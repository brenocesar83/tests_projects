import { Page, expect } from '@playwright/test';
import { EmployeePage } from '../pages/EmployeePage';
import { waitForPageLoad } from '../helpers/wait.helper';

export async function criarFuncionario(page: Page) {
  const employee = new EmployeePage(page);
  const firstName = `User${Date.now()}`;
  const lastName = 'Test';

  await employee.goToPIM();
  await employee.clickAddEmployee();
  await employee.fillFirstName(firstName);
  await employee.fillLastName(lastName);
  await employee.save();
  
  await waitForPageLoad(page, 'Personal Details');

  return `${firstName}`;
}

export async function validarCamposObrigatorios(page: Page) {
  const employee = new EmployeePage(page);

  await employee.goToPIM();
  await employee.clickAddEmployee();
  await employee.save();

  await expect(page.locator('.oxd-input-field-error-message').first()).toBeVisible();
}
