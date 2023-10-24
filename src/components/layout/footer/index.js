import styled from "styled-components";

const FooterSection = styled.footer`
  width: 100%;
  height: 110px;
  margin: 0 auto;
  border-top: 1px solid #e2e2e2;
  background-color: #dedee6;

  .contents {
    margin: 20px;
  }
  .title {
    font-family: Pretendard-Bold;
  }
  .name1,
  .name2 {
    font-family: Pretendard-Regular;
    margin-top: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="contents">
        <div className="title">SEOUL TECH - 2023 CAPSTONE DESIGN</div>
        <div className="name1"> Back-end: 이종연</div>
        <div className="name2"> Front-end: 김도연</div>
      </div>
    </FooterSection>
  );
};

export default Footer;
