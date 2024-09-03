import { supabase } from "@/lib/supabase";

export const getContent = async (day: string) => {
  return await supabase.from("content").select("*").eq("day", day);
};
