import React from "react";
import { useDispatch } from "react-redux";
import styles from "./SignUpForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerThunk } from "../../redux/auth/authThunks";
import  AuthStatus  from "../../constants/userRolesEnum";
import { setAuthSwitchToShow } from "../../redux/auth/authReducer";

//реєсрація користувача в системі (ввод нового користувача користувача)
const SignUpForm = () => {
  const dispatch = useDispatch();

  // Використання useFormik
  const formik = useFormik({
    initialValues: {
      login: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      login: Yup.string()
        .min(2, "Name must be at least 2 characters") // Мінімум 2 символи
        .max(50, "Name must be less than 50 characters") // Максимум 50 символів
        .required("Enter your login"),
      email: Yup.string()
        .email("Invalid email address") // Перевірка на валідну пошту
        .required("Email is required"), // Поле обов'язкове
      password: Yup.string()
        .min(8, "Password must be at least 8 characters") // Мінімум 8 символів
        .matches(/[A-Z]/, "Must contain at least one uppercase letter") // Мінімум одна велика літера
        .matches(/[a-z]/, "Must contain at least one lowercase letter") // Мінімум одна маленька літера
        .matches(/[0-9]/, "Must contain at least one number") // Мінімум одна цифра
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match") // Перевірка на співпадіння
        .required("Confirm Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      sendNewUserToDatabase(values);
      // console.log("Form data:", values);
      resetForm(); // Очищення форми після відправки
    },
  });

  function sendNewUserToDatabase(dataUser) {
    const { login, email, password } = dataUser;

    const newUser = {
      login: login.trim(),
      email: email.trim(),
      password: password.trim(),
    };

    dispatch(registerThunk(newUser));
    dispatch(setAuthSwitchToShow(AuthStatus.LogIn));
  }

  return (
    <form className={styles.containerSignUp} onSubmit={formik.handleSubmit}>
      {/* Поле login */}
      <div
        className={`${styles.formInput} ${
          formik.values.login ? styles.hasContent : ""
        }`}
      >
        <input
          type="text"
          id="login"
          name="login"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // Додаткове відстеження втрати фокусу
          value={formik.values.login}
          required
        />
        <label htmlFor="login">Login</label>
        {formik.touched.login && formik.errors.login && (
          <p className={styles.errorMessage}>{formik.errors.login}</p>
        )}
      </div>
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
      {/* Поле confirm Password */}
      <div
        className={`${styles.formInput} ${
          formik.values.confirmPassword ? styles.hasContent : ""
        }`}
      >
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // Додаткове відстеження втрати фокусу
          value={formik.values.confirmPassword}
          required
        />
        <label htmlFor="confirmPassword">Confirm password</label>
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <p className={styles.errorMessage}>{formik.errors.confirmPassword}</p>
        )}
      </div>

      {/* Кнопка Submit */}
      <div className={styles.boxBtnSignIn}>
        <button className={styles.buttonSignIn} type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
