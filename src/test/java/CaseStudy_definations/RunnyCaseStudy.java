package CaseStudy_definations;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions(features="C:\\Users\\training_h2a.06.15\\Desktop\\Selenium_workplace\\CaseStudy_Cucumber\\Cucumber_CaseStudy\\Scenario1.feature",tags= {"@Smoke"},glue="CaseStudy_definations",plugin= {"html:target/cucumber-htmlreport.html","json:target/cucumber.json"})
public class RunnyCaseStudy {
}
