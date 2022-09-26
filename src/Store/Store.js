import { configureStore } from "@reduxjs/toolkit";
import NumberSlice from "../Yehoon/Slice/NumberSlice";
import DataSlice from "./../Yehoon/Slice/DataSlice";

// store라는 변수에 configureStore를 사용하여 store 지정(할당)
const store = configureStore({
  // 제작한 slice들을 reducer에 모음
  // useSelector로 호출할때 number가 키로 인식됨
  // ex -> useSelector((store)=> store.number) = NumberSlice의 initialState 객체임
  // 여기에 자기가 만든 Slice를 추가해서 사용해보세요~
  reducer: { yehoonNumberSlice: NumberSlice, yehoonData: DataSlice },
  // redux가 어떻게 작동하는지 브라우저에서 확인할 수 있는 devTools 옵션 설정
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
