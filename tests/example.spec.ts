import { test, expect } from '@playwright/test';
import { addTestResult } from "../testrailReporter"

test('C47 has title', async ({ page }) => {

  const runId = 16;   // your TestRail Run ID
  const caseId = 47; // your TestRail Case ID

  try{
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await addTestResult(runId, caseId, 1, "Login passed successfully");
  }
  catch(error){
     await addTestResult(runId, caseId, 5, 'Test failed: ${error}');
    throw error;

  }
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});