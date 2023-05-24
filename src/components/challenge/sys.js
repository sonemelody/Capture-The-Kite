import styled from "styled-components";

const SysSection = styled.section`
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

const Sys = () => {
  return <SysSection></SysSection>;
};

export default Sys;
