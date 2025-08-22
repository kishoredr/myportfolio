import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test('should navigate to all main pages', async ({ page }) => {
    // Navigate to home page
    await page.goto('/');
    await expect(page).toHaveTitle(/DevOps Engineer Portfolio/);

    // Test navigation to About page
    await page.click('text=About');
    await expect(page).toHaveURL(/.*about/);
    await expect(page.locator('h1')).toContainText('About Me');

    // Test navigation to Skills page
    await page.click('text=Skills');
    await expect(page).toHaveURL(/.*skills/);
    await expect(page.locator('h1')).toContainText('Skills & Expertise');

    // Test navigation to Portfolio page
    await page.click('text=Portfolio');
    await expect(page).toHaveURL(/.*portfolio/);
    await expect(page.locator('h1')).toContainText('Portfolio');

    // Test navigation to Experience page
    await page.click('text=Experience');
    await expect(page).toHaveURL(/.*experience/);
    await expect(page.locator('h1')).toContainText('Professional Experience');

    // Test navigation to Open Source page
    await page.click('text=Open Source');
    await expect(page).toHaveURL(/.*open-source/);
    await expect(page.locator('h1')).toContainText('Open Source');

    // Test navigation to Contact page
    await page.click('text=Contact');
    await expect(page).toHaveURL(/.*contact/);
    await expect(page.locator('h1')).toContainText("Let's Connect");
  });

  test('should have working theme toggle', async ({ page }) => {
    await page.goto('/');
    
    // Check if theme toggle button exists
    const themeToggle = page.locator('[data-testid="theme-toggle"]').or(page.locator('button[aria-label*="theme"]'));
    await expect(themeToggle).toBeVisible();

    // Click theme toggle
    await themeToggle.click();
    
    // Verify theme toggle functionality (basic check)
    await expect(themeToggle).toBeVisible();
  });

  test('should have responsive navigation', async ({ page }) => {
    // Test mobile navigation
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check if mobile menu button is visible on small screens
    const mobileMenuButton = page.locator('button[aria-label*="menu"]').or(page.locator('button:has([data-testid="menu"])'));
    await expect(mobileMenuButton).toBeVisible();

    // Test mobile menu functionality
    await mobileMenuButton.click();
    
    // Check if mobile menu items are visible
    const mobileMenu = page.locator('nav').or(page.locator('[role="navigation"]'));
    await expect(mobileMenu).toBeVisible();
  });

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');
    
    // Check if main navigation has proper ARIA labels
    const nav = page.locator('nav[role="navigation"]').or(page.locator('nav'));
    await expect(nav).toBeVisible();
    
    // Check if navigation links have proper text
    const navLinks = page.locator('nav a');
    await expect(navLinks).toHaveCount(7); // Home, About, Skills, Portfolio, Experience, Open Source, Contact
    
    // Verify all navigation links have text content
    for (const link of await navLinks.all()) {
      const text = await link.textContent();
      expect(text?.trim()).toBeTruthy();
    }
  });
});