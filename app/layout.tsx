import "./globals.css";
import Navbar from "./components/Navbar.tsx";
import type { ReactNode } from "react";

export const metadata = {
  title: "Furniture Website",
  description: "Modern furniture showcase",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
