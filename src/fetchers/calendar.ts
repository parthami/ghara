import { google } from "googleapis";

export type EventSchema = {
  summary: string;
  start?: string;
  location?: string;
};

const NO_UPCOMING_EVENTS_RESPONSE = {
  summary: "No upcoming events found.",
  start: undefined,
  location: undefined,
};

export async function getCalenderData(): Promise<EventSchema> {
  try {
    const auth = new google.auth.JWT(
      process.env.SERVICE_ACCOUNT_EMAIL,
      undefined,
      process.env.SERVICE_ACCOUNT_PRIVATE_KEY,
      ["https://www.googleapis.com/auth/calendar.readonly"], // Scopes for read-only access
      undefined,
    );

    const calendar = google.calendar({ version: "v3", auth });

    const res = await calendar.events.list({
      calendarId: process.env.CALENDAR_ID,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    });

    const events = res.data.items;

    if (!events || !events[0] || events.length === 0) {
      return NO_UPCOMING_EVENTS_RESPONSE;
    }

    return {
      summary: events[0].summary ?? "",
      start: events[0].start?.date ?? "",
      location: events[0].location ?? "",
    };
  } catch (error) {
    console.error("Error fetching events:", error);
  }

  return NO_UPCOMING_EVENTS_RESPONSE;
}
