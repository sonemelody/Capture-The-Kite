import styled from "styled-components";
import { useState, useEffect } from "react";

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
  .qFileDiv {
    margin: 30px 0;
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
`;

const Submit = () => {
  const [problem, setProblem] = useState(null);
  const [inputValue, setInputValue] = useState("");
  let score = 0;

  useEffect(() => {
    fetchProblemData()
      .then((data) => {
        setProblem(data);
      })
      .catch((error) => {
        console.error("문제 데이터를 가져오는 중 오류가 발생했습니다.", error);
      });
  }, []);

  const fetchProblemData = async () => {
    const problemId = window.location.pathname.split("/").pop();
    const response = await fetch(
      `http://localhost:8000/api/problems/${problemId}/`
    );
    const data = await response.json();
    return data;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === problem.flag) {
      alert("정답입니다!");
      score = score + problem.score;
    } else {
      alert("오답입니다!");
    }
    console.log(score);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  if (!problem) {
    return <div>Loading...</div>; // 데이터를 가져오는 동안 로딩 표시
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
              <p />
              {problem.contents}
            </span>
          </div>
          <div className="qPathDiv">
            <span className="qPathTitle">ssh_path</span>
            <span className="qPathDetail">{problem.ssh_path}</span>
          </div>
          <div className="qFileDiv">
            <span className="qFileTitle">문제 파일</span>
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
