import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

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
    height: auto;
    border-radius: 15px;
    background-color: white;
    box-shadow: 3px 3px 5px 3px #dedee6;
    margin: 0px auto;
    padding: 20px;
  }
  table {
    width: 100%;
    border-top: 1px solid #dedee6;
    border-collapse: collapse;
  }
  th,
  td {
    border-bottom: 1px solid #dedee6;
    padding: 15px;
  }
  th {
    text-align: left;
    color: #c9c9c9;
  }
`;

const Rank = () => {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const linuxRankings = await axios.get(
        "http://127.0.0.1:8000/api/ranking/Linux/"
      );
      const cryptoRankings = await axios.get(
        "http://127.0.0.1:8000/api/ranking/Crypto/"
      );
      const webRankings = await axios.get(
        "http://127.0.0.1:8000/api/ranking/Web/"
      );
      const systemRankings = await axios.get(
        "http://127.0.0.1:8000/api/ranking/System/"
      );

      const combinedRankings = [
        ...linuxRankings.data,
        ...cryptoRankings.data,
        ...webRankings.data,
        ...systemRankings.data,
      ];

      const scoreMap = new Map();
      combinedRankings.forEach((item) => {
        if (scoreMap.has(item.user)) {
          scoreMap.set(item.user, scoreMap.get(item.user) + item.score);
        } else {
          scoreMap.set(item.user, item.score);
        }
      });

      const sortedRankings = [...scoreMap.entries()].map(([user, score]) => ({
        user,
        score,
      }));
      sortedRankings.sort((a, b) => b.score - a.score);

      setRankings(sortedRankings);
      setLoading(false);
    } catch (error) {
      console.error("랭킹 정보를 불러오는 중에 오류가 발생했습니다.", error);
    }
  };

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
        {loading ? (
          <p>Loading...</p>
        ) : (
          rankings.slice(0, 3).map((rank, index) => (
            <div className="rankItemsTop" key={index}>
              <img
                src={`/images/${getMedalImage(index)}.png`}
                width="170px"
                height="auto"
                style={{ display: "block", margin: "0 auto" }}
                alt={getMedalAlt(index)}
              />
              <div className="profileName">{rank.user}</div>
              <div className="score">{rank.score}점</div>
            </div>
          ))
        )}
      </div>
      <div className="rankOthers">
        <div className="rankItemsOthers">
          <table>
            <thead>
              <tr>
                <th>순위</th>
                <th>닉네임</th>
                <th>점수</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                rankings.slice(3).map((rank, index) => (
                  <tr key={index}>
                    <td>{index + 4}</td>
                    <td>{rank.user}</td>
                    <td>{rank.score}점</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </RankSection>
  );
};

export default Rank;

function getMedalImage(index) {
  const medals = ["gold-medal", "silver-medal", "bronze-medal"];
  return index < 3 ? medals[index] : "";
}

function getMedalAlt(index) {
  const altText = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  return index < 3 ? altText[index] : "";
}
