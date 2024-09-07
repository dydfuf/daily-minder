import { supabase } from "@/lib/supabase";

interface GetContentParams {
  day: string;
}

export const getContent = async ({ day }: GetContentParams) => {
  return await supabase.from("content").select("*").eq("day", day);
};
