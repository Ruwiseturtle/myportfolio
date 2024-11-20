import React, { useState } from "react";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignInClick = (e) => {
    e.preventDefault();
    setFormData({
      email: "",
      password: "",
    })
    console.log("Form data:", formData);
  };

  return (
    <form className={styles.containerSignIn}>
      {/* Поле Email */}
      <div
        className={`${styles.formInput} ${
          formData.email ? styles.hasContent : ""
        }`}
      >
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <label htmlFor="email">Email</label>
      </div>

      {/* Поле Password */}
      <div
        className={`${styles.formInput} ${
          formData.password ? styles.hasContent : ""
        }`}
      >
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <label htmlFor="password">Password</label>
      </div>

      {/* Кнопка Submit */}
      <div className={styles.boxBtnSignIn}>
        <button
          className={styles.buttonSignIn}
          type="submit"
          onClick={handleSignInClick}
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignIn;
