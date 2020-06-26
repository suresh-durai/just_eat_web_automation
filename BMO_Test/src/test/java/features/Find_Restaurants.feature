Feature: Use the website (http://www.just-eat.co.uk/) to find restaurants
  So that I can order food
  As a hungry customer
	I want to be able to find restaurants in my area

Scenario: Search for restaurants in an area with a valid postal code
	Given User navigate to the landing page
	And User enter "AR51 1AA"	 
	When User search for restaurants
	Then User should see some restaurants in the entered postalcode
	
Scenario: Search for restaurants in an area with an invalid postal code
	Given User navigate to the landing page
	And User enter "AR51 1A"	 
	When User search for restaurants
	Then User should see postal code error on the page  

Scenario: Search for a specific restaurant in the available search result
	Given User navigate to the landing page
	And User enter "AR51 1AA"	 
	When User search for restaurants
	Then User should see some restaurants in the entered postalcode
	And User search for "TASKUS PAPA JOHNS" restaurant in the available search result

	

	
