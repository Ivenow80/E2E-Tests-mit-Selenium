//Importiere notwendige Module
const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");
// Beschreibung der Testsuite
describe("E2E Test für Button-Klick", function () {
  this.timeout(10000); // Timeout für den Test
  let driver;

  before(async function () {
    // Browser starten und Seite laden
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://seleniumbase.io/demo_page");
  });

  after(async function () {
    // Browser schließen
    await driver.quit();
  });

  it("Soll den Buttontext nach Klick ändern", async function () {
    // 1. Button finden
    const button = await driver.findElement(By.xpath("//*[@id='myButton']"));

    // 2. Ursprünglichen Text validieren
    const initialText = await button.getText();
    assert.strictEqual(
      initialText,
      "Click Me (Green)",
      `Der ursprüngliche Buttontext ist nicht korrekt. Expected: "Click Me (Green)", Actual: "${initialText}"`
    );

    // 3. Button klicken
    await button.click();

    // 4. Text des Buttons nach Klick überprüfen
    const newText = await button.getText();
    assert.strictEqual(
      newText,
      "Click Me (Purple)",
      `Der Buttontext hat sich nicht korrekt geändert. Expected: "Click Me (Purple)", Actual: "${newText}"`
    );
  });
});
