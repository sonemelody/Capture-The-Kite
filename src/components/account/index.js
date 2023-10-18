import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AccountSection = styled.section`
  background-color: #f0f0f5;
  .acntBody {
    font-family: Pretendard-Regular;
    width: 100%;
    height: auto;
    overflow: hidden;
    padding-bottom: 40px;
  }
  .acntContent {
    font-size: 19px;
    width: 1100px;
    height: auto;
    border-radius: 15px;
    background-color: white;
    box-shadow: 3px 3px 5px 3px #dedee6;
    margin: 40px auto 0 auto;
    padding: 20px;
  }
  .userInfo {
    margin: 30px 30px 80px 30px;
    td {
      padding: 0 100px 20px 0;
    }
  }
  .userScore {
    margin: 50px 30px 30px 30px;
  }
  .infoTitle,
  .scoreTitle {
    margin-bottom: 50px;
  }
  .subtitle {
    font-family: Pretendard-Bold;
  }
  .score {
    text-align: center;
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid #dedee6;
    td {
      border-bottom: 1px solid #dedee6;
      padding: 15px;
      width: 20%;
    }
  }
`;

const Account = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Token ${token}`,
    };

    axios
      .get("http://127.0.0.1:8000/user/profile/", {
        withCredentials: true,
        headers: headers,
      })
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
    <AccountSection>
      <div className="acntBody">
        <div className="acntContent">
          {loading ? (
            <p>데이터를 불러오는 중입니다...</p>
          ) : (
            <div>
              <div className="userInfo">
                <h2 className="infoTitle">내 정보</h2>
                <table>
                  <tbody>
                    <tr>
                      <td className="subtitle">EMAIL</td>
                      <td>{userData.profile.email}</td>
                    </tr>
                    <tr>
                      <td className="subtitle">NICKNAME</td>
                      <td>{userData.profile.nickname}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="userScore">
                <h2 className="scoreTitle">내 점수</h2>
                <table className="score">
                  <tbody>
                    <tr className="subtitle">
                      <td>Crypto</td>
                      <td>Linux</td>
                      <td>Web</td>
                      <td>System</td>
                      <td style={{ backgroundColor: "#caeeb2" }}>Total</td>
                    </tr>
                    <tr>
                      <td>{userData.scores.crypto_score}</td>
                      <td>{userData.scores.linux_score}</td>
                      <td>{userData.scores.web_score}</td>
                      <td>{userData.scores.system_score}</td>
                      <td>{userData.scores.total_score}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </AccountSection>
  );
};

export default Account;
