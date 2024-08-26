import InstantPage from "@/pages/instant/InstantPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/instant")({
  component: () => <InstantPage />,
});
