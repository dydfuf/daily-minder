import { supabase } from "@/lib/supabase";

interface CreateContentParams {
  day: string;
}

export const createContent = async ({ day }: CreateContentParams) => {
  return await supabase.from("content").insert([{ day, content: {} }]);
};
