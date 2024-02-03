import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar.js"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StuyBike",
  description: "Website for StuyBike",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
