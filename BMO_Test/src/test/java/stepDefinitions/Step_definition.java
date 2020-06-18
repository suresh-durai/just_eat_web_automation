package stepDefinitions;

import io.cucumber.java.en.When;
import io.cucumber.junit.Cucumber;
import junit.framework.Assert;
import base.Driver_script;
import io.cucumber.java.en.Then;

import java.io.FileInputStream;
import java.util.Properties;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import io.cucumber.java.After;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;

@RunWith(Cucumber.class)
public class Step_definition extends Driver_script {
	public WebDriver driver;

	@Given("^User navigate to the landing page$")
	public void user_navigate_to_the_landing_page() throws Throwable {
		driver = getWebDriver();
		Properties prop = new Properties();
		FileInputStream fis = new FileInputStream(
				"C:\\Users\\suresh\\eclipse-workspace\\BMO_Test\\src\\test\\java\\files\\Data.properties");
		prop.load(fis);
		driver.get(prop.getProperty("baseUrl")); // Getting the website url from properties file
	}

	@And("^User enter \"([^\"]*)\"$")
	public void user_enter_something(String strArg1) throws Throwable {
		System.out.println(strArg1);
		driver.findElement(By.name("postcode")).sendKeys(strArg1);
	}

	@When("^User search for restaurants$")
	public void user_search_for_restaurants() throws Throwable {
		driver.findElement(By.xpath("//button[@class='Form_c-search-btn_2cjDI']")).click(); // Clicking Search button
	}

	@Then("^User should see some restaurants in the entered postalcode$")
	public void user_should_see_some_restaurants_in_the_entered_postalcode() throws Throwable {
		String currentUrl = driver.getCurrentUrl();
		Assert.assertEquals(currentUrl, "https://www.just-eat.co.uk/area/ar51-area51"); // Checking if current URL is
																						// same as expected URL
		driver.findElement(By.className("c-locationHeader-title")).getText().contains("AR51 1AA"); // Checking to see if the entered postal code is displayed in next page
		driver.findElement(By.xpath("//h3[contains(text(),'Pizza Hut - Shell Menu')]")).isDisplayed(); // Checking if
																										// the
																										// restaurants
																										// are displayed
																										// in search
																										// result
		driver.findElement(By.xpath("//h3[contains(text(),'TASKUS PAPA JOHNS')]")).isDisplayed();
	}

	@And("^User search for \"([^\"]*)\" restaurant in the available search result$")
	public void user_search_for_something_restaurant_in_the_available_search_result(String restaurantName)
			throws Throwable {
		driver.findElement(By.xpath("//input[@id='dish-search']")).sendKeys(restaurantName);
		driver.findElement(By.xpath("//span[@class='u-showAboveMid c-searchInput-button-text']")).click();
		String resName = driver.findElement(By.cssSelector("button[type='submit']")).getText();
		Assert.assertEquals(resName, "TASKUS PAPA JOHNS"); // Checking if the restaurant name is displayed in search
															// result

	}

	@Then("^User should see postal code error on the page$")
	public void user_should_see_postal_code_error_on_the_page() throws Throwable {
		String errorTxt = driver.findElement(By.id("errorMessage")).getText();
		Assert.assertEquals(errorTxt, "Please enter a full, valid postcode"); // Checking if the error text is same as
																				// expected text
	}

	@After
	public void teardown() {
		driver.close();
	}

}
