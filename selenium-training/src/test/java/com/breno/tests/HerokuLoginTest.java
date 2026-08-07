package com.breno.tests;

import com.breno.base.BaseTest;
import com.breno.pages.LoginPage;
import com.breno.constants.Messages;
import com.breno.constants.Credentials;

import org.testng.Assert;
import org.testng.annotations.Test;

public class HerokuLoginTest extends BaseTest {

    @Test
    public void shouldLoginWithValidCredentials() {
        LoginPage login = new LoginPage(driver);
        login.open();
        login.enterCredentials(Credentials.VALID_USER, Credentials.VALID_PASSWORD);
        login.clickLogin();
        Assert.assertEquals(login.getSuccessMessage(), Messages.LOGIN_SUCCESS);
    }

    @Test
    public void shouldNotLoginWithInvalidCredentials() {
        LoginPage login = new LoginPage(driver);
        login.open();
        login.enterCredentials(Credentials.INVALID_USER, Credentials.INVALID_PASSWORD);
        login.clickLogin();
        Assert.assertTrue(login.getFailureMessage().contains(Messages.LOGIN_FAILURE));
    }
}
