import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const AccountSection = styled.section`
  .acntHeader {
    font-family: Pretendard-Bold;
    font-size: 40px;
    margin: 40px 0px 20px 110px;
  }
  .acntBody {
    background-color: #f0f0f5;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 40px;
    padding-bottom: 40px;

    .tab-menu {
      margin: 40px 0 0 110px;
      display: flex;
    }

    .tab-button {
      font-family: Pretendard-Bold;
      font-size: 20px;
      background-color: #f2f2f2;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 10px 20px;
      transition: background-color 0.3s;
    }

    .tab-button:hover {
      background-color: #ddd;
    }

    .tab-button.active {
      background-color: #ccc;
      border: 1px solid #000;
    }

    .tab-content {
      display: none;
      padding: 20px;
    }

    .tab-content h3 {
      margin-top: 0;
    }

    .tab-content p {
      margin-bottom: 0;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Account = () => {
  const [activeTab, setActiveTab] = useState("points");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <AccountSection>
        <div className="acntHeader">My Page</div>

        <div className="acntBody">
          <div class="tab-menu">
            <button
              className={`tab-button ${activeTab === "points" ? "active" : ""}`}
              onClick={() => openTab("points")}
            >
              Points
            </button>
            <button
              className={`tab-button ${activeTab === "solved" ? "active" : ""}`}
              onClick={() => openTab("solved")}
            >
              Solved
            </button>
            <button
              className={`tab-button ${activeTab === "myinfo" ? "active" : ""}`}
              onClick={() => openTab("myinfo")}
            >
              My Info
            </button>

            <div
              id="points"
              className={`tab-content ${
                activeTab === "points" ? "active" : ""
              }`}
            >
              <h3>Points Tab Content</h3>
              <p>This is the content of the Points tab.</p>
            </div>

            <div
              id="solved"
              className={`tab-content ${
                activeTab === "solved" ? "active" : ""
              }`}
            >
              <h3>Solved Tab Content</h3>
              <p>This is the content of the Solved tab.</p>
            </div>

            <div
              id="myinfo"
              className={`tab-content ${
                activeTab === "myinfo" ? "active" : ""
              }`}
            >
              <h3>My Info Tab Content</h3>
              <p>This is the content of the My Info tab.</p>
            </div>
          </div>
        </div>
      </AccountSection>
    </>
  );
};

export default Account;
