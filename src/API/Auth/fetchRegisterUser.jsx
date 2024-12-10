import axios from "axios";

const authInstance = axios.create({
  baseURL: "https://myportfolio-backend-oncj.onrender.com",
  // baseURL:
  //   process.env.REACT_APP_ENVIRONMENT === 'development'
  //     ? "http://localhost:3000"
  //     : "https://myportfolio-backend-oncj.onrender.com",
});

export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//__________________реєстрація користувача___________
export const fetchRegisterUser = async (newUser) => {
  // formData - {name: "Oleg", email: "adwad@gmail.com", password: "123456788"}
    const { data } = await authInstance.post("/api/users/register", newUser);

    // Зберігаємо токен у localStorage
    // localStorage.setItem("token", data.user?.token);

    // setToken(data.user?.token);
    return data; 
 
};


//__________________логінізація користувача___________
export const requestLogin = async formData => {
    // formData - {email: "adwad@gmail.com", password: "123456788"}
  const { data } = await authInstance.post("/api/users/login", formData);
  console.log('=============login=======================');
  console.log(data);
  console.log('====================================');
  setToken(data.token);
  return data;
};
