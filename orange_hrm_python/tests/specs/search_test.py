from tests.steps import login_steps, employee_steps, search_steps

def test_criar_e_buscar(page):
    login_steps.acessar_login(page)
    login_steps.login_valido(page)

    name = employee_steps.criar_funcionario(page)

    search_steps.buscar_funcionario(page, name)