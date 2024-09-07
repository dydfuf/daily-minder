import { CustomEditor } from "@/components/common/CustomEditor";
import { Route } from "@/routes/_auth/_auth.daily";

export default function DailyPage() {
  const { today } = Route.useSearch();

  return (
    <div>
      <h1>{today}</h1>
      <CustomEditor initialContent={defaultValue} />
    </div>
  );
}

const defaultValue = {};
