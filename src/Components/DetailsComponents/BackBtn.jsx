import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackBtn = () => {
  const navigate = useNavigate();
  // Function to return to the Home page when click on the button
  const backBtnClick = () => {
    navigate("/");
  };

  return (
    <button type="button" onClick={backBtnClick} className="back-btn">
      <BsArrowLeft /> Back
    </button>
  );
};

export default BackBtn;
