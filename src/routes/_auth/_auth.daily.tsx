import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { fallback, zodSearchValidator } from "@tanstack/router-zod-adapter";
import { format } from "date-fns";
import DailyPage from "@/pages/daily/DailyPage";

const today = format(new Date(), "yyyy-MM-dd");

const DailyPageSearchParamSchema = z.object({
  today: fallback(
    z.string().transform((value) => {
      try {
        return format(value, "yyyy-MM-dd");
      } catch {
        return today;
      }
    }),
    today
  ).default(today),
});

export const Route = createFileRoute("/_auth/_auth/daily")({
  validateSearch: zodSearchValidator(DailyPageSearchParamSchema),
  component: () => <DailyPage />,
});
