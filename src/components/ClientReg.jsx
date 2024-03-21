import React from "react";
import { useNavigate } from "react-router-dom";

export const ClientReg = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/clientDashboard");
  };
  return (
    <div className="container-fluid position-relative">
      <div className="triangle-top-left"></div>
      <div className="row mt-5 mb-5 justify-content-center align-item-center">
        <div className="col-12 col-md-6 col-lg-4 mt-3 mb-5">
          {/* <div className="text-center"> */}
          <div className="app-heading mb-3 mt-5 text-center">
            <h3>Registration Form</h3>
          </div>
          <div>
            <form>
              <div class="mb-3 ps-4 pe-4 pb-1 pt-2">
                <label for="exampleInputPassword1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 ps-4 pe-4 pb-1 pt-2">
                <label for="exampleInputPassword1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 ps-4 pe-4 pb-1 pt-2">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3 ps-4 pe-4 pb-1 pt-2">
                <label for="exampleInputPassword1" class="form-label">
                  Place
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary ms-4 mt-4 col-4"
                onClick={() => handleClick("clientDashboard")}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="triangle-bottom-right mt-2 "></div>
        </div>
      </div>
    </div>
    // </div>
  );
};
