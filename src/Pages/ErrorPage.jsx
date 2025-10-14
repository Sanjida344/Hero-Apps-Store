import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import errorImage from "../assets/error-404.png";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className=" my-12  space-y-7">
        <img className="mx-auto w-[350px]" src={errorImage} alt="" />
        <div className="text-center space-y-7">
          <h1 className="font-bold text-4xl">Oops, page not found!</h1>
          <Button onClick={() => navigate("/")}>Go Back!</Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;