import React from "react";
/**
 * React-router-dom components
 */
import { Outlet } from "react-router-dom";

/**
 * External components
 */
import { AppNavbar } from "../components/AppNavbar";

const MainLayout = () => {
  /**
   * Rendering
   */
  return (
    <>
      <AppNavbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
