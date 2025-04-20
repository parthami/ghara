"use client";

import { EventSchema } from "../../fetchers/calendar.ts";

type CalendarPanelProps = {
  CalendarData: EventSchema;
};

const CalendarPanel = ({ CalendarData }: CalendarPanelProps) => (
  <div className="border-2 border-dashed border-gray-800 flex">
    <div className="m-auto flex flex-col text-center">
      <span className="text-4xl">{CalendarData.summary}</span>
      <span className="">{CalendarData.start}</span>
    </div>
  </div>
);

export default CalendarPanel;
