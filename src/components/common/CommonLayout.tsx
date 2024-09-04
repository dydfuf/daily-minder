import GlobalCalendar from "./GlobalCalendar";
import GlobalLnb from "./GlobalLnb";

interface CommonLayoutProps {
  children: React.ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <div className="w-full h-full flex">
      <GlobalLnb />
      <GlobalCalendar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
