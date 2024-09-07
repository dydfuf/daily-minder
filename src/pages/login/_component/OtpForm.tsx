import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const OtpFormSchema = z.object({
  pin: z.string().min(6, {
    message: "OTP는 6자리 숫자로 입력해주세요.",
  }),
});

export type OtpFormSchemaType = z.infer<typeof OtpFormSchema>;

interface OtpFormProps {
  onSubmit: (value: OtpFormSchemaType) => void;
  isLoading: boolean;
}

export function OtpForm({ onSubmit, isLoading }: OtpFormProps) {
  const form = useForm<OtpFormSchemaType>({
    resolver: zodResolver(OtpFormSchema),
    defaultValues: {
      pin: "",
    },
  });

  return (
    <div className="flex w-full h-full items-center justify-center">
      <Card className="w-full max-w-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="text-2xl">OTP</CardTitle>
              <CardDescription>
                이메일로 전송된 인증 코드를 입력해주세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        {...field}
                        autoFocus
                        containerClassName="justify-center"
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit" loading={isLoading}>
                인증하기
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
