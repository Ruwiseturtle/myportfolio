import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const AboutMe = lazy(() => import("./pages/Aboutme/Aboutme.jsx"));
const MyProjects = lazy(() => import("./pages/Projectspage/Projectspage.jsx"));
const SkillsPage = lazy(() => import("./pages/SkillsPage/Skills.jsx"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts.jsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="MyProjects" element={<MyProjects />} />
        <Route path="Skills" element={<SkillsPage />} />
        <Route path="Contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
