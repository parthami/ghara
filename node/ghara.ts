 import {generateImage} from "./generateImage"

Bun.cron("5 * * * *",
  async () => {
    console.log("[CRON] Starting generate image job...");
    await generateImage()
  },
);

console.log("Ghara started with active Bun cron schedule.");

generateImage()