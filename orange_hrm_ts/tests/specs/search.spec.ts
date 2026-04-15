import { test } from '@playwright/test';
import * as loginSteps from '../steps/login.steps';
import * as employeeSteps from '../steps/employee.steps';
import * as searchSteps from '../steps/search.steps';

test('Criar e buscar funcionario', async ({ page }) => {
  // login
  await loginSteps.acessarLogin(page);
  await loginSteps.loginValido(page);

  // cria funcionário e captura nome
  const name = await employeeSteps.criarFuncionario(page);

  // busca pelo mesmo nome
  await searchSteps.buscarFuncionarioPorNome(page, name);
});