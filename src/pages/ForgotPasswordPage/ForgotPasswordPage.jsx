import React from 'react'
import styles from './ForgotPasswordPage.module.css';
import { useFormik } from "formik";
import * as Yup from "yup";

const ForgotPasswordPage = () => {
    //  const [email, setEmail] = useState("");
    //  const [message, setMessage] = useState("");
    // const [error, setError] = useState("");
    
  const formik = useFormik({
      initialValues: {
        email: "",       
      },
  
      validationSchema: Yup.object({       
        email: Yup.string()
          .email("Invalid email address") // Перевірка на валідну пошту
          .required("Email is required"), // Поле обов'язкове        
      }),
      onSubmit: (values, { resetForm }) => {
        sendNewUserToDatabase(values.email);
        // console.log("Form data:", values);
        resetForm(); // Очищення форми після відправки
      },
  });
  
  function sendNewUserToDatabase(email) {
   console.log("==============email======================");
   console.log(email);
   console.log('====================================');
  }

    
  return (
    <div className={styles.containerForgotPassword}>
      {/* Поле Email */}
      <div className={styles.boxTextForgotPassword}>
        To restore access to your account, please enter your email address
        below. We will send you instructions to reset your password.
      </div>
      <div className={styles.containerForForm}>
        <form className={styles.formEmail} onSubmit={formik.handleSubmit}>
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
          {/* Кнопка Submit */}
          <div className={styles.boxBtnSendEmail}>
            <button className={styles.buttonSendEmail} type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage
