package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import base.Driver_script;

public class Home_Page extends Driver_script {
public WebDriver driver;
	
	public Home_Page(WebDriver driver)
	{
		this.driver=driver;
	}
	
	By postCode = By.name("postcode");
	By searchBtn = By.xpath("//button[@class='Form_c-search-btn_2cjDI']");
	By location = By.className("c-locationHeader-title");

	
	public WebElement getpostCode()
	{
		return driver.findElement(postCode);
	}
	
	public WebElement getLocation()
	{
		return driver.findElement(location);
	}
	
	public WebElement getsearchBtn()
	{
		return driver.findElement(searchBtn);
	} 

}
