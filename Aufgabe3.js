// Importiere  notwendigen Module
const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");
// Beschreibung der Testsuite
describe("E2E Test für Textfeld", function () {
  this.timeout(5000); // Timeout für den Test
  let driver;

  before(async function () {
    // Browser starten
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://seleniumbase.io/demo_page");
  });

  after(async function () {
    // Browser schließen
    await driver.quit();
  });

  it("Aufgabe 3: Textfeld ausfüllen", async function () {
    // 1. Textfeld finden
    const textField = await driver.findElement(By.xpath("//input[@id='myTextInput']"));
    const inputText = "Automatisierter Test";

    // 2. Textfeld mit dem Text füllen
    await textField.sendKeys(inputText);

    // 3. Überprüfen, ob der Text korrekt ist
    const fieldValue = await textField.getAttribute("value");
    assert.strictEqual(fieldValue, inputText, "Der eingegebene Text stimmt nicht überein.");
  });
});
