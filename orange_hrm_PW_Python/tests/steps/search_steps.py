from playwright.sync_api import expect
from tests.pages.employee_page import EmployeePage

def buscar_funcionario(page, name):
    employee = EmployeePage(page)

    employee.go_to_pim()

    # campo autocomplete (robusto)
    field = page.locator(".oxd-form").get_by_role("textbox").first
    field.fill(name)

    page.wait_for_selector(".oxd-autocomplete-dropdown")
    page.locator(".oxd-autocomplete-option").first.click()

    page.get_by_role("button", name="Search").click()

    page.wait_for_timeout(1500)

    result = page.locator(".oxd-table-row").filter(has_text=name)

    expect(result.first).to_be_visible()