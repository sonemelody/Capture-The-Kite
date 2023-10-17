import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const PasswdBox = styled.div`
  border: 1px solid #dbdbdb;
  height: 582px;
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
  const [message, setMessage] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(inputEmail)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const handleResetPassword = () => {
    if (validEmail) {
      axios
        .post("http://localhost:8000/user/reset_password/", { email })
        .then((response) => {
          setMessage(response.data.message);
        })
        .catch((error) => {
          console.error(error);
          setMessage("비밀번호 재설정 이메일 전송에 실패했습니다.");
        });
    } else {
      setMessage("올바른 이메일 주소를 입력하세요.");
    }
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
        <Btn onClick={handleResetPassword} disabled={!validEmail}>
          비밀번호 재설정 이메일 전송
        </Btn>
      </div>
      <p>{message}</p>
    </PasswdBox>
  );
};

export default Passwd;
