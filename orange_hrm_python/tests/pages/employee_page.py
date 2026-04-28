class EmployeePage:
    def __init__(self, page):
        self.page = page

    def go_to_pim(self):
        self.page.get_by_role("link", name="PIM").click()

    def click_add_employee(self):
        self.page.get_by_role("button", name="Add").click()
        self.page.wait_for_url("**/addEmployee")

    def fill_employee(self, first, last):
        first_input = self.page.locator('input[name="firstName"]')
        last_input = self.page.locator('input[name="lastName"]')

        first_input.fill(first)
        last_input.fill(last)

        # 🔥 MUITO IMPORTANTE
        last_input.press("Tab")

        # 🔥 garante que não tem erro visível
        self.page.locator(".oxd-input-field-error-message").wait_for(state="hidden", timeout=5000)

    def set_employee_id(self, emp_id):
        input_id = self.page.locator("input.oxd-input").nth(4)
        input_id.fill("")
        input_id.fill(emp_id)
        input_id.press("Tab")

    def save(self):
        save_btn = self.page.get_by_role("button", name="Save")

        save_btn.wait_for(state="visible")

        save_btn.click()

        # 🔥 espera loader sumir (ESSENCIAL nesse sistema)
        self.page.locator(".oxd-form-loader").wait_for(state="hidden", timeout=10000)

    def wait_loaded(self):
        self.page.get_by_role("heading", name="Personal Details").wait_for()