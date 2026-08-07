package com.breno.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;  
import org.openqa.selenium.WebDriver;

public class LoginPage {
    private final By usernameField = By.id("username");
    private final By passwordField = By.id("password");
    private final By loginButton = By.className("radius");
    private final By successMessageField = By.className("subheader");
    private final By failureMessageField = By.id("flash");

    private WebDriver driver;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    public void open() {
        driver.get("https://the-internet.herokuapp.com/login");
    }

    public void enterCredentials(String username, String password) {
        driver.findElement(usernameField).sendKeys(username);
        driver.findElement(passwordField).sendKeys(password);
    }   

    public void clickLogin() {
        // driver.findElement(By.tagName("button")).click();
        driver.findElement(loginButton).click();
    }

    public String getSuccessMessage(){
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.urlMatches("https://the-internet.herokuapp.com/secure"));
        String successMessage = driver.findElement(successMessageField).getText();
        return successMessage;
    }

    public String getFailureMessage() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.visibilityOfElementLocated(failureMessageField));
        String failureMessage = driver.findElement(failureMessageField).getText();
        return failureMessage;
    }

}
