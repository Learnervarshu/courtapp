import React from "react";
import { useState } from "react";
import { SideBar } from "./SideBar";
import Chatbot from "./ChatBot";
import { Link } from "react-router-dom";

export const Lawyersearch = () => {
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
            <img style={{ width: "30%", backgroundColor: "#80808052" }}src ="assets\QUESTION LOGO.jpg"></img>
            <br />
            <small className="case-caption">FAQ's</small>
          </div>
        </div>
        

       
       
      </div>
    </>
  );
}
