import { generateImage } from "./generateImage";

if (process.env.ENVIRONMENT !== "DEV") {
	Bun.cron("5 * * * *", async () => {
		console.log("[CRON] Starting generate image job...");
		await generateImage();
	});
}

console.log("Ghara started with active Bun cron schedule.");

generateImage();
