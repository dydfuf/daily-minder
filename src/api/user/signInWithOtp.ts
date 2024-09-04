import { supabase } from "@/lib/supabase";

interface SignInWithOtpParams {
  email: string;
}

export async function signInWithOtp({ email }: SignInWithOtpParams) {
  return await supabase.auth.signInWithOtp({ email });
}
