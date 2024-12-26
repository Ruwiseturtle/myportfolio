
import { requestGetCurrentUser } from "../API/Auth/fetchRegisterUser";

async function isUserLoggedIn() {
  const token = localStorage.getItem("token");

  let result = null;

  if (token && token !== "null") {
    try {
      const data = await requestGetCurrentUser(token);
         
        result = {
          user: data,
          token: token,
      };
      
      return result;
    } catch (error) {
      console.error("Помилка при отриманні користувача:", error);
      return result;
    }
  } else {
    return result;
  }
}

export default isUserLoggedIn;