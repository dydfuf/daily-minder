import { useState } from "react";
import { LoginForm, LoginFormSchemaType } from "./_component/LoginForm";
import { OtpForm, OtpFormSchemaType } from "./_component/OtpForm";

export default function LoginPage() {
  const [emailSent, setEmailSent] = useState(false);

  const onSubmitLoginForm = (value: LoginFormSchemaType) => {
    setEmailSent(true);
    console.log(value);
  };

  const onSubmitOtpForm = (value: OtpFormSchemaType) => {
    console.log(value);
  };

  if (!emailSent) {
    return <LoginForm onSubmit={onSubmitLoginForm} />;
  }

  return <OtpForm onSubmit={onSubmitOtpForm} />;
}
