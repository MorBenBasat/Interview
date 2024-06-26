import { Page } from "playwright";

export const locators = {
  numberButtons: [
    "/html/body/div/div/div[2]/button[17]", // Number 1
    "/html/body/div/div/div[2]/button[18]", // Number 2
    "/html/body/div/div/div[2]/button[19]", // Number 3
    "/html/body/div/div/div[2]/button[13]", // Number 4
    "/html/body/div/div/div[2]/button[14]", // Number 5
    "/html/body/div/div/div[2]/button[15]", // Number 6
    "/html/body/div/div/div[2]/button[9]", // Number 7
    "/html/body/div/div/div[2]/button[10]", // Number 8
    "/html/body/div/div/div[2]/button[11]", // Number 9
  ],
  addButton: "/html/body/div/div/div[2]/button[16]", // Addition button
  multiplyBtn: "/html/body/div/div/div[2]/button[12]", // Multiplication button
  divideBtn: "/html/body/div/div/div[2]/button[8]", // Division button
  minusBtn: "/html/body/div/div/div[2]/button[20]", // Minus button
  equalsButton: "/html/body/div/div/div[2]/button[23]", // Equals button
  resultDisplay: "/html/body/div/div/div[1]/div[2]", // Result display element
};

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function testAdd(
  page: Page,
  num1Locator: string,
  num2Locator: string,
  operation: "add" | "multiply" | "divide" | "minus"
): Promise<string> {
  await page.goto("https://icedrone.github.io/qa-interview-frontend/");

  await page.click(`xpath=${num1Locator}`);
  await sleep(100); // Sleep for 100 milliseconds

  switch (operation) {
    case "add":
      await page.click(`xpath=${locators.addButton}`);
      break;
    case "multiply":
      await page.click(`xpath=${locators.multiplyBtn}`);
      break;
    case "divide":
      await page.click(`xpath=${locators.divideBtn}`);
      break;
    case "minus":
      await page.click(`xpath=${locators.minusBtn}`);
      break;
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }

  await sleep(100);
  await page.click(`xpath=${num2Locator}`);
  await sleep(100);
  await page.click(`xpath=${locators.equalsButton}`);
  await sleep(100);
  const resultText = await page.innerText(`xpath=${locators.resultDisplay}`);
  return resultText;
}
