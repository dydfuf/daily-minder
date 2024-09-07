import LoginPage from "@/pages/login/LoginPage";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { fallback, zodSearchValidator } from "@tanstack/router-zod-adapter";

const LoginPageSearchParamSchema = z.object({
  redirect: fallback(z.string(), "/").default("/"),
});

export const Route = createFileRoute("/login")({
  validateSearch: zodSearchValidator(LoginPageSearchParamSchema),
  component: () => <LoginPage />,
});
