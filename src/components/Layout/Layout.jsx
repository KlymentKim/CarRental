import React from "react";
import Container from "../Container/Container";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from "./Layout.module.css";
import LoaderSpiner from "../LoaderSpiner/LoaderSpiner";

const Layout = () => {
  return (
    <>
      <Container>
        <main>
          <div className={css.background}></div>
          <Suspense fallback={<LoaderSpiner />}>
            <Outlet />
            {/* <p style={{ color: "#080707", marginTop: 30 }}>Group#4</p> */}
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default Layout;
