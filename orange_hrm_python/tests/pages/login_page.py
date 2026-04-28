class LoginPage:
    def __init__(self, page):
        self.page = page

    def goto(self):
        self.page.goto("https://opensource-demo.orangehrmlive.com")

    def login(self, user, password):
        self.page.get_by_placeholder("Username").fill(user)
        self.page.get_by_placeholder("Password").fill(password)
        self.page.get_by_role("button", name="Login").click()

    def get_error(self):
        return self.page.locator(".oxd-alert-content-text")