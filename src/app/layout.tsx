import { Metadata } from "next";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import MainContextProvider from "../context/MainContext";
import "../styles/index.scss";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainContextProvider>
          <Navbar />
          {children}
          <Footer />
        </MainContextProvider>
      </body>
    </html>
  );
}
