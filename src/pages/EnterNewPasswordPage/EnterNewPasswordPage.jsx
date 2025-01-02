import React from 'react'
import styles from './EnterNewPasswordPage.module.css';
import { useFormik } from "formik";
import { Notify } from "notiflix";
import * as Yup from "yup";
import { useSearchParams } from "react-router-dom";
import { resetPassword } from '../../API/Auth/fetchRegisterUser';
// import { sendEmailForResetPassword } from '../../API/Auth/fetchRegisterUser';

const EnterNewPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const verificationToken = searchParams.get("verificationToken");

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password must be at least 8 characters") // Мінімум 8 символів
        .matches(/[A-Z]/, "Must contain at least one uppercase letter") // Мінімум одна велика літера
        .matches(/[a-z]/, "Must contain at least one lowercase letter") // Мінімум одна маленька літера
        .matches(/[0-9]/, "Must contain at least one number") // Мінімум одна цифра
        .required("Password is required"), // Поле обов'язкове
      confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match") // Перевірка на співпадіння
              .required("Confirm Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      sendNewPassword(values.password);
      // console.log("Form data:", values);
      resetForm(); // Очищення форми після відправки
    },
  });

  async function sendNewPassword(password) {
    console.log("======password====verificationToken============");
    console.log(verificationToken);
    console.log(password);

    try {
      const result = await resetPassword(verificationToken, password);

      result.success ? Notify.success(result.message) : Notify.failure(result.message);
      
    } catch (error) {
      console.error("Error in sendNewPassword:", error);
      Notify.failure("Failed to reset password.");
    }
  }

  return (
    <div className={styles.containerForgotPassword}>
      {/* Поле password */}
      <div className={styles.boxTextForgotPassword}>Enter new password</div>
      <div className={styles.containerForForm}>
        <form className={styles.formEmail} onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.formInput} ${
              formik.values.email ? styles.hasContent : ""
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
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className={styles.errorMessage}>
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>

          {/* Кнопка Submit */}
          <div className={styles.boxBtnSendEmail}>
            <button className={styles.buttonSendEmail} type="submit">
              Save
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EnterNewPasswordPage;
