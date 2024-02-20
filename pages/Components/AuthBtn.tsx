import React from "react";
import { FaUser } from "react-icons/fa";

const AuthBtn = () => {
  return (
    <button className="authBtn">
      <FaUser />
      <b>Sign In</b>
    </button>
  );
};

export default AuthBtn;
