import styled from "styled-components";
import LoginInput from "./LoginInput";
import LoginBtn from "./LoginBtn";
import { useState } from "react";

const LoginBox = styled.div`
  border: 1px solid #dbdbdb;
  height: 402px;
  padding: 0 40px;
  font-family: Pretendard-Regular;
  .loginTitle {
    text-align: center;
    margin-top: 30px;
    font-size: 30px;
    font-family: Pretendard-Bold;
  }
  .orBox {
    margin-top: 30px;
    hr {
      display: inline-block;
      width: 39%;
      border: 1px solid #dbdbdb;
    }
    span {
      display: inline-block;
      width: 10%;
      margin: 5%;
      color: #757575;
      font-size: 13px;
      font-weight: bold;
    }
  }
  .forgetPw {
    a {
      text-decoration: none;
      color: #385285;
      display: block;
      text-align: center;
      font-size: 14px;
      margin-top: 10px;
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  return (
    <LoginBox>
      <div className="loginTitle">로그인</div>
      <LoginInput email={email} setEmail={setEmail} pw={pw} setPw={setPw} />
      <LoginBtn email={email} setEmail={setEmail} pw={pw} setPw={setPw} />
      <div className="orBox">
        <hr />
        <span>&nbsp;&nbsp;또는</span>
        <hr />
      </div>
      <div className="forgetPw">
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    </LoginBox>
  );
};

export default Login;
