import { Navigation } from "@/components/nav";
import RightSideBar from "./r-side";
import LeftSideBar from "./l-side";
import Footer from "./footer";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="relative my-6 max-w-[90%] mx-auto">
        <Navigation gitTheme />
        <div className="mx-auto px-2 flex flex-1 mb-12">
          <div className="h-[calc(100dvh-6.55rem)] sticky top-12 w-[30%] max-w-[24rem] items-center pt-4">
            <LeftSideBar />
          </div>
          {children}
          <div className="h-[calc(100dvh-6.55rem)] sticky top-12 w-[30%] max-w-[24rem] items-center pt-4">
            <RightSideBar />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
