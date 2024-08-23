import Footer from "@/components/frontend/Footer";
import Navbar from "@/components/frontend/Navbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto py-2 lg:py-5 px-2 lg:px-0 bg-gray-50">{children}</div>
      <Footer />
    </div>
  );
}
