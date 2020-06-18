package base;


import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class Driver_script {
		    public static WebDriver driver;
		    public WebDriver getWebDriver() throws IOException
			{
		    	Properties prop = new Properties();
		    	FileInputStream fis= new FileInputStream("C:\\Users\\suresh\\eclipse-workspace\\BMO_Test\\src\\test\\java\\files\\Data.properties");
				prop.load(fis);
		    	String browserName = prop.getProperty("browser"); // Parsing browser name thru properties file
		    	
		    	//Chrome driver initialization 
		    	if (browserName.equalsIgnoreCase("chrome")) {		    		
		    		System.setProperty("webdriver.chrome.driver", "C:\\Users\\suresh\\eclipse-workspace\\BMO_Test\\src\\chromedriver.exe");
		    		ChromeOptions options = new ChromeOptions();
			        options.addArguments("--start-maximized");
					options.setExperimentalOption("useAutomationExtension", false);
					driver = new ChromeDriver(options);
		    	}
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				return driver;
			}

		}


	


