import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "../swal.css";

const SubmitSection = styled.section`
  font-family: Pretendard-Bold;
  .qMain {
    padding: 50px 0 50px 145px;
    background-color: #f0f0f5;
  }
  .box {
    width: 1100px;
    height: auto;
    border-radius: 15px;
    background-color: white;
    box-shadow: 3px 3px 5px 3px #dedee6;
    padding: 20px 40px;
  }
  .qTitle {
    font-size: 32px;
    margin: 30px 0;
  }
  .qScore {
    font-size: 20px;
    margin: 0 0 70px 0px;
  }
  .qCategory {
    font-size: 14px;
    margin: 0 0 70px 100px;
    width: 60px;
    height: 30px;
    border-radius: 8px;
    background-color: #7d7dec;
    border: none;
    border-radius: 20px;
    color: white;
    text-align: center;
  }
  .qInfoDiv,
  .qPathDiv {
    margin: 30px auto;
  }
  .qInfoTitle,
  .qPathTitle,
  .qFileTitle {
    font-size: 20px;
    margin-right: 70px;
    color: #5c5ce7;
  }
  .qInfoDetail,
  .qPathDetail,
  .qFildDownload {
    font-family: Pretendard-Regular;
    font-size: 18px;
  }
  .submitAnswer {
    padding-left: 143px;
    margin: 30px 0;
  }
  .kite {
    width: 25px;
    height: 17px;
    display: inline-block;
    margin: 0 15px 0 0;
  }
  .submitTitle {
    font-size: 22px;
    color: #5c5ce7;
    margin-right: 20px;
  }
  .submitKite {
    display: inline;
    .inputForm {
      font-family: Pretendard-Regular;
      font-size: 17px;
      width: 62.5%;
      height: 45px;
      background-color: #f0f0f5;
      border: none;
      border-radius: 30px;
      outline: none;
      margin-right: 20px;
      padding: 0 18px;
    }
    .submitBtn {
      width: 100px;
      height: 45px;
      border-radius: 8px;
      background-color: #7d7dec;
      border: none;
      border-radius: 30px;
      font-weight: bold;
      font-size: 16px;
      color: white;
      text-align: center;
      cursor: pointer;
    }
    .submitBtn:hover {
      background-color: #5c5ce7;
    }
  }
  .getPortBtn {
    padding: 0.5rem 0.7rem;
    margin: 0 30px 0 10px;
    white-space: nowrap;
    border-radius: 3px;
    border: solid #7d7dec 1px;
    color: #7d7dec;
    background-color: white;
  }
  .getPortBtn:hover {
    background-color: #7d7dec;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Submit = () => {
  const [problem, setProblem] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [webProblem, setWebProblem] = useState(false);

  useEffect(() => {
    fetchProblemData()
      .then((data) => {
        setProblem(data);
        if (data.category === "Web") {
          setWebProblem(true);
        }
      })
      .catch((error) => {
        console.error("문제 데이터를 가져오는 중 오류가 발생했습니다.", error);
      });

    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const fetchProblemData = async () => {
    const problemId = window.location.pathname.split("/").pop();
    const response = await axios.get(
      `http://localhost:8000/api/problems/${problemId}/`
    );
    const data = response.data;
    return data;
  };

  const handleLoadPort = () => {
    const portId = problem.problem_id - 200;
    const Endpoint = `http://localhost:900${portId}`;
    const portEndpoint = `http://localhost:900${portId}/port`;

    fetch(Endpoint, { withCredentials: true })
      .then((response) => {
        if (response.ok) {
          return fetch(portEndpoint, { withCredentials: true });
        } else {
          throw new Error("첫 번째 요청 실패");
        }
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("두 번째 요청 실패");
        }
      })
      .then((data) => {
        Swal.fire({
          title: `할당된 포트 : ${data.port}`,
          icon: "info",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "포트 정보를 가져오는 중 오류가 발생했습니다.",
          text: error.message,
          icon: "warning",
        });
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
      Swal.fire({
        title: "로그인이 필요합니다.",
        icon: "warning",
      }).then(() => {
        window.location.href = "http://localhost:3000/login";
      });
      return;
    }

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Token ${token}`,
    };

    try {
      const response = await axios.post(
        `http://localhost:8000/api/problems/${problem.problem_id}/check-flag/`,
        { flag: inputValue },
        { headers }
      );

      const responseData = response.data;

      if (responseData.message === "문제를 해결하였습니다.") {
        Swal.fire("정답입니다!", "", "success");
      } else if (responseData.message === "이미 문제를 해결한 적이 있습니다.") {
        Swal.fire("이미 해결한 문제입니다.", "", "warning");
      } else {
        Swal.fire("오답입니다.", "", "error");
      }
    } catch (error) {
      Swal.fire("오답입니다.", "", "error");
    }
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  if (!problem) {
    return <div>Loading...</div>;
  }

  return (
    <SubmitSection>
      <div className="qMain">
        <div className="box">
          <div className="qTitle">{problem.title}</div>
          <span className="qScore">{problem.score}&nbsp;점</span>
          <button className="qCategory" type="btn">
            {problem.category}
          </button>
          <div className="qInfoDiv">
            <span className="qInfoTitle">문제 정보</span>
            <span className="qInfoDetail">
              {webProblem ? (
                <StyledLink className="getPortBtn" onClick={handleLoadPort}>
                  문제 정보 불러오기
                </StyledLink>
              ) : (
                <p>{problem.contents}</p>
              )}
            </span>
          </div>
          <div className="qPathDiv">
            <span className="qPathTitle">ssh_path</span>
            <span className="qPathDetail">{problem.ssh_path}</span>
          </div>
        </div>
      </div>
      <section className="submitAnswer">
        <img src="/images/kite.png" alt="kite" className="kite" />
        <span className="submitTitle">KITE를 입력하세요</span>
        <form onSubmit={handleSubmit} className="submitKite">
          <input
            className="inputForm"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Kite(정답)을 입력해 주세요."
          />
          <button className="submitBtn" type="submit">
            정답 제출
          </button>
        </form>
      </section>
    </SubmitSection>
  );
};

export default Submit;
