import { supabase } from "@/lib/supabase";
import { JSONContent } from "novel";

interface UpdateContentParams {
  day: string;
  content: JSONContent;
}

export const updateContent = async ({ day, content }: UpdateContentParams) => {
  return await supabase.from("content").upsert({ content }).eq("day", day);
};
