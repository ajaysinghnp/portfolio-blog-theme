import RightSideBar from "./r-side";
import LeftSideBar from "./l-side";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-[calc(100dvh-6.55rem)] sticky top-12 w-[30%] max-w-[24rem] items-center pt-4">
        <LeftSideBar />
      </div>
      {children}
      <div className="h-[calc(100dvh-6.55rem)] sticky top-12 w-[30%] max-w-[24rem] items-center pt-4">
        <RightSideBar />
      </div>
    </>
  );
}
