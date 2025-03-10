import puppeteer from "puppeteer";
import { Jimp } from "jimp";
import express from "express";
import { ip } from "address";

const app = express();
const PORT = 8080;

app.get("/", async (req, res) => {
  try {
    console.log("launching browser");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const website_url = "http://localhost:5173/";

    console.log("taking screenshot");
    await page.goto(website_url, { waitUntil: "networkidle0" });
    await page.setViewport({ width: 800, height: 480 });
    await page.screenshot({ path: "screenshot.png" });

    console.log("converting screenshot");
    const image = await Jimp.read("./screenshot.png");
    await image.write("out.bmp");

    await browser.close();

    res.sendFile("out.bmp", { root: "." });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Express server listening on port http://localhost:${PORT}`);
  console.log(`Shareable LAN URL: http://${ip()}:${PORT}`);
});
