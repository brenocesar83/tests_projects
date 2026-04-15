import { test } from '@playwright/test';
import * as loginSteps from '../steps/login.steps';
import * as employeeSteps from '../steps/employee.steps';

test('Cadastrar funcionario com sucesso', async ({ page }) => {
  await loginSteps.acessarLogin(page);
  await loginSteps.loginValido(page);

  await employeeSteps.criarFuncionario(page);
});

test('Validar campos obrigatorios ao criar funcionario', async ({ page }) => {
  await loginSteps.acessarLogin(page);
  await loginSteps.loginValido(page);

  await employeeSteps.validarCamposObrigatorios(page);
});