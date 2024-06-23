import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("https://example.com");
  const title = await page.title();
  const logoName = await page.locator("sss")
  expect(title).toBe("Example Domain");
});
