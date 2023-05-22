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
  color: white;
  transition: background-color 0.4s;
  text-align: center;
  cursor: ${(props) => (props.disable ? "" : "pointer")};
`;

const LoginBtn = ({ email, pw, setEmail, setPw }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (email !== "" && pw !== "") setIsDisabled(false);
    else setIsDisabled(true);
  }, [email, pw]);
  const onClickBtn = () => {
    if (email === "doyeon" && pw === "1234") {
      alert("로그인 성공");
      navigate("/");
      setEmail("");
      setPw("");
    } else alert("로그인 실패");
  };
  return (
    <Btn onClick={onClickBtn} disabled={isDisabled} disable={isDisabled}>
      로그인
    </Btn>
  );
};

export default LoginBtn;
