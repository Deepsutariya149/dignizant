import Api, { setAuthorization, urls } from "../../services/api";
import { userActions } from "../slices";
import { apiErrorBlock } from "../../functions/utils";
import { showNotification } from "../../functions/notification";
import Cookies from "universal-cookie";

export const onUserLogin = (user) => async (dispatch) => {
  try {
    await setAuthorization(user.token);
    await dispatch(userActions.updateUser({ user }));
  } catch (e) {
    apiErrorBlock(e);
  }
};

export const userLogin = async (params) => {
  try {
    const response = await Api.post(`${urls.authLogin}`, params);

    const { status, token, user } = response.data;
    console.log("first", status, token, user, response);
    if (status && token && user) {
      setAuthorization(token);
      const cookies = new Cookies();
      console.log("first");
      cookies.set("user", response, { path: "/", domain: "/" });
      window.location.pathname = "/home";
      showNotification({
        title: "Success",
        message: "Login Success",
        type: "success",
      });
    } else {
      showNotification({
        title: "Error",
        message: "Login Failed",
        type: "danger",
      });
    }
  } catch (e) {
    showNotification({
      title: "Error",
      message: e?.response?.statusText || e?.message,
      type: "danger",
    });
  }
};
