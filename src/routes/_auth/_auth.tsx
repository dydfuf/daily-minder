import CommonLayout from "@/components/common/CommonLayout";
import { isAuthenticated } from "@/lib/utils";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/_auth")({
  beforeLoad: async ({ location }) => {
    if (!(await isAuthenticated())) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: () => (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  ),
});
