import { supabase } from "@/lib/supabase";

interface VerifyOtpParams {
  email: string;
  token: string;
}

export async function verifyOtp({ email, token }: VerifyOtpParams) {
  return await supabase.auth.verifyOtp({ email, token, type: "email" });
}
