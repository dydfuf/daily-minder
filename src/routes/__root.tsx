import { signOut } from "@/api/user/signOut";
import { Button } from "@/components/ui/button";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/instant" className="[&.active]:font-bold">
          Instant
        </Link>
        <Link to="/editor" className="[&.active]:font-bold">
          Editor
        </Link>
        <Button onClick={signOut}>Sign Out</Button>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
