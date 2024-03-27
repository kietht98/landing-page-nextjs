import LayoutMain from "@/shared/Layout";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <LayoutMain>
      <div className=" min-h-screen">{children}</div>
    </LayoutMain>
  );
};

export default Layout;
