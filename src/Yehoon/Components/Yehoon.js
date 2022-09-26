import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { up, down, go } from "../Slice/NumberSlice";
import { getData } from "../Slice/DataSlice";

const Box = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  gap: 50px;

  & > button {
    width: 100px;
    height: 50px;
  }
`;

const Yehoon = () => {
  // store에 저장한 slice들의 데이터를 식별, 사용할 수 있게 useSelector 사용
  // 콘솔로 한번씩 찍어보는걸 권장
  // const storeData = useSelector((store) => store);
  // console.log(storeData);

  // 구조분해 할당을 사용하는게 더 좋고 편함
  const { number } = useSelector((store) => store.yehoonNumberSlice);
  const { data, status } = useSelector((store) => store.yehoonData);

  // slice에서 만든 함수를 실행시키도록 명령을 내리는 useDisPatch 사용
  const disPatch = useDispatch();

  return (
    <>
      <Box>
        <button onClick={() => disPatch(up())}>+1</button>

        {/* 구조 분해 할당을 안한다면
        <h1>{storeData.number.number}</h1> */}
        {/* 한다면 */}
        <h1>{number}</h1>
        <button onClick={() => disPatch(down())}>-1</button>

        {/* action.payload 활용 */}
        <button onClick={() => disPatch(go(3))}>숫자로 이동</button>

        {/* 또 다른 예시 (객체로 넘기기) */}
        {/* <button onClick={() => disPatch(go({number : 3}))}>숫자로 이동</button> */}
        <button onClick={() => disPatch(getData())}>비동기 통신</button>
        <div>비동기 결과는 : {data} </div>
        <div>비동기 단계는 : {status} </div>
      </Box>
    </>
  );
};

export default Yehoon;
