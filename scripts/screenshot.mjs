import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const OUT = "screenshots";
if (!existsSync(OUT)) await mkdir(OUT);

const browser = await chromium.launch();

// Desktop
const desktop = await browser.newPage();
await desktop.setViewportSize({ width: 1440, height: 900 });
await desktop.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
await desktop.waitForTimeout(2000);
await desktop.screenshot({ path: `${OUT}/desktop-full.png`, fullPage: true });
await desktop.screenshot({ path: `${OUT}/desktop-hero.png` });

// Scroll to sections
await desktop.evaluate(() => window.scrollTo(0, 700));
await desktop.waitForTimeout(300);
await desktop.screenshot({ path: `${OUT}/desktop-stats.png` });

await desktop.evaluate(() => window.scrollTo(0, 1400));
await desktop.waitForTimeout(300);
await desktop.screenshot({ path: `${OUT}/desktop-courses.png` });

// Mobile
const mobile = await browser.newPage();
await mobile.setViewportSize({ width: 390, height: 844 });
await mobile.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
await mobile.waitForTimeout(2000);
await mobile.screenshot({ path: `${OUT}/mobile-hero.png` });
await mobile.screenshot({ path: `${OUT}/mobile-full.png`, fullPage: true });

// Check overflow
const overflow = await mobile.evaluate(() => {
  return document.documentElement.scrollWidth - document.documentElement.clientWidth;
});
console.log(`Mobile horizontal overflow: ${overflow}px`);

// Check min font size
const minFont = await mobile.evaluate(() => {
  const els = document.querySelectorAll("*");
  let min = Infinity;
  for (const el of els) {
    const fs = parseFloat(window.getComputedStyle(el).fontSize);
    if (fs > 0 && fs < min) min = fs;
  }
  return min;
});
console.log(`Smallest font size: ${minFont}px`);

// Check H1
const h1 = await mobile.evaluate(() => {
  const el = document.querySelector("h1");
  if (!el) return null;
  const s = window.getComputedStyle(el);
  return { fontSize: s.fontSize, color: s.color };
});
console.log("H1 (mobile):", h1);

await browser.close();
console.log("Screenshots saved to", OUT);
