from playwright.sync_api import expect
from tests.pages.login_page import LoginPage

def acessar_login(page):
    LoginPage(page).goto()

def login_valido(page):
    LoginPage(page).login("Admin", "admin123")

def login_invalido(page):
    LoginPage(page).login("Admin", "errado")

def validar_erro(page):
    expect(LoginPage(page).get_error()).to_be_visible()