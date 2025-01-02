import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./SignInForm.module.css";
import { loginThunk } from "../../redux/auth/authThunks";

//авторизація користувача в системі(вхід)
const SignInForm = () => {
  const dispatch = useDispatch();

 
  // Використання useFormik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address") // Перевірка на валідну пошту
        .required("Email is required"), // Поле обов'язкове
      password: Yup.string()
        .min(8, "Password must be at least 8 characters") // Мінімум 8 символів
        .matches(/[A-Z]/, "Must contain at least one uppercase letter") // Мінімум одна велика літера
        .matches(/[a-z]/, "Must contain at least one lowercase letter") // Мінімум одна маленька літера
        .matches(/[0-9]/, "Must contain at least one number") // Мінімум одна цифра
        .required("Password is required"), // Поле обов'язкове
    }),
    onSubmit: (values, { resetForm }) => {
      authenticationWithData(values);
      resetForm(); // Очищення форми після відправки
    },
  });

  // ф-ція отримує логін та пароль користувача
  function authenticationWithData(userData) {
    const user = {
      email: userData.email.trim(),
      password: userData.password.trim(),
    };
    dispatch(loginThunk(user));
  }

  return (
    <form className={styles.containerSignIn} onSubmit={formik.handleSubmit}>
      {/* Поле Email */}
      <div
        className={`${styles.formInput} ${
          formik.values.email ? styles.hasContent : ""
        }`}
      >
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // Додаткове відстеження втрати фокусу
          value={formik.values.email}
          required
        />
        <label htmlFor="email">Email</label>
        {formik.touched.email && formik.errors.email && (
          <p className={styles.errorMessage}>{formik.errors.email}</p>
        )}
      </div>

      {/* Поле Password */}
      <div
        className={`${styles.formInput} ${
          formik.values.password ? styles.hasContent : ""
        }`}
      >
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // Додаткове відстеження втрати фокусу
          value={formik.values.password}
          required
        />
        <label htmlFor="password">Password</label>
        {formik.touched.password && formik.errors.password && (
          <p className={styles.errorMessage}>{formik.errors.password}</p>
        )}
      </div>

      {/* Кнопка Submit */}
      <div className={styles.boxBtnSignIn}>
        <button className={styles.buttonSignIn} type="submit">
          Sign In
        </button>
      </div>
      <div className={styles.hrefToForgotPassword}>
        {/* <Link to="/ForgotPassword">Forgot your password?</Link> */}
        <Link to="/reset-password">Forgot your password?</Link>
      </div>
    </form>
  );
};

export default SignInForm;
