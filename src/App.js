import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import { requestGetCurrentUser } from "./API/Auth/fetchRegisterUser.jsx";
import { selectIsAuthenticated } from "./redux/auth/authSelectors.js";
import { selectAuthSwitchToShow } from "./redux/auth/authSelectors.js";

// Лейзі імпорти компонентів
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const AboutMe = lazy(() => import("./pages/Aboutme/Aboutme.jsx"));
const MyProjects = lazy(() => import("./pages/Projectspage/Projectspage.jsx"));
const SkillsPage = lazy(() => import("./pages/SkillsPage/Skills.jsx"));
const Contact = lazy(() => import("./pages/ContactPage/Contacts.jsx"));
const SertificatesPage = lazy(() =>
  import("./pages/SertificatesPage/SertificatesPage.jsx")
);
const MenuPage = lazy(() => import("./pages/MenuPage/MenuPage.jsx"));
const DescriptionMenu = lazy(() =>
  import("./pages/DescriptionMenuPage/DescriptionMenuPage.jsx")
);
const AuthorizationPage = lazy(() =>
  import("./pages/AuthorizationPage/AuthorizationPage.jsx")
);
const VerifyEmailPage = lazy(() =>
  import("./pages/VerifyEmailPage/VerifyEmailPage.jsx")
);

const UserPage = lazy(() => import("./pages/UserPage/UserPage.jsx"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage/ForgotPasswordPage.jsx"));

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const authSwitchToShow = useSelector(selectAuthSwitchToShow);
  const dispatch = useDispatch();


  //якщо в сторедж є токен, то зчитуємо його і юзера
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== null && token !== "null") {
      // dispatch(setToken(token));
      requestGetCurrentUser(token)
        .then((data) => {
          // dispatch(setCurrentUserWithToken(data));
      
        })
        .catch((error) => console.log(error));
    } else {
    }
  }, [dispatch, authSwitchToShow, isAuthenticated]);



  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="MyProjects" element={<MyProjects />} />
        <Route path="Skills" element={<SkillsPage />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Sertificates" element={<SertificatesPage />} />
        <Route path="UserPage" element={<UserPage />} />

        {/* <Route path="UserPage" element={
            <RestictedRoute>
              <UserPage />
            </RestictedRoute>
          }
        /> */}

        <Route path="ForgotPassword" element={<ForgotPasswordPage />} />
        <Route path="AuthorizationPage/*" element={<AuthorizationPage />}>
          {/* <Route path="userInfo" element={<UserInfo />} /> */}
          <Route path="SignIn" element={<AuthorizationPage />} />
          <Route path="SignUp" element={<AuthorizationPage />} />
          <Route path="VerifyEmailPage" element={<VerifyEmailPage />} />
        </Route>
        <Route path="MenuPage/*" element={<MenuPage />}>
          <Route path="DescriptionMenu" element={<DescriptionMenu />} />
          <Route path="Somethink" element={<DescriptionMenu />} />
        </Route>
      </Route>
    </Routes>
    //
  );
}

export default App;
