import { supabase } from "@/lib/supabase";

export const signOut = async () => {
  return await supabase.auth.signOut();
};
