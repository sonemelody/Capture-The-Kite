import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../swal.css";

const PasswdBox = styled.div`
  border: 1px solid #dbdbdb;
  height: 552px;
  padding: 0 40px;
  font-family: Pretendard-Regular;
  .passwdTitle {
    text-align: center;
    margin-top: 30px;
    font-size: 30px;
    font-family: Pretendard-Bold;
  }
  .unlock {
    margin-top: 30px;
  }
  .ex {
    margin: 30px 0 30px 0;
  }
  input {
    font-family: Pretendard-Regular;
    display: block;
    border-radius: 4px;
    padding: 10px 0 10px 10px;
    margin-bottom: 18px;
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    background-color: #fafafa;
    border: none;
    border-bottom: 2px solid #dfdfdf;
    &::placeholder {
      font-size: 16px;
      font-weight: 350;
    }
    &:focus {
      outline: none;
      border: 1px solid gray;
    }
  }
`;

const Btn = styled.button`
  width: 100%;
  padding: 15px 0;
  border-radius: 8px;
  background-color: #7d7dec;
  border: none;
  font-weight: bold;
  font-size: 16px;
  color: white;
  transition: background-color 0.4s;
  text-align: center;
  cursor: ${(props) => (props.disable ? "" : "pointer")};
  &:hover {
    background-color: #5c5ce7;
  }
`;

const Passwd = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  const handleResetPassword = () => {
    axios
      .post("http://localhost:8000/user/reset_password/", { email })
      .then((response) => {
        Swal.fire({
          title: response.data.message,
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "이메일 전송 실패",
          text: "올바른 이메일 주소를 입력하세요",
          icon: "warning",
        });
      });
  };

  return (
    <PasswdBox>
      <div className="passwdTitle">비밀번호 찾기</div>
      <div style={{ textAlign: "center" }}>
        <img
          src="/images/unlock.png"
          width="230px"
          height="auto"
          alt="unlock"
          className="unlock"
        />
      </div>
      <div className="ex">
        회원가입 시 등록한 이메일을 입력해주시면 비밀번호를 재설정할 수 있는
        링크를 전송해드립니다.
      </div>
      <input
        type="email"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={handleEmailChange}
      />
      <div>
        <Btn onClick={handleResetPassword}>비밀번호 재설정 이메일 전송</Btn>
      </div>
    </PasswdBox>
  );
};

export default Passwd;
