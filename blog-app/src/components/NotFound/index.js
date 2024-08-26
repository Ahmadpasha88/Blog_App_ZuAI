import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="minHeight row p-0 m-0 d-flex justify-content-center align-items-center text-white">
      <>
        <img
          src="https://images.vexels.com/media/users/3/177472/isolated/preview/bb9e0ed541ebb6ab339d15b5e780025b-duck-sad-muzzle-head-flat-by-vexels.png"
          alt=""
          className="col-8 col-md-6 col-lg-4 m-auto mb-0 p-0 m-0"
          style={{ maxHeight: "40vh", maxWidth: "17vw", minWidth: "12vw" }}
        />

        <p className="fw-bold fs-4 text-white-50 col-12 text-center">
          Page note found please visit to <Link to="/">Home Page</Link>
        </p>
      </>
    </div>
  );
};

export default NotFound;
