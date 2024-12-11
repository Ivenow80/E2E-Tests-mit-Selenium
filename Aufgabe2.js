
//Importiere notwendeige Module 
const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

// Beschreibung der Testsuite für Dropdown-Tests
describe("E2E Test für Dropdown-Menü", function () {
  this.timeout(5000); // Timeout für den Test
  let driver;
  // Vor jedem Test: Browser starten und Seite laden
  before(async function () {
    // Browser starten
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://seleniumbase.io/demo_page");
  });
 // Nach jedem Test: Browser schließen
  after(async function () {
    // Browser schließen
    await driver.quit();
  });

  it("Aufgabe 2: Dropdown-Option auswählen", async function () {
    // 1. Dropdown-Button finden
    const dropdownButton = await driver.findElement(
      By.xpath("//div[@id='myDropdown']")
    );
    const actions = driver.actions({ async: true });

    // 2. Maus über das Dropdown-Menü bewegen
    await actions.move({ origin: dropdownButton }).perform();

    // 3. Dropdown-Option "Link One" auswählen
    const dropdownOption = await driver.findElement(
      By.xpath("//a[@id='dropOption1']")
    );
    await dropdownOption.click();

    // 4. Überprüfen, ob "Link One Selected" angezeigt wird
    const resultText = await driver
      .findElement(By.xpath("//h3[text()='Link One Selected']"))
      .getText();
    assert.strictEqual(
      resultText,
      "Link One Selected",
      "Die Dropdown-Auswahl hat nicht funktioniert."
    );
  });
});
