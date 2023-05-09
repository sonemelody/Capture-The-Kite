import styled from "styled-components";
import { Link } from "react-router-dom";

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
      font-family: Pretendard-Bold;
      width: 1100px;
      height: auto;
      border-radius: 15px;
      background-color: white;
      box-shadow: 3px 3px 5px 3px #dedee6;
      margin: 20px auto;
      display: grid;
      grid-template-columns: repeat(4, auto);
      grid-gap: 30px;
      padding: 20px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Challenge = () => {
  return (
    <ChallengeSection>
      <div className="challengeItems">
        {/*App.js에서 라우터 연결 필요*/}
        <span className="all">
          <StyledLink to="/all">전체 문제</StyledLink>
        </span>
        <span className="sys">
          <StyledLink to="/sys">시스템해킹</StyledLink>
        </span>
        <span className="linux">
          <StyledLink to="/linux">리눅스</StyledLink>
        </span>
        <span className="web">
          <StyledLink to="/web">웹해킹</StyledLink>
        </span>
        <span className="cryp">
          <StyledLink to="/cryp">암호학</StyledLink>
        </span>
      </div>

      <div className="contents">
        <div className="qCnt">n개의 문제가 있습니다.</div>
        <div className="questions">
          <span>문제 번호</span>
          <span>난이도</span>
          <span>문제 제목</span>
          <span>분야</span>
        </div>
      </div>
    </ChallengeSection>
  );
};

export default Challenge;
