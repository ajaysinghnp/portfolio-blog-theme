import { Navigation } from "@/components/nav";
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
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
