import { useState } from "react";
import { setAuthToken, setAuthTokenRole } from "@/utils/auth";
import { ACCESS_TOKEN, TEACHER } from "@/utils/constant";
import { ManageErrorList, keys, length } from "@/utils/javascript";
import { setLocalStorageItem } from "@/utils/localStorage";
import validation from "@/utils/validation";
import useUseRoute from "@/hooks/useUseRoute";

const SignInContainer = () => {
  const { handlePush } = useUseRoute();
  const [signInField, setSignInField] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loader, setLoader] = useState(false);

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInField({ ...signInField, [name]: value });
    const { isValid, message } = validation(name, value);
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name]: { isValid, message },
    }));
  };

  const sendSignInRequest = async (signInData) => {
    try {
      const res = await fetch("https://examination.onrender.com/users/Login", {
        method: "POST",
        body: JSON.stringify(signInData),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        const { data } = await res.json();
        setLocalStorageItem(ACCESS_TOKEN, data);
        setAuthTokenRole(data?.role);
        setAuthToken(data?.token);
        handlePush(data?.role === TEACHER ? "/parallel" : "/dashboard");
      } else {
        console.error("Login failed:", res?.data);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    } finally {
      setLoader(false);
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const errors = ManageErrorList(signInField);

    if (length(keys(errors))) {
      setFormErrors(errors);
    } else {
      setLoader(true);
      await sendSignInRequest(signInField);
    }
  };

  return {
    loader,
    signInField,
    formErrors,
    handleSignInChange,
    handleSignInSubmit,
  };
};

export default SignInContainer;
