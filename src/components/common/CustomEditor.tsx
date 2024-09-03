import { JSONContent } from "novel";
import { useState } from "react";
import Editor from "../editor/advanced-editor";
import { format } from "date-fns";
import { updateContent } from "@/api/updateContent";

interface Props {
  initialContent: JSONContent;
}

export function CustomEditor({ initialContent }: Props) {
  const [value, setValue] = useState<JSONContent>(initialContent);

  const today = format(new Date(), "yyyy-MM-dd");

  const onChange = async (value: JSONContent) => {
    setValue(value);
    const { error } = await updateContent({ day: today, content: value });

    if (error) {
      console.error("Error saving content", error);
    }
  };

  return <Editor initialValue={value} onChange={onChange} />;
}
