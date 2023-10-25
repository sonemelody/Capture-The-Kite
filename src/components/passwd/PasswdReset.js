import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const PasswdResetBox = styled.div`
  width: 400px;
  margin: 50px auto 50px;
  min-height: 600px;
  .content {
    border: 1px solid #dbdbdb;
    height: 292px;
    padding: 0 40px;
    font-family: Pretendard-Regular;
  }
  .pwTitle {
    text-align: center;
    margin: 30px 0;
    font-size: 30px;
    font-family: Pretendard-Bold;
  }
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
  .pw {
    margin-bottom: 12px;
  }
  .pw-re {
    margin-bottom: 18px;
  }
`;

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

const PasswdReset = () => {
  const { uid, token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (newPassword !== "" && confirmNewPassword !== "") setIsDisabled(false);
    else setIsDisabled(true);
  }, [newPassword, confirmNewPassword]);

  const handleResetPassword = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/user/reset_password/${uid}/${token}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            new_password: newPassword,
            confirm_new_password: confirmNewPassword,
          }),
        }
      );

      if (newPassword !== confirmNewPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      if (response.status === 200) {
        alert("비밀번호가 성공적으로 변경되었습니다.");
      } else {
        const data = await response.json();
        setMessage(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PasswdResetBox>
      <div className="content">
        <div className="pwTitle">비밀번호 재설정</div>
        <input
          type="password"
          className="pw"
          placeholder="변경할 새로운 비밀번호를 입력해주세요"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          className="pw-re"
          placeholder="비밀번호를 다시 입력해주세요"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        <Btn
          onClick={handleResetPassword}
          disabled={isDisabled}
          disable={isDisabled}
        >
          비밀번호 재설정
        </Btn>
        {message && <p>{message}</p>}
      </div>
    </PasswdResetBox>
  );
};

export default PasswdReset;
