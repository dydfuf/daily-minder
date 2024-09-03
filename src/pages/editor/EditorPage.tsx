import { CustomEditor } from "@/components/common/CustomEditor";
import { Route } from "@/routes/editor";

export default function EditorPage() {
  const content = Route.useLoaderData();

  return <CustomEditor initialContent={content} />;
}
