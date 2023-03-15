import React, { useState } from "react";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import SideDrawer from "./SideDrawer/SideDrawer";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const [showSideDrawer, toggleSideDrawer] = useState(false);
  const closeSideDrawer = () => {
    toggleSideDrawer(false);
  };
  const toggleSideDrawerHandler = () => {
    toggleSideDrawer(!showSideDrawer);
  };
  return (
    <>
      <NavBar drawerToggleClicked={toggleSideDrawerHandler} />
      <SideDrawer open={showSideDrawer} closed={closeSideDrawer} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
