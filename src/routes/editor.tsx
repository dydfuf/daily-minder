import { CustomEditor } from "@/components/common/CustomEditor";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/editor")({
  component: () => <CustomEditor />,
});
