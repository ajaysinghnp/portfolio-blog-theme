import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header";
import { cn } from "@/utilities/tailwind";
import Footer from "@/components/footer";

const popins = Poppins({ weight: ["300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ajay Singh",
  description: "A Personal Portfolio for Ajay Singh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        popins.className,
        "min-h-screen flex flex-col",
        "bg-gray-200",
      )}>
        <div className={
          cn(
            "header",
            // "bg-slate-800",
            "fixed w-full flex justify-center items-center",
          )}>
          <Header />
        </div>
        <div className={cn(
          "content",
          "h-full mt-24",
          // "bg-slate-600"
        )}>
          {children}
        </div>
        <div className={cn(
          "footer",
          "fixed bottom-0 right-0 left-0",
        )}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
