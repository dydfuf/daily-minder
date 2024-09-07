import { useState } from "react";
import { LoginForm, LoginFormSchemaType } from "./_component/LoginForm";
import { OtpForm, OtpFormSchemaType } from "./_component/OtpForm";
import { useMutation } from "@tanstack/react-query";
import { signInWithOtp } from "@/api/user/signInWithOtp";
import { verifyOtp } from "@/api/user/verifyOtp";
import { useRouter } from "@tanstack/react-router";
import { Route } from "@/routes/login";

export default function LoginPage() {
  const [emailSent, setEmailSent] = useState(false);
  const [sentedEmail, setSentedEmail] = useState<string | null>(null);
  const router = useRouter();
  const { redirect } = Route.useSearch();

  const { mutateAsync: sendOtpAsync, isPending: isLoadingSendOtp } =
    useMutation({
      mutationFn: ({ email }: LoginFormSchemaType) => {
        return signInWithOtp({ email });
      },
    });

  const { mutateAsync: varifyOtpAsync, isPending: isLoadingVerifyOtp } =
    useMutation({
      mutationFn: ({ pin }: OtpFormSchemaType) => {
        if (!sentedEmail) {
          throw new Error("이메일이 없습니다.");
        }
        return verifyOtp({ email: sentedEmail, token: pin });
      },
    });

  const onSubmitLoginForm = async (value: LoginFormSchemaType) => {
    await sendOtpAsync(value);
    setEmailSent(true);
    setSentedEmail(value.email);
  };

  const onSubmitOtpForm = async (value: OtpFormSchemaType) => {
    await varifyOtpAsync(value);
    router.navigate({ to: redirect });
  };

  if (!emailSent) {
    return (
      <LoginForm onSubmit={onSubmitLoginForm} isLoading={isLoadingSendOtp} />
    );
  }

  return <OtpForm onSubmit={onSubmitOtpForm} isLoading={isLoadingVerifyOtp} />;
}
