import { useLocation } from "react-router-dom";

const Challenge = () => {
  const location = useLocation();
  return (
    <>
      <p style={{ fontSize: "30px", textAlign: "center" }}>문제 표시</p>
    </>
  );
};

export default Challenge;
