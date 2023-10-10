import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  .challengeItems > span:hover {
    color: #5c5ce7;
    cursor: pointer;
  }
  .selectedCategory {
    color: #5c5ce7;
    font-size: 20px;
  }
  .selectedAll {
    font-size: 22px;
    border: 1px solid #5c5ce7;
    border-radius: 30px;
    padding: 22px 8px 22px 8px;
    color: white;
    background-color: #5c5ce7;
  }
  .selectedAll:hover {
    color: #5c5ce7;
    background-color: white;
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
      font-size: 16px;
      margin: 40px 0 0 150px;
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
      text-align: left;
      color: #c9c9c9;
    }
    .th-no {
      width: 15%;
    }

    .th-title {
      width: 40%;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Challenge = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default category is 'all'

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

  const filterData = () => {
    if (selectedCategory === "all") {
      return data;
    } else {
      return data.filter((problem) => problem.category === selectedCategory);
    }
  };

  const getCategoryProblemCount = (category) => {
    if (category === "all") {
      return data.length;
    } else {
      return data.filter((problem) => problem.category === category).length;
    }
  };

  const ProblemPage = () => {
    return <div></div>;
  };

  return (
    <>
      <ChallengeSection>
        <div className="challengeItems">
          <span
            className={selectedCategory === "all" ? "selectedAll" : "all"}
            onClick={() => setSelectedCategory("all")}
          >
            전체 문제
          </span>
          <span
            className={
              selectedCategory === "System" ? "selectedCategory" : "sys"
            }
            onClick={() => setSelectedCategory("System")}
          >
            시스템
          </span>
          <span
            className={
              selectedCategory === "Linux" ? "selectedCategory" : "linux"
            }
            onClick={() => setSelectedCategory("Linux")}
          >
            리눅스
          </span>
          <span
            className={selectedCategory === "Web" ? "selectedCategory" : "web"}
            onClick={() => setSelectedCategory("Web")}
          >
            웹
          </span>
          <span
            className={
              selectedCategory === "Crypto" ? "selectedCategory" : "cryp"
            }
            onClick={() => setSelectedCategory("Crypto")}
          >
            암호학
          </span>
        </div>
        <div className="contents">
          <div className="qCnt">
            총 {getCategoryProblemCount(selectedCategory)}개의 문제가 있습니다.
          </div>
          <div className="questions">
            <div>
              {currentPage ? (
                <ProblemPage problemId={currentPage} />
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th className="th-no">No.</th>
                      <th className="th-title">문제 제목</th>
                      <th className="th-score">배점</th>
                      <th className="th-category">분야</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterData().map((problem) => (
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
