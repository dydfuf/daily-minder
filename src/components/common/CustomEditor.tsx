import { JSONContent } from "novel";
import { useState } from "react";
import Editor from "../editor/advanced-editor";

export function CustomEditor() {
  const [value, setValue] = useState<JSONContent>({});

  return <Editor initialValue={value} onChange={setValue} />;
}
