import { useEffect, useState } from "react";
import { Calendar } from "../ui/calendar";
import { useNavigate } from "@tanstack/react-router";
import { format } from "date-fns";

export default function GlobalCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const navigate = useNavigate({
    from: "/daily",
  });

  useEffect(() => {
    if (!date) {
      return;
    }

    navigate({
      search: {
        today: format(date, "yyyy-MM-dd"),
      },
    });
  }, [date, navigate]);

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
