import { createContent } from "@/api/createContent";
import { getContent } from "@/api/getContent";
import { isAuthenticated } from "@/lib/utils";
import EditorPage from "@/pages/editor/EditorPage";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { format } from "date-fns";

export const Route = createFileRoute("/editor")({
  beforeLoad: async ({ location }) => {
    if (!(await isAuthenticated())) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  loader: async () => {
    const today = format(new Date(), "yyyy-MM-dd");
    const { data } = await getContent(today);
    let result = data?.[0]?.content;

    if (!data || data.length === 0) {
      await createContent({ day: today });
      result = {};
    }

    return result;
  },
  component: () => <EditorPage />,
});
