import styled from "styled-components";
import { useState } from "react";

const InputBox = styled.div`
  margin-top: 30px;
  input {
    font-family: Pretendard-Regular;
    display: block;
    border-radius: 4px;
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    width: 100%;
    font-size: 14px;
    background-color: #fafafa;
    border: 1px solid #dfdfdf;
    &::placeholder {
      font-size: 12px;
      font-weight: 350;
    }
    &:focus {
      outline: none;
      border: 1px solid gray;
    }
  }
  .email {
    margin-bottom: 12px;
  }
  .nm {
    margin-bottom: 12px;
  }
  .nickname {
    margin-bottom: 12px;
  }
  .pw {
    margin-bottom: 12px;
  }
  .pwConfirm {
    margin-bottom: 18px;
  }
  .email.error {
    border: 1px solid red;
    font-size: 14px;
    color: red;
  }
  .error {
    color: red;
    font-size: 12px;
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;

const JoinInput = ({
  email,
  pw,
  pwConfirm,
  nm,
  nickname,
  setEmail,
  setPw,
  setPwConfirm,
  setNm,
  setNickname,
}) => {
  const [emailError, setEmailError] = useState("");

  const onChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (newEmail === "") {
      setEmailError("");
    } else if (!emailRegex.test(newEmail)) {
      setEmailError("⚠️ 올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailError("");
    }
  };

  return (
    <InputBox>
      <input
        type="text"
        className={`email ${emailError ? "error" : ""}`}
        placeholder="이메일을 입력해주세요"
        onChange={onChangeEmail}
        value={email}
      />
      {emailError && <div className="error">{emailError}</div>}
      <input
        type="text"
        className="nm"
        placeholder="이름을 입력해주세요"
        onChange={(e) => {
          setNm(e.target.value);
        }}
        value={nm}
      />
      <input
        type="text"
        className="nickname"
        placeholder="닉네임을 입력해주세요"
        onChange={(e) => {
          setNickname(e.target.value);
        }}
        value={nickname}
      />
      <input
        type="password"
        className="pw"
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => {
          setPw(e.target.value);
        }}
        value={pw}
      />
      <input
        type="password"
        className="pwConfirm"
        placeholder="비밀번호를 다시 입력해주세요"
        onChange={(e) => {
          setPwConfirm(e.target.value);
        }}
        value={pwConfirm}
      />
    </InputBox>
  );
};

export default JoinInput;
