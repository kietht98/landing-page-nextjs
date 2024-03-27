import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { PropsWithChildren } from "react";

const LayoutMain = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutMain;
