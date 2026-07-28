from tests.steps import login_steps, employee_steps

def test_criar_funcionario(page):
    login_steps.acessar_login(page)
    login_steps.login_valido(page)

    employee_steps.criar_funcionario(page)