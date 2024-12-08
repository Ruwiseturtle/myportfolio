import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";

// Лейзі імпорти компонентів
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const AboutMe = lazy(() => import("./pages/Aboutme/Aboutme.jsx"));
const MyProjects = lazy(() => import("./pages/Projectspage/Projectspage.jsx"));
const SkillsPage = lazy(() => import("./pages/SkillsPage/Skills.jsx"));
const UserInfo = lazy(() => import("./components/UserInfo/UserInfo.jsx"));
const Contact = lazy(() => import("./pages/ContactPage/Contacts.jsx"));
const SertificatesPage = lazy(() => import("./pages/SertificatesPage/SertificatesPage.jsx"));
const MenuPage = lazy(() => import("./pages/MenuPage/MenuPage.jsx"));
const Authorization = lazy(() => import("./components/Authorization/Authorization"));
const SignIn = lazy(() => import("./components/SignIn/SignIn"));
const SignUp = lazy(() => import("./components/SignUp/SignUp"));
const DescriptionMenu = lazy(() => import("./components/DescriptionMenu/DescriptionMenu"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="MyProjects" element={<MyProjects />} />
        <Route path="Skills" element={<SkillsPage />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Sertificates" element={<SertificatesPage />} />
        <Route path="MenuPage/*" element={<MenuPage />}>
          <Route path="DescriptionMenu" element={<DescriptionMenu />} />
          <Route path="Authorization/*" element={<Authorization />}>
            <Route path="userInfo" element={<UserInfo />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;