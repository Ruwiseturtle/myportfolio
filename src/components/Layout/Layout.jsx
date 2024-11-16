import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Suspense } from "react";
import "./Layout.css";
import { Loading } from "../Loading/Loading";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="container-back">
      <Header/>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
