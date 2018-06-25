import * as puppeteer from 'puppeteer';
import * as creds from '../config/credentials';

export async function browser (): Promise<puppeteer.Page> {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080});
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36');
    await page.goto('https://www.instagram.com/accounts/login/');
    await page.waitFor('form div div div input[name="username"]');
    await page.type('form div div div input[name="username"]', creds.username, {delay: 67});
    await page.type('form div div div input[name="password"]', creds.password, {delay: 91});
    await page.click('form button');
    await page.waitFor('span.coreSpriteSearchIcon');

    return Promise.resolve(page);
}
