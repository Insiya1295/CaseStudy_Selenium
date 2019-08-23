$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/training_h2a.06.15/Desktop/Selenium_workplace/CaseStudy_Cucumber/Cucumber_CaseStudy/Scenario1.feature");
formatter.feature({
  "name": "Validation for testme app registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login for testme app",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User launch the site",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters  name \"\u003cusname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters  pas \"\u003cpaswrd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usname",
        "paswrd"
      ]
    },
    {
      "cells": [
        "Lalitha",
        "Password123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login for testme app",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User launch the site",
  "keyword": "Given "
});
formatter.match({
  "location": "Scenario_1.user_launch_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters  name \"Lalitha\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_1.user_enters_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters  pas \"Password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario_1.user_enters_pas(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_1.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Product search and purchase",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Product Search Engine",
  "keyword": "Given "
});
formatter.match({
  "location": "Scenario_1.product_Search_Engine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User proceed towards adding product to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_1.user_proceed_towards_adding_product_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on cart link",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_1.user_click_on_cart_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies the product is correctly added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_1.user_verifies_the_product_is_correctly_added_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on checkout for payment",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_1.user_clicks_on_checkout_for_payment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Review the product and click on proceed to pay",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_1.user_Review_the_product_and_click_on_proceed_to_pay()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the bank of his/her choice",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_1.user_select_the_bank_of_his_her_choice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on continue for further details",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_1.user_clicks_on_continue_for_further_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User give valid credentials according to selected bank",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_1.user_give_valid_credentials_according_to_selected_bank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User than give the required transaction password",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_1.user_than_give_the_required_transaction_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies for the order is confirmed",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario_1.user_verifies_for_the_order_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User moves to cart without adding any item in it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User registered in TestMeApp",
  "keyword": "Given "
});
formatter.match({
  "location": "Scenario_1.user_registered_in_TestMeApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Search for product like headphones",
  "keyword": "When "
});
formatter.match({
  "location": "Scenario_1.user_Search_for_product_like_headphones()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "try to proceed to payment without adding any item in the cart",
  "keyword": "And "
});
formatter.match({
  "location": "Scenario_1.try_to_proceed_to_payment_without_adding_any_item_in_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "TestMe doesn\u0027t display the cart icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenario_1.testme_doesn_t_display_the_cart_icon()"
});
formatter.result({
  "status": "passed"
});
});