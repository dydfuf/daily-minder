import { JSONContent } from "novel";
import { useCallback } from "react";
import Editor from "../editor/advanced-editor";
import { format } from "date-fns";
import { updateContent } from "@/api/updateContent";

interface Props {
  initialContent: JSONContent;
}

export function CustomEditor({ initialContent }: Props) {
  const today = format(new Date(), "yyyy-MM-dd");

  const onChange = useCallback(
    async (value: JSONContent) => {
      const { error } = await updateContent({ day: today, content: value });

      if (error) {
        console.error("Error saving content", error);
      }
    },
    [today]
  );

  return <Editor initialValue={initialContent} onChange={onChange} />;
}
