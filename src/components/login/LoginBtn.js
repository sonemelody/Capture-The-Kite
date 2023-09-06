import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

const LoginBtn = ({ email, pw, setEmail, setPw }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (email !== "" && pw !== "") setIsDisabled(false);
    else setIsDisabled(true);
  }, [email, pw]);

  const onClickBtn = async () => {
    try {
      const response = await axios.get("http://localhost:8000/admin/login/", {
        email,
        password: pw,
      });

      if (response.status === 200) {
        // 로그인 성공
        alert("로그인 성공");
        navigate("/");
        setEmail("");
        setPw("");
      } else {
        // 로그인 실패
        alert("로그인 실패");
      }
    } catch (error) {
      // 요청 실패 또는 오류 처리
      console.error("로그인 요청 오류:", error);
    }
  };

  return (
    <Btn onClick={onClickBtn} disabled={isDisabled} disable={isDisabled}>
      로그인
    </Btn>
  );
};

export default LoginBtn;
