import React from "react";
import { Link, Outlet } from "react-router-dom";

export function OutletPage() {
  return (
    <>
      <nav className="nav">
        <Link to={`/`}>Home</Link>
        <Link to={`/contact`}>Contact us</Link>
      </nav>
      <Outlet />
    </>
  );
}
