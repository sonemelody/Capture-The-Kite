import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../swal.css";

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
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        Swal.fire({
          title: "로그인 성공!",
          text: "CTK에 오신 것을 환영합니다!",
          icon: "success",
        }).then(() => {
          setEmail("");
          setPw("");
          window.location.href = "http://localhost:3000/";
        });
      } else {
        localStorage.clear();
        Swal.fire({
          title: "로그인 실패",
          text: "아이디 또는 비밀번호가 일치하지 않습니다.",
          icon: "warning",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "로그인 실패",
        text: "아이디 또는 비밀번호가 일치하지 않습니다.",
        icon: "warning",
      });
    }
  };

  return (
    <div>
      <Btn onClick={onClickBtn} disabled={isDisabled} disable={isDisabled}>
        로그인
      </Btn>
    </div>
  );
};

export default LoginBtn;
