import styled from "styled-components";

const RankSection = styled.section`
  background-color: #caeeb2;
  .rankHeader {
    font-family: Pretendard-Bold;
    font-size: 40px;
    padding: 30px 110px 0 110px;
    display: flex;
  }
  .rankHeader > img {
    display: flex;
    margin-left: auto;
    margin-right: 30px;
  }
  .rankTop {
    background-color: #f0f0f5;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 30px;
    justify-items: center;
    justify-content: center;
    padding: 90px;
  }
  .rankItemsTop {
    font-family: Pretendard-Bold;
    width: 310px;
    height: 280px;
    border-radius: 15px;
    background-color: white;
    display: inline-block;
    position: relative;
    box-shadow: 3px 3px 5px 3px #dedee6;
  }
  .profilePic {
    width: 150px;
    height: 150px;
    border-radius: 75px;
    background-color: lightgray;
    display: inline-block;
    position: absolute;
    top: 40px;
    left: 60px;
  }
  .profileName {
    font-size: 30px;
    display: block;
    position: absolute;
    bottom: 27px;
    margin: 20px;
  }
  .score {
    font-size: 25px;
    display: block;
    position: absolute;
    bottom: 12px;
    margin-left: 20px;
  }
  .rankOthers {
    background-color: #f0f0f5;
    padding: 0 0 90px 0;
  }
  .rankItemsOthers {
    font-family: Pretendard-Bold;
    width: 990px;
    height: 280px;
    border-radius: 15px;
    background-color: white;
    box-shadow: 3px 3px 5px 3px #dedee6;
    margin: 0 auto;

    .category {
      margin: 30px;
    }
  }
`;

const Rank = () => {
  return (
    <RankSection>
      <div className="rankHeader">
        전체 랭킹
        <img
          src="/images/trophy.png"
          width="270px"
          height="auto"
          alt="trophy"
        />
      </div>
      <div className="rankTop">
        <div className="rankItemsTop">
          <img
            src="/images/gold-medal.png"
            width="55px"
            height="auto"
            alt="gold"
          />
          <div className="profilePic"></div>
          <div className="profileName">닉네임</div>
          <div className="score">점수</div>
        </div>
        <div className="rankItemsTop">
          <img
            src="/images/silver-medal.png"
            width="55px"
            height="auto"
            alt="silver"
          />
          <div className="profilePic"></div>
          <div className="profileName">닉네임</div>
          <div className="score">점수</div>
        </div>
        <div className="rankItemsTop">
          <img
            src="/images/bronze-medal.png"
            width="55px"
            height="auto"
            alt="bronze"
          />
          <div className="profilePic"></div>
          <div className="profileName">닉네임</div>
          <div className="score">점수</div>
        </div>
      </div>
      <div className="rankOthers">
        <div className="rankItemsOthers">
          <span className="category">순위</span>
          <span className="category">닉네임</span>
          <span className="category">점수</span>
        </div>
      </div>
    </RankSection>
  );
};

export default Rank;
