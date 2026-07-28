import { test } from '@playwright/test';
import * as loginSteps from '../steps/login.steps';
import * as employeeSteps from '../steps/employee.steps';
import * as searchSteps from '../steps/search.steps';

test('Criar e buscar funcionario', async ({ page }) => {
  await loginSteps.acessarLogin(page);
  await loginSteps.loginValido(page);
  const name = await employeeSteps.criarFuncionario(page);
  await searchSteps.buscarFuncionarioPorNome(page, name);
});