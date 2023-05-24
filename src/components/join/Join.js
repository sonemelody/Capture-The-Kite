import styled from "styled-components";
import JoinInput from "./JoinInput";
import JoinBtn from "./JoinBtn";
import { useState } from "react";

const JoinBox = styled.div`
  border: 1px solid #dbdbdb;
  height: 402px;
  padding: 0 40px;
  font-family: Pretendard-Regular;
  .joinTitle {
    text-align: center;
    margin-top: 30px;
    font-size: 30px;
    font-family: Pretendard-Bold;
  }
`;

const Join = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  return (
    <JoinBox>
      <div className="joinTitle">회원가입</div>
      <JoinInput
        email={email}
        setEmail={setEmail}
        pw={pw}
        setPw={setPw}
        pwConfirm={pwConfirm}
        setPwConfirm={setPwConfirm}
      />
      <JoinBtn
        email={email}
        setEmail={setEmail}
        pw={pw}
        setPw={setPw}
        pwConfirm={pwConfirm}
        setPwConfirm={setPwConfirm}
      />
    </JoinBox>
  );
};

export default Join;
