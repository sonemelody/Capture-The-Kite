import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";

const LoginSection = styled.div`
  width: 400px;
  margin: 50px auto 0;
  min-height: 600px;
`;

const LoginSec = () => {
  return (
    <LoginSection>
      <Login />
      <Register />
    </LoginSection>
  );
};

export default LoginSec;
