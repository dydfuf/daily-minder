import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster as SonnerToaster } from "../components/ui/sonner";
import { Toaster } from "../components/ui/toaster";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <SonnerToaster />
      <Toaster />
    </>
  ),
});
