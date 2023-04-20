import { useLocation } from "react-router-dom";

const Rank = () => {
  const location = useLocation();
  return (
    <>
      <p style={{ fontSize: "30px", textAlign: "center" }}>랭킹 표시</p>
    </>
  );
};

export default Rank;
