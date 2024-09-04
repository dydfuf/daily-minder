import { useState } from "react";
import { Calendar } from "../ui/calendar";

export default function GlobalCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="p-8 border shadow">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
    </div>
  );
}
