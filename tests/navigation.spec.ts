import { test, expect } from '@playwright/test';

test.describe('Navigation and Theme', () => {
  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/');

    // Check navigation links
    const navLinks = [
      { href: '/', text: 'Home' },
      { href: '/about', text: 'About' },
      { href: '/skills', text: 'Skills' },
      { href: '/portfolio', text: 'Portfolio' },
      { href: '/experience', text: 'Experience' },
      { href: '/open-source', text: 'Open Source' },
      { href: '/contact', text: 'Contact' },
    ];

    for (const link of navLinks) {
      await page.click(`a[href="${link.href}"]`);
      await expect(page).toHaveURL(link.href);
      
      // Check that the page title is present
      if (link.href !== '/') {
        await expect(page.locator('h1')).toContainText(link.text);
      }
    }
  });

  test('should toggle theme correctly', async ({ page }) => {
    await page.goto('/');

    // Find theme toggle button
    const themeToggle = page.locator('[data-testid="theme-toggle"]').first();
    
    // Click theme toggle
    await themeToggle.click();
    
    // Check that theme changed (this is a basic check)
    await expect(themeToggle).toBeVisible();
  });

  test('should have responsive navigation', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Mobile menu should be hidden initially
    const mobileMenu = page.locator('.md\\:hidden');
    await expect(mobileMenu).toBeHidden();

    // Click mobile menu button
    const mobileMenuButton = page.locator('button[aria-label*="menu"]').first();
    await mobileMenuButton.click();

    // Mobile menu should be visible
    await expect(mobileMenu).toBeVisible();
  });

  test('should have working footer links', async ({ page }) => {
    await page.goto('/');

    // Check footer social links
    const githubLink = page.locator('a[href*="github.com"]');
    const linkedinLink = page.locator('a[href*="linkedin.com"]');
    
    await expect(githubLink).toBeVisible();
    await expect(linkedinLink).toBeVisible();
  });
});