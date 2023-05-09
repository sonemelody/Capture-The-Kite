import styled from "styled-components";

const FooterSection = styled.header`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  border-top: 1px solid #e2e2e2;
  background-color: #dedee6;

  div {
    margin: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div>capstone design</div>
      <div>이종연, 김도연</div>
    </FooterSection>
  );
};

export default Footer;
