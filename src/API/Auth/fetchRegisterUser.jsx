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
     setToken(data.user?.token);
    return data;  
};


//__________________логінізація користувача___________
export const requestLogin = async formData => {
  // formData - {email: "adwad@gmail.com", password: "123456788"}
    
  const { data } = await authInstance.post("/api/users/login", formData);
  // Зберігаємо токен у localStorage
  localStorage.setItem("token", data.ResponseBody?.token);

  setToken(data.ResponseBody.token);
  return data;
};

export const dellToken = () => {
  delete authInstance.defaults.headers.common["Authorization"];
};

//для розлогінізації користувача (в базі даних видаляє токен)
export const requestLogout = async () => {
  const { data } = await authInstance.post("/api/users/logout");
  
  return data;
};

//отримуємо поточного юзера
export const requestGetCurrentUser = async (token) => {
  try {
    setToken(token);
    const { data } = await authInstance.get("/api/users/current");
   
    console.log("requestGetCurrentUser");
    console.log(data);
    
    return data;
    
    
  } catch (error) {
    setToken();
    throw error;
  }
};