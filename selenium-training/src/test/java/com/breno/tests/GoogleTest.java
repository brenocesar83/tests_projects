package com.breno.tests;

import com.breno.base.BaseTest;
import org.testng.annotations.Test;

public class GoogleTest extends BaseTest {

    @Test
    public void shouldOpenGoogle() {

        driver.get("https://www.google.com");

    }

}