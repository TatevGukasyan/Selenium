const {Builder } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();

const driver = new Builder().forBrowser("firefox").build();

driver.get("https://demoqa.com/text-box");