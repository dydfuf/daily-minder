import { supabase } from "@/lib/supabase";
import { JSONContent } from "novel";

interface UpdateContentParams {
  day: string;
  content: JSONContent;
}

export const updateContent = async ({ day, content }: UpdateContentParams) => {
  return await supabase.from("content").update({ content }).eq("day", day);
};
