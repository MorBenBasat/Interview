import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto(
    "https://dash.cloudflare.com/login?_gl=1*13scmcm*_gcl_au*NzYwMTQwMDEwLjE3MTkxNjAxMDk.*_ga*MTA2OTYzOTg2OS4xNzE5MTYwMTA5*_ga_SQCRB0TXZW*MTcxOTE2MDExMC4xLjEuMTcxOTE2MDE1NC4wLjAuMA.."
  );

  await page.waitForTimeout(1000);

  const title = await page.title();
  expect(title).toBe("Cloudflare | Web Performance & Security");
});
