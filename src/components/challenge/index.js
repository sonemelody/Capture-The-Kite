import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

const ChallengeSection = styled.section`
  font-family: Pretendard-Bold;
  .challengeItems {
    margin: 40px 0px 20px 110px;
    .all {
      font-size: 22px;
      color: #5c5ce7;
      border: 1px solid #5c5ce7;
      border-radius: 30px;
      padding: 22px 8px 22px 8px;
    }
    .all:hover {
      color: white;
      background-color: #5c5ce7;
    }
    .sys,
    .linux,
    .web,
    .cryp {
      font-size: 20px;
    }
  }
  .challengeItems > span {
    margin: 30px;
  }
  .sys:hover,
  .linux:hover,
  .web:hover,
  .cryp:hover {
    color: #5c5ce7;
  }
  .contents {
    background-color: #f0f0f5;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 40px;
    padding-bottom: 40px;
    .qCnt {
      font-family: Pretendard-Regular;
      font-size: 15px;
      padding: 50px 0 0 170px;
    }
    .questions {
      width: 1100px;
      height: auto;
      border-radius: 15px;
      background-color: white;
      box-shadow: 3px 3px 5px 3px #dedee6;
      margin: 20px auto;
      padding: 20px;
    }
    table {
      width: 100%;
      border-top: 1px solid #dedee6;
      border-collapse: collapse;
    }
    th,
    td {
      border-bottom: 1px solid #dedee6;
      padding: 15px;
    }
    th {
      font-family: Pretendard-Regular;
      text-align: left;
      color: #c9c9c9;
    }
  }

  .problemList {
    list-style-type: none;
  }
  .problemList > li > span {
    margin: 20px 50px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Challenge = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/problems/");
      setData(response.data);
    } catch (error) {
      console.log("데이터를 불러오는 중에 오류가 발생했습니다.", error);
    }
  };

  const handleClick = (problemId) => {
    setCurrentPage(problemId);
  };

  const ProblemPage = () => {
    return <div></div>;
  };

  return (
    <>
      <ChallengeSection>
        <div className="challengeItems">
          <span className="all">
            <StyledLink to="/challenge">전체 문제</StyledLink>
          </span>
          <span className="sys">
            <StyledLink to="/challenge/sys">시스템해킹</StyledLink>
          </span>
          <span className="linux">
            <StyledLink to="/challenge/linux">리눅스</StyledLink>
          </span>
          <span className="web">
            <StyledLink to="/challenge/web">웹해킹</StyledLink>
          </span>
          <span className="cryp">
            <StyledLink to="/challenge/cryp">암호학</StyledLink>
          </span>
        </div>

        <div className="contents">
          <div className="qCnt">n개의 문제가 있습니다.</div>
          <div className="questions">
            <Outlet />
            <div>
              {currentPage ? (
                <ProblemPage problemId={currentPage} />
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>문제 제목</th>
                      <th>배점</th>
                      <th>분야</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((problem) => (
                      <tr
                        key={problem.problem_id}
                        onClick={() => handleClick(problem.problem_id)}
                      >
                        <td>
                          <StyledLink to={`/submit/${problem.problem_id}`}>
                            {problem.problem_id}
                          </StyledLink>
                        </td>
                        <td>
                          <StyledLink to={`/submit/${problem.problem_id}`}>
                            {problem.title}
                          </StyledLink>
                        </td>
                        <td>
                          <StyledLink to={`/submit/${problem.problem_id}`}>
                            {problem.score}
                          </StyledLink>
                        </td>
                        <td>
                          <StyledLink to={`/submit/${problem.problem_id}`}>
                            {problem.category}
                          </StyledLink>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </ChallengeSection>
    </>
  );
};

export default Challenge;
