import React from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const handleClick = (str) => {
    if(str === "LawyerReg") {
      navigate("/lawyerReg");
    }else if (str === "ClientReg"){
      navigate("/clientReg");
    }else {
      navigate("/createLogin");
    }
  };
  return (
    <div className="container-fluid position-relative">
      <div className="triangle-top-left"></div>
      <div className="row mt-5 mb-5 justify-content-center align-item-center">
        <div className="col-12 col-md-6 col-lg-4 mt-3 mb-5">
          <div className="text-center">
            <div className="app-logo mb-5 mt-4">
              <img
                src="assets\images.jpg"
                className="mx-auto d-block"
                alt="court logo"
                style={{width:"120px"}}
              ></img>
            </div>
            <div className="row mt-5 mb-5 justify-content-center align-item-center">
        <div className="col-12 col-md-6 col-lg-4 mt-3 mb-5">
          <div className="app-heading mb-1 mt-1 text-center"> 
            <h1>LOGIN</h1>
          </div>
          <div>
            <form>
              <div class="mb-3 ps-4 pe-4 pb-1 pt-2">
                <label for="exampleInputPassword1" class="form-label">
                Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 ps-4 pe-4 pb-1 pt-2">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              
              
              <button
                type="submit"
                style={{backgroundColor:"black"}}
                onClick={() => handleClick("lawyerDashboard")}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="triangle-bottom-right mt-2 "></div>
        </div>
      </div>

            <div className="mb-3">
              <small className="me-2 fw-500">No account?</small>
              <a onClick={() => handleClick()} href="/createLogin">
                Create one
              </a>
            </div>
            <div className="triangle-bottom-right mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
