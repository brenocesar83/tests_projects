package com.breno.base;

import org.testng.annotations.BeforeMethod;
import org.testng.annotations.AfterMethod;
import org.openqa.selenium.WebDriver;
import com.breno.utils.DriverFactory;

public class BaseTest {
    protected WebDriver driver;
    protected DriverFactory driverFactory;

    @BeforeMethod
    public void setUp() {
        driverFactory = new DriverFactory();
        driver = driverFactory.getDriver("chrome");
        driver.manage().window().maximize();
    }

    @AfterMethod
    public void tearDown() {
        if(driverFactory != null) {
            driverFactory.quitDriver();
        }
    }
}
