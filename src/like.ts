import { Page } from 'puppeteer';

export async function like (page: Page, id: string) {
    await page.goto(`https://www.instagram.com/p/${id}/`);
    await page.waitFor('body section section');
    await page.waitFor(10000);
    await page.click('body section section a[role="button"] .coreSpriteHeartOpen');
    console.log(`Liked post https://www.instagram.com/p/${id}/`)
}
