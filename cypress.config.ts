import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 10000,
  waitForAnimations: true,
  retries: 4,
  e2e: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
