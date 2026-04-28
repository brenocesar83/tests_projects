from playwright.sync_api import expect
from tests.pages.employee_page import EmployeePage
import time

def criar_funcionario(page):
    employee = EmployeePage(page)

    first_name = f"User{int(time.time()*1000)}"
    last_name = "Test"

    employee.go_to_pim()
    employee.click_add_employee()

    employee.fill_employee(first_name, last_name)

    employee.save()

    employee.wait_loaded()

    assert "viewPersonalDetails" in page.url

    return first_name