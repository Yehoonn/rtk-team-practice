import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 2rem;
  gap: 50px;
`;

const MainPage = () => {
  return (
    <>
      <Box>
        <Link to="yehoon">강예훈</Link>

        <Link to="sangho">이상호</Link>

        <Link to="geunsoo">김근수</Link>

        <Link to="sanghee">양상희</Link>

        <Link to="yeonju">정연주</Link>
      </Box>
    </>
  );
};

export default MainPage;
