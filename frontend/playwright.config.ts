import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',   // ✅ ONLY look here

  testIgnore: ['**/src/**'],
  
  use: {
    baseURL: 'http://localhost:8080',
  },

  webServer: {
    command: 'npm start',
    port: 8080,
    reuseExistingServer: true,
  },
});