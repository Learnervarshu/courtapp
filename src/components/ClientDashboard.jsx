import React from "react";
import { useState } from "react";
import { SideBar } from "./SideBar";
import { DashboardContent } from "./DashboardContent";
import { CNRPage } from "./CnrPage";
import { SearchLawyer } from "./SearchLqwyer";
import { MyCase } from "./MyCase";
import { FAQ } from "./FAQ";

export const ClientDashboard = () => {
  const [active, setActive] = useState("");

  const handleElementClick = (elementName) => {
    setActive(elementName);
  };
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(128, 128, 128, 0.15)", height: "100vh" }}
      >
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
            style={{
              flex: "1",
              textAlign: "center",
              backgroundColor:
                active === "caseStatus" ? "#ff5000" : "#80808052",
            }}
            onClick={() => handleElementClick("caseStatus")}
          >
           <img src="assets\lawyer.png" style={{ width: "30%" }}
              alt="Lawyer Logo"></img>
            <br />
            <small className="case-caption">case status</small>
          </div>
          <div
            className="case-status pt-2"
            style={{
              flex: "1",
              textAlign: "center",
              backgroundColor:
                active === "selectLawyer" ? "#ff5000" : "#80808052",
            }}
            onClick={() => handleElementClick("selectLawyer")}
          >
            <img
              src="assets/select lawyer logo.jpg"
              style={{ width: "30%" }}
              alt="Select Lawyer Logo"
            />
            <br />
            <small className="case-caption">select lawyer</small>
          </div>
          <div
            className="case-status pt-2"
            style={{
              flex: "1",
              textAlign: "center",
              backgroundColor: active === "myCases" ? "#ff5000" : "#80808052",
            }}
            onClick={() => handleElementClick("myCases")}
          >
            <img
              src="assets/my cases logo.jpg"
              style={{ width: "33%" }}
              alt="My Cases Logo"
            />
            <br />
            <small className="case-caption">my cases</small>
          </div>
          <div
            className="case-status pt-2"
            style={{
              flex: "1",
              textAlign: "center",
              backgroundColor: active === "faq" ? "#ff5000" : "#80808052",
            }}
            onClick={() => handleElementClick("faq")}
          >
            <img
              src="assets/question logo.jpg"
              style={{ width: "30%" }}
              alt="Question Logo"
            />          
              <br />
            <small className="case-caption">FAQ's</small>
          </div>
        </div>

        {active === "caseStatus" && <DashboardContent />}
        {active === "" && <CNRPage />}
        {active === "selectLawyer" && <SearchLawyer />}
        {active === "myCases" && <MyCase />}  
        {active === "faq" && <FAQ />}           
      </div>
    </>
  );
};
