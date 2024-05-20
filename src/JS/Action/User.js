import { FAIL_USER, LOAD_USER } from "../Constatnts/User";

// Login user
export const login_user = (email, password,navigate) => async (dispatch) => {
    try {

        dispatch({type: LOAD_USER})
      const result = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}admin/login`,
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", result.data.token);
      navigate("/profile");
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  };