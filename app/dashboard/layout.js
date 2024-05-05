import UserData from "@/components/auth/user_data";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <UserData />
      </header>
      {children}
    </div>
  );
};

export default Layout;
