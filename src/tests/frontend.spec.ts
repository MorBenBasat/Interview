import { test, expect } from "@playwright/test";
import { locators, testAdd } from "../pages/frontend";

test.describe("Frontend Calculator Tests", () => {
  for (let i = 0; i < locators.numberButtons.length; i++) {
    const numLocator = locators.numberButtons[i];
    const expectedAddition = ((i + 1) * 2).toString();
    const expectedMultiplication = ((i + 1) * (i + 1)).toString();
    const expectedDivision = "1"; 
    const expectedSubtraction = "0"; 

    test(`Test Calculator Addition ${i + 1} + ${i + 1}`, async ({ page }) => {
      const result = await testAdd(page, numLocator, numLocator, "add");
      expect(result).toBe(expectedAddition);
    });

    test(`Test Calculator Multiplication ${i + 1} * ${i + 1}`, async ({
      page,
    }) => {
      const result = await testAdd(page, numLocator, numLocator, "multiply");
      expect(result).toBe(expectedMultiplication);
    });

    test(`Test Calculator Division ${i + 1} / ${i + 1}`, async ({ page }) => {
      const result = await testAdd(page, numLocator, numLocator, "divide");
      expect(result).toBe(expectedDivision);
    });

    test(`Test Calculator Subtraction ${i + 1} - ${i + 1}`, async ({
      page,
    }) => {
      const result = await testAdd(page, numLocator, numLocator, "minus");
      expect(result).toBe(expectedSubtraction);
    });
  }
});
