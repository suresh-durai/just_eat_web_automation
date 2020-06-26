package base;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Driver_script {
	public static WebDriver driver;
	public static Properties prop;

	public static WebDriver getDriver() throws IOException
	{
		prop=new Properties();
		//FileInputStream fis=new FileInputStream("C:\\Users\\suresh\\eclipse-workspace\\BMO_Test\\src\\test\\java\\files\\Data.properties");
		FileInputStream fis=new FileInputStream(System.getProperty("user.dir") + "/src/test/java/files" 
		+ "/Data.properties");

	prop.load(fis);  
	System.setProperty("webdriver.chrome.driver", (System.getProperty("user.dir") + "/src" 
  				+ "/chromedriver.exe"));
	driver = new ChromeDriver();
  	driver.get(prop.getProperty("baseUrl"));
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	return driver;
		
	}
	
}