import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="layout">
        <main>
          <Outlet />
        </main>
      </div>
      ;
    </>
  );
}
