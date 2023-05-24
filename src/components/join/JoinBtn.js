import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Btn = styled.button`
  width: 100%;
  padding: 15px 0;
  border-radius: 8px;
  background-color: ${(props) => (props.disable ? "#7d7dec" : "#5c5ce7")};
  border: none;
  font-weight: bold;
  font-size: 16px;
  color: white;
  transition: background-color 0.4s;
  text-align: center;
  cursor: ${(props) => (props.disable ? "" : "pointer")};
`;

const JoinBtn = ({ email, pw, pwConfirm, setEmail, setPw, setPwConfirm }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (email !== "" && pw !== "") setIsDisabled(false);
    else setIsDisabled(true);
  }, [email, pw]);
  const onClickBtn = () => {
    if (pw !== pwConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      setPw("");
      setPwConfirm("");
    } else {
      alert("정상적으로 회원가입 되었습니다.");
      navigate("/");
    }
  };
  return (
    <Btn onClick={onClickBtn} disabled={isDisabled} disable={isDisabled}>
      회원가입
    </Btn>
  );
};

export default JoinBtn;
