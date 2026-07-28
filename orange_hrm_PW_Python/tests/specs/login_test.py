from tests.steps import login_steps as steps

def test_login_sucesso(page):
    steps.acessar_login(page)
    steps.login_valido(page)

def test_login_invalido(page):
    steps.acessar_login(page)
    steps.login_invalido(page)
    steps.validar_erro(page)