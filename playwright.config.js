// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 40*1000,
  reporter: 'html',
  expect : {
     timeout: 40*1000, 
  },
  use: {
   browserName : 'firefox',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  
  },

});

