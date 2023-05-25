import styled from "styled-components";
import { useEffect, useState } from "react";

const MainSection = styled.div`
  .mainPart {
    font-family: Pretendard-ExtraBold;
    font-size: 50px;
    text-align: center;
    padding: 100px 0;
  }
  .mainPart > div {
    margin: 30px;
  }

  .content1 {
    margin: 50px 200px;
    text-align: right;
    position: relative;
    font-family: Pretendard-Regular;
  }
  .box1 {
    background-color: black;
    width: 270px;
    height: 200px;
    position: absolute;
    left: 130px;
    top: 80px;
    color: white;
    text-align: left;
    padding: 80px 30px 0 30px;
  }
  .content2 {
    margin: 180px 200px;
    position: relative;
    font-family: Pretendard-Regular;
  }
  .box2 {
    background-color: black;
    width: 270px;
    height: 200px;
    position: absolute;
    right: 130px;
    top: 80px;
    color: white;
    text-align: left;
    padding: 80px 30px 0 30px;
  }
`;

const Main = () => {
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;

      const image1TriggerPosition = windowHeight * 0.5;
      const image2TriggerPosition = windowHeight * 1.2;

      if (scrollY > image1TriggerPosition) {
        setShowImage1(true);
      } else {
        setShowImage1(false);
      }

      if (scrollY > image2TriggerPosition) {
        setShowImage2(true);
      } else {
        setShowImage2(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainSection>
      <div className="mainPart">
        <div>Capture the Kites!</div>
        <p />
        <div>
          Online Wargame <br />+ Judgement
        </div>
        <p />
        <div>Play and Enjoy with CTK</div>
      </div>
      <div className="contents">
        <div className={`content1 ${showImage1 ? "fade-in" : ""}`}>
          <img
            src="/images/keyboard1.jpeg"
            width="75%"
            height="75%"
            alt="Keyboard 1"
          />
          {showImage1 && (
            <div className="box1">
              <div style={{ fontSize: "28px" }}>Online Wargame</div>
              <span
                className="line1"
                style={{ borderBottom: "4px solid #5c5ce7" }}
              >
                &emsp;&emsp;&emsp;
              </span>
              <p />
              <div>
                온라인에서 즐기는 해킹과 보안 문제!
                <br />
                유저 간 경쟁을 통한 실력 향상
              </div>
            </div>
          )}
        </div>
        <div className={`content2 ${showImage2 ? "fade-in" : ""}`}>
          <img src="/images/cyber.jpg" width="75%" height="75%" alt="Cyber" />
          {showImage2 && (
            <div className="box2">
              <div style={{ fontSize: "28px" }}>CTK</div>
              <span
                className="line2"
                style={{ borderBottom: "4px solid #5c5ce7" }}
              >
                &emsp;&emsp;&emsp;
              </span>
              <p />
              <div>
                Capture the Kites
                <br />
                kite를 찾아 점수를 획득하자!
              </div>
            </div>
          )}
        </div>
      </div>
    </MainSection>
  );
};

export default Main;
