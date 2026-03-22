// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // ✅ UPDATED REPORTER CONFIG
  reporter: [
    ['line'],                  // console output
    ['html'],                  // Playwright HTML report
    ['allure-playwright']      // Allure report
  ],

  use: {
    headless: false,

    trace: 'on-first-retry',

    // ✅ ADD THESE FOR ALLURE (important)
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});