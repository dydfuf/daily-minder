import { supabase } from "@/lib/supabase";

export const getUser = async () => {
  return await supabase.auth.getUser();
};
