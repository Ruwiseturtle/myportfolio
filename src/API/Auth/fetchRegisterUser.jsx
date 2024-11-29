import axios from "axios";

const authInstance = axios.create({
  baseURL: "https://myportfolio-backend-oncj.onrender.com",
});

export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//__________________реєстрація користувача___________
export const fetchRegisterUser = async (newUser) => {
  // formData - {name: "Oleg", email: "adwad@gmail.com", password: "123456788"}
  const { data } = await authInstance.post("/api/users/register", newUser);
  setToken(data.token);
  return data;
};
