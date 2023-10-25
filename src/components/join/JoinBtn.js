import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
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
  cursor: ${(props) => (props.disable ? "not-allowed" : "pointer")};
`;

const JoinBtn = ({ email, pw, pwConfirm, nm, nickname }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      email !== "" &&
      pw !== "" &&
      pw === pwConfirm &&
      nm !== "" &&
      nickname !== ""
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, pw, pwConfirm, nm, nickname]);

  const onClickBtn = () => {
    if (!isDisabled) {
      axios
        .post("http://localhost:8000/user/join/", {
          email,
          password: pw,
          password_confirm: pwConfirm,
          name: nm,
          nickname,
        })
        .then((response) => {
          Swal.fire({
            title: `${nm}님! 회원가입을 축하합니다.`,
            icon: "success",
          }).then(() => {
            if (response.status === 200) {
              navigate("/");
            }
          });
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            Swal.fire({
              title: error.response.data.message,
              icon: "warning",
            });
          } else {
            Swal.fire("회원가입 오류가 발생했습니다.", "warning");
          }
        });
    }
  };

  return (
    <Btn onClick={onClickBtn} disabled={isDisabled} disable={isDisabled}>
      회원가입
    </Btn>
  );
};

export default JoinBtn;
