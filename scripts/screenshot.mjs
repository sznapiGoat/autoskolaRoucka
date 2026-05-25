import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const OUT = "screenshots";
if (!existsSync(OUT)) await mkdir(OUT);

const browser = await chromium.launch();

async function scrollAndShot(page, selector, filename) {
  const el = await page.$(selector);
  if (el) {
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
  }
  await page.screenshot({ path: `${OUT}/${filename}` });
}

// Desktop
const desktop = await browser.newPage();
await desktop.setViewportSize({ width: 1440, height: 900 });
await desktop.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
await desktop.waitForTimeout(1500);

await desktop.screenshot({ path: `${OUT}/desktop-hero.png` });
await scrollAndShot(desktop, "#kurzy", "desktop-courses.png");
await scrollAndShot(desktop, "#postup", "desktop-process.png");
await scrollAndShot(desktop, "#vraceni-rp", "desktop-vraceni.png");
await scrollAndShot(desktop, "#cenik", "desktop-pricing.png");

// Scroll to reviews (no id - grab by h2 text)
await desktop.evaluate(() => {
  const h2 = [...document.querySelectorAll("h2")].find(el => el.textContent?.includes("absolventi"));
  h2?.scrollIntoView();
});
await desktop.waitForTimeout(600);
await desktop.screenshot({ path: `${OUT}/desktop-reviews.png` });

await scrollAndShot(desktop, "#prihlaseni", "desktop-form.png");
await scrollAndShot(desktop, "#kontakt", "desktop-contact.png");

// Full page
await desktop.evaluate(() => window.scrollTo(0, 0));
await desktop.waitForTimeout(300);
await desktop.screenshot({ path: `${OUT}/desktop-full.png`, fullPage: true });

// Mobile
const mobile = await browser.newPage();
await mobile.setViewportSize({ width: 390, height: 844 });
await mobile.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
await mobile.waitForTimeout(1500);
await mobile.screenshot({ path: `${OUT}/mobile-hero.png` });

// Scroll through entire page to trigger whileInView animations
const pageHeight = await mobile.evaluate(() => document.documentElement.scrollHeight);
const step = 400;
for (let y = 0; y < pageHeight; y += step) {
  await mobile.evaluate((yPos) => window.scrollTo(0, yPos), y);
  await mobile.waitForTimeout(120);
}
await mobile.evaluate(() => window.scrollTo(0, 0));
await mobile.waitForTimeout(400);
await mobile.screenshot({ path: `${OUT}/mobile-full.png`, fullPage: true });

const overflow = await mobile.evaluate(() =>
  document.documentElement.scrollWidth - document.documentElement.clientWidth
);
const minFont = await mobile.evaluate(() => {
  let min = Infinity;
  for (const el of document.querySelectorAll("*")) {
    const fs = parseFloat(window.getComputedStyle(el).fontSize);
    if (fs > 0 && fs < min) min = fs;
  }
  return min;
});
const h1 = await mobile.evaluate(() => {
  const el = document.querySelector("h1");
  return el ? { fontSize: window.getComputedStyle(el).fontSize } : null;
});

console.log(`Mobile overflow: ${overflow}px | Min font: ${minFont}px | H1: ${h1?.fontSize}`);
await browser.close();
console.log("Done →", OUT);
