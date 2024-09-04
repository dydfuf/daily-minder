import { signInWithOtp } from "@/api/user/signInWithOtp";
import { verifyOtp } from "@/api/user/verifyOtp";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export default function LoginPage() {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  if (!emailSent) {
    return (
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          onClick={async () => {
            await signInWithOtp({ email });
            setEmailSent(true);
          }}
        >
          Send Email
        </Button>
      </div>
    );
  }

  return (
    <div>
      <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <Button
        onClick={async () => {
          await verifyOtp({ email, token: otp });
          navigate({ to: "/" });
        }}
      >
        Verify OTP
      </Button>
    </div>
  );
}
