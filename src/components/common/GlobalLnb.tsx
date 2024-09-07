import { HomeIcon } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";

export default function GlobalLnb() {
  return (
    <div className="min-h-full w-16 bg-muted-foreground flex flex-col border-r items-center py-8 gap-4">
      <Button variant="outline" size="icon">
        <HomeIcon />
      </Button>
      <ModeToggle />
    </div>
  );
}
