import { useState } from "react";
import { SideBar } from "./SideBar";
import Chatbot from "./ChatBot";
import { Link } from "react-router-dom";

export const LawyerDashboard = () => {
  return (
    <>
      <div style={{ backgroundColor: "rgba(128, 128, 128, 0.15)" }}>
        <SideBar />
        <div
          className="top-head"
          style={{
            backgroundColor: "#e94545",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="case-status pt-2"
            style={{ flex: "1", textAlign: "center" }}
          >
            <i className="fa-solid fa-scale-balanced fs-3"></i>
            <br />
            <small className="case-caption">case status</small>
          </div>
          <div
            className="case-status pt-2"
            style={{ flex: "1", textAlign: "center" }}
          >
            <img
              src="assets\select lawyer logo.jpg"
              style={{ width: "30%", backgroundColor: "#80808052" }}
            ></img>
            <br />
            <small className="case-caption">select lawyer</small>
          </div>
          <div
            className="case-status pt-2"
            style={{ flex: "1", textAlign: "center" }}
          >
            <img
              src="assets\my cases logo.jpg"
              style={{ width: "30%", backgroundColor: "#80808052" }}
            ></img>
            <br />
            <small className="case-caption">my cases</small>
          </div>
          <div
            className="case-status pt-2"
            style={{ flex: "1", textAlign: "center" }}
          >
            <i className="fa-solid fa-scale-balanced fs-3"></i>
            <br />
            <small className="case-caption">FAQ's</small>
          </div>
        </div>
        <div className="col- mt-5 ">
          <select
            name="cars"
            id="cars"
            style={{
              width: "40%",
              margin: "10px",
              backgroundColor: "#80808052",
            }}
          >
            <option value="volvo">Select court</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{
              width: "40%",
              margin: "10px",
              backgroundColor: "#80808052",
            }}
          >
            <option value="volvo">Select bench</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="container-fluid mt-4">
          <div className="row">
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\case type logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>case number</h6>
            </div>
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\party logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>Party</h6>
            </div>
          </div>
          <div className="row">
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\case type logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>Filing Number</h6>
            </div>
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\FIR number logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>FIR Number</h6>
            </div>
          </div>
          <div className="row">
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\advocate logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>Advocate</h6>
            </div>
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\act logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>Act</h6>
            </div>
          </div>
          <div className="row">
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\case type logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>Case type</h6>
            </div>
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\hearing date logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>Hearing Dates</h6>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets/notofication logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>Notification</h6>
            </div>
          </div>
        </div>
        <div
          className="home-page"
          style={{ backgroundColor: "rgba(128, 128, 128, 0.15)" }}
        >
          <Link to="/chatbot">
            <img
              src="assets\chatbot logo.jpg"
              style={{ width: "54px", float: "right" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
