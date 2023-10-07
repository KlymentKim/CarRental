import React from "react";
import Container from "../Container/Container";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
            {/* <p style={{ color: "#080707", marginTop: 30 }}>Group#4</p> */}
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
