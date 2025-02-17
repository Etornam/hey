import { APP_NAME } from '@hey/data/constants';
import { expect, test } from '@playwright/test';
import { WEB_BASE_URL } from 'tests/constants';

test.beforeEach(async ({ page }) => {
  await page.goto(WEB_BASE_URL);
});

test('should have page title', async ({ page }) => {
  await expect(page).toHaveTitle(APP_NAME);
});

test('should have hero', async ({ page }) => {
  await expect(page.getByTestId('home-hero')).toContainText(
    `Welcome to ${APP_NAME},a social network built on Lens Protocol`
  );
});

test('should have explore feed', async ({ page }) => {
  await expect(page.getByTestId('explore-feed')).toBeVisible();
});
