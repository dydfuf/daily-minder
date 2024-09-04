import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/_auth/daily")({
  component: () => <div>Hello /_auth/daily!</div>,
});
