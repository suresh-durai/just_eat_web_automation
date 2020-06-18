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
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cSearch\nSearch\u003e but was:\u003cTASKUS PAPA JOHNS\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:81)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:87)\r\n\tat stepDefinitions.Step_definition.user_search_for_something_restaurant_in_the_available_search_result(Step_definition.java:66)\r\n\tat ✽.User search for \"TASKUS PAPA JOHNS\" restaurant in the available search result(file:src/test/java/features/Find_Restaurants.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});