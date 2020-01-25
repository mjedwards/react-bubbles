import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { LOGOUT } from "./reducers/bubbleReducers";
import { BubbleContext } from "./context/bubbleContext";

const Logout = () => {
  const { dispatch } = useContext(BubbleContext);
  // const lo = "logged out";
  // remove the token and call dispatch to reset all global state
  localStorage.removeItem("MTN-token");
  dispatch(LOGOUT);

  return <Redirect to='/' />;
};

export default Logout;
