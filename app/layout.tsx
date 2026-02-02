import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Furniture Website",
  description: "Modern furniture showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
``