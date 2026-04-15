import { Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

export async function acessarLogin(page: Page) {
  const login = new LoginPage(page);
  await login.goto();
}

export async function loginValido(page: Page) {
  const login = new LoginPage(page);
  await login.login('Admin', 'admin123');
}

export async function loginInvalido(page: Page) {
  const login = new LoginPage(page);
  await login.login('Admin', 'senha123');
}

export async function validarDashboard(page: Page) {
  const dash = new DashboardPage(page);
  await dash.isLoaded();
}

export async function validarErro(page: Page) {
  const login = new LoginPage(page);

  await page.waitForSelector('.oxd-alert-content-text', { timeout: 10000 });

  await expect(login.getError()).toBeVisible();
}