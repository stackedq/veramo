module.exports = {
  preset: 'jest-puppeteer',
  rootDir: 'headless-tests',
  testRegex: './*\\.test\\.(js|tsx?)$',
  globalSetup: 'jest-environment-puppeteer/setup',
  globalTeardown: 'jest-environment-puppeteer/teardown',
  testEnvironment: 'jest-environment-puppeteer',
  testTimeout: 3 * 60 * 1000,
  testRunner: 'jest-jasmine2',
}
