import CommonLayout from "@/components/common/CommonLayout";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <CommonLayout>
        <Outlet />
      </CommonLayout>
      <TanStackRouterDevtools />
    </>
  ),
});
