import { HomeIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function GlobalLnb() {
  return (
    <div className="min-h-full w-16 bg-muted-foreground flex flex-col border-r items-center py-8">
      <Button variant="outline" size="icon">
        <HomeIcon />
      </Button>
    </div>
  );
}
