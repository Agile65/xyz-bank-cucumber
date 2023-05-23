$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bank.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Test Functionality",
  "description": "",
  "id": "bank-test-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4788175000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BankSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 118481200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Customer should deposit money successfully",
  "description": "",
  "id": "bank-test-functionality;customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I click on \u0027Customer Login\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I search customer",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on \u0027Login\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on \u0027Deposit\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on \u0027Deposit\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I can see message \u0027Deposit Successful\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "BankSteps.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 369640200,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iSearchCustomer()"
});
formatter.result({
  "duration": 412829900,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 89049200,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iClickOnDepositTab()"
});
formatter.result({
  "duration": 275313000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "BankSteps.iEnterAmount(String)"
});
formatter.result({
  "duration": 294214400,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iClickOnDepositButton()"
});
formatter.result({
  "duration": 95091300,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iCanSeeMessageDepositSuccessful()"
});
formatter.result({
  "duration": 63746500,
  "status": "passed"
});
formatter.after({
  "duration": 103300,
  "status": "passed"
});
formatter.before({
  "duration": 3107061800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BankSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 44400,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Customer should withdraw money successfully",
  "description": "",
  "id": "bank-test-functionality;customer-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "I click on \u0027Customer Login\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I search customer",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on \u0027Login\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on \u0027Withdrawal\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter amount \"50\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on \u0027Withdraw\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I can see message \u0027Transaction Successful\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "BankSteps.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 519721400,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iSearchCustomer()"
});
formatter.result({
  "duration": 468318200,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 127352800,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iClickOnWithdrawalTab()"
});
formatter.result({
  "duration": 535340200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 16
    }
  ],
  "location": "BankSteps.iEnterAmount(String)"
});
formatter.result({
  "duration": 78305900,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iClickOnWithdrawButton()"
});
formatter.result({
  "duration": 116522000,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iCanSeeMessageTransactionSuccessful()"
});
formatter.result({
  "duration": 65116900,
  "status": "passed"
});
formatter.after({
  "duration": 53300,
  "status": "passed"
});
});