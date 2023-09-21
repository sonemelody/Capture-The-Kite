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

const LoginBtn = ({ email, pw, setEmail, setPw, token }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (email !== "" && pw !== "") setIsDisabled(false);
    else setIsDisabled(true);
  }, [email, pw]);

  const onClickBtn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/login/",
        {
          email: email,
          password: pw,
        },
        {
          withCredentials: true,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("로그인 성공");
        setEmail("");
        setPw("");
        localStorage.clear();
        localStorage.setItem("token", response.status === 200);
        navigate("/");
      } else {
        localStorage.clear();
        alert("로그인 실패: 아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      alert("로그인 요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <Btn onClick={onClickBtn} disabled={isDisabled} disable={isDisabled}>
      로그인
    </Btn>
  );
};

export default LoginBtn;
