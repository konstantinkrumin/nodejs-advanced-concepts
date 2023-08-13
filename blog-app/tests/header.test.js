const puppeteer = require('puppeteer');

let browser, page;

beforeEach(async () => {
	browser = await puppeteer.launch({
		headless: false
	});
	page = await browser.newPage();

	await page.goto('localhost:3000');
});

afterEach(async () => {
	await browser.close();
});

test('The header has the correct text', async () => {
	const text = await page.$eval('a.brand-logo', el => el.innerHTML);

	expect(text).toEqual('Blogster');
});

test('Clicking login starts OAuth flow', async () => {
	await page.click('.right a');

	const url = await page.url();

	expect(url).toMatch(/accounts\.google\.com/);
});

test('When signed in, shows logout button', async () => {
	const id = '64cd783353d1530f94ed5586';

	await page.setCookie({ name: 'session', value: sessionString });
	await page.setCookie({ name: 'session.sig', value: sig });
	await page.goto('localhost:3000');
	await page.waitFor('a[href="/auth/logout"]');

	const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);

	expect(text).toEqual('Logout');
});
