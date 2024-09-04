import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster as SonnerToaster } from "../components/ui/sonner";
import { Toaster } from "../components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <TanStackRouterDevtools />
        <SonnerToaster />
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  ),
});
