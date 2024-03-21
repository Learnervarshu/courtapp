import React from "react";
import { useState } from "react";

export const SideBar = () => {
  const [show, setShow] = useState("");
  const toggleOffcanvas = () => {
    if (show === "show") {
      setShow("");
    } else {
      setShow("show");
    }
  };
  return (
    <>
      <div className="top-head"  style={{ backgroundColor: "#a00ae1"}}>
        <button
          className="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
          onClick={toggleOffcanvas}
          style={{backgroundColor: "80808052"}}
        >
          <i className="fa-solid fa-bars fs-3"></i>
        </button>
        <span className="me-2">
          <img
            src="assets\images.jpg"
            className="d-block"
            alt="court logo"
            style={{ width: "32px", borderRadius: "10px" }}
          ></img>
        </span>
        <span className="me-2">
          <i class="fa-solid fa-share-nodes fs-3"></i>
        </span>
      </div>

      <div
        className={`offcanvas offcanvas-start ${show}`}
        style={{
          width: "200px",
          maxWidth: "80%",
          marginTop: "40px",
          backgroundColor: "80808052",
          height: "fit-content",
        }}
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header p-0">
          <h6 className="offcanvas-title ps-3 pt-1" id="offcanvasScrollingLabel">
            ecourts services
          </h6>
        </div>
        <div className="offcanvas-body p-0 pt-2">
          <ul className="list-group">
            <li className="list-group-item custom-li">
              <i className="fas fa-home" style={{ marginRight: "5px" }}></i>{" "}
              Home
            </li>
            <li className="list-group-item custom-li">
              <i
                className="fas fa-briefcase"
                style={{ marginRight: "5px" }}
              ></i>{" "}
              My Cases
            </li>
            <li className="list-group-item custom-li">
              <i
                className="fas fa-credit-card"
                style={{ marginRight: "5px" }}
              ></i>{" "}
              ePayments
            </li>
            <li className="list-group-item custom-li">
              <i className="fas fa-gavel" style={{ marginRight: "5px" }}></i>{" "}
              Virtual Courts
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
