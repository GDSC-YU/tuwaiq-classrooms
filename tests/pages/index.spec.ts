import test, { expect } from "@playwright/test";

test("title is correct.", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Tuwaiq Classrooms");
});
