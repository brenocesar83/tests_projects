import { test } from '@playwright/test';
import * as steps from '../steps/login.steps';

test('Login com sucesso', async ({ page }) => {
  await steps.acessarLogin(page);
  await steps.loginValido(page);
  await steps.validarDashboard(page);
});

test('Login invalido', async ({ page }) => {
  await steps.acessarLogin(page);
  await steps.loginInvalido(page);
  await steps.validarErro(page);
});