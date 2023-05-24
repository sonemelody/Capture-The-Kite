import styled from "styled-components";

const InputBox = styled.div`
  margin-top: 30px;
  input {
    display: block;
    border-radius: 4px;
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    width: 100%;
    background-color: #fafafa;
    border: none;
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
  .pw {
    margin-bottom: 12px;
  }
  .pwConfirm {
    margin-bottom: 18px;
  }
`;

const JoinInput = ({ email, pw, pwConfirm, setEmail, setPw, setPwConfirm }) => {
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <InputBox>
      <input
        type="text"
        className="email"
        placeholder="이메일을 입력해주세요"
        onChange={onChangeEmail}
        value={email}
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
