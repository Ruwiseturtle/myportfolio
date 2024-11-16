import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const AboutMe = lazy(() => import("./pages/Aboutme/Aboutme.jsx"));
const MyProjects = lazy(() => import("./pages/Projectspage/Projectspage.jsx"));
const SkillsPage = lazy(() => import("./pages/SkillsPage/Skills.jsx"));
const Contact = lazy(() => import("./pages/ContactPage/Contacts.jsx"));
const SertificatesPage = lazy(() =>  import("./pages/SertificatesPage/SertificatesPage.jsx"));
const MenuPage = lazy(() => import("./pages/MenuPage/MenuPage.jsx"));

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="MyProjects" element={<MyProjects />} />
        <Route path="Skills" element={<SkillsPage />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Sertificates" element={<SertificatesPage />} />
        <Route path="MenuPage/*" element={<MenuPage /> } />
      </Route>
    </Routes>
  );
}

export default App;
