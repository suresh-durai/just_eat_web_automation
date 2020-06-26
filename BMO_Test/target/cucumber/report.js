$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Find_Restaurants.feature");
formatter.feature({
  "name": "Use the website (http://www.just-eat.co.uk/) to find restaurants",
  "description": "  So that I can order food\n  As a hungry customer\n\tI want to be able to find restaurants in my area",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search for restaurants in an area with a valid postal code",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User navigate to the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_definition.user_navigate_to_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"AR51 1AA\"",
  "keyword": "And "
});
formatter.match({
  "location": "Step_definition.user_enter_something(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027postcode\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SURESH-PC\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\suresh\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:59930}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 61e1ecf021583b8b2858651639feb457\n*** Element info: {Using\u003dname, value\u003dpostcode}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pageObjects.Home_Page.getpostCode(Home_Page.java:24)\r\n\tat stepDefinitions.Step_definition.user_enter_something(Step_definition.java:34)\r\n\tat ✽.User enter \"AR51 1AA\"(file:src/test/java/features/Find_Restaurants.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User search for restaurants",
  "keyword": "When "
});
formatter.match({
  "location": "Step_definition.user_search_for_restaurants()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see some restaurants in the entered postalcode",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_definition.user_should_see_some_restaurants_in_the_entered_postalcode()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for restaurants in an area with an invalid postal code",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User navigate to the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_definition.user_navigate_to_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"AR51 1A\"",
  "keyword": "And "
});
formatter.match({
  "location": "Step_definition.user_enter_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User search for restaurants",
  "keyword": "When "
});
formatter.match({
  "location": "Step_definition.user_search_for_restaurants()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see postal code error on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_definition.user_should_see_postal_code_error_on_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for a specific restaurant in the available search result",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User navigate to the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_definition.user_navigate_to_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"AR51 1AA\"",
  "keyword": "And "
});
formatter.match({
  "location": "Step_definition.user_enter_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User search for restaurants",
  "keyword": "When "
});
formatter.match({
  "location": "Step_definition.user_search_for_restaurants()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see some restaurants in the entered postalcode",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_definition.user_should_see_some_restaurants_in_the_entered_postalcode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User search for \"TASKUS PAPA JOHNS\" restaurant in the available search result",
  "keyword": "And "
});
formatter.match({
  "location": "Step_definition.user_search_for_something_restaurant_in_the_available_search_result(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cSearch\nSearch\u003e but was:\u003cTASKUS PAPA JOHNS\u003e\r\n\tat org.testng.AssertJUnit.assertEquals(AssertJUnit.java:82)\r\n\tat org.testng.AssertJUnit.assertEquals(AssertJUnit.java:87)\r\n\tat stepDefinitions.Step_definition.user_search_for_something_restaurant_in_the_available_search_result(Step_definition.java:66)\r\n\tat ✽.User search for \"TASKUS PAPA JOHNS\" restaurant in the available search result(file:src/test/java/features/Find_Restaurants.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});