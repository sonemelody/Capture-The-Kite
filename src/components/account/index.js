import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

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
      border: none;
      border-radius: 3px;
      outline: none;
      cursor: pointer;
      padding: 10px 20px;
      margin-right: 10px;
      transition: background-color 0.3s;
    }

    .tab-button:hover {
      background-color: #7d7dec;
      color: white;
    }

    .tab-button.active {
      background-color: #7d7dec;
      color: white;
      border: none solid #000;
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
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/user/profile/", { withCredentials: true })
      .then((response) => {
        const { profile, scores } = response.data;
        setUserData({ profile, scores });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <AccountSection>
        <div className="acntHeader">My Page</div>

        <div className="acntBody">
          <div className="tab-menu">
            <button
              className={`tab-button ${activeTab === "points" ? "active" : ""}`}
              onClick={() => openTab("points")}
            >
              Points
            </button>
            <button
              className={`tab-button ${activeTab === "myinfo" ? "active" : ""}`}
              onClick={() => openTab("myinfo")}
            >
              My Info
            </button>

            <div>
              {loading ? (
                <p>데이터를 불러오는 중입니다...</p>
              ) : userData ? (
                activeTab === "myinfo" ? (
                  <div>
                    <p>Email: {userData.profile.email}</p>
                    <p>Nickname: {userData.profile.nickname}</p>
                    <h3>Scores</h3>
                    <p>Crypto Score: {userData.scores.crypto_score}</p>
                    <p>Linux Score: {userData.scores.linux_score}</p>
                    <p>Web Score: {userData.scores.web_score}</p>
                    <p>System Score: {userData.scores.system_score}</p>
                    <p>Total Score: {userData.scores.total_score}</p>
                  </div>
                ) : (
                  <p>점수 정보를 불러오는 중입니다...</p>
                )
              ) : (
                <p>사용자 정보를 불러오는 중입니다...</p>
              )}
            </div>
          </div>
        </div>
      </AccountSection>
    </>
  );
};

export default Account;
