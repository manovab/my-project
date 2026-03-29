import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',   // ✅ ONLY look here

  testIgnore: ['**/src/**'],
  
  use: {
    baseURL: 'http://localhost:3000',
  },

  webServer: {
    command: 'npm start',
    port: 3000,
    reuseExistingServer: true,
  },
});