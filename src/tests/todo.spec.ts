import { test, expect } from "@playwright/test";
import { Urls } from '../helpers/Urls';

test("basic test", async ({ page }) => {
  await page.goto(Urls.forgotPassword  
  );

  await page.waitForTimeout(1000);

  const title = await page.title();
  expect(title).toBe("Cloudflare | Web Performance & Security");
});
