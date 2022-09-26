// 이거 오류남
// import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

// 아래껀 오류 안남
import { createSlice } from "@reduxjs/toolkit/";

const NumberSlice = createSlice({
  // 해당 모듈의 이름
  name: "number",
  // 해당 모듈의 초기값
  initialState: { number: 0 },
  // reducers들의 모음 (다양한 이벤트)
  reducers: {
    up: (state, action) => {
      state.number = state.number + 1;
      // state.number += 1이랑 똑같음
    },
    down: (state, action) => {
      state.number = state.number - 1;
      // state.number += 1이랑 똑같음
    },
    go: (state, action) => {
      state.number = action.payload;
      // action.payload란 disPatch( go () ) < 에서 go ()안에 있는 인수를 의미한다
      // ex -> disPatch(go(1)) = action.payload는 1
      // ex -> disPatch( go ( {number:1,text:'하이'} ) )처럼 인수를 객체로 넘길수도 있다
      // action.payload.number, action.payload.text처럼 사용이 가능하다
    },
  },
});

// 객체의 메서드 함수이기 때문에 객체 구조분해 할당으로 export 한다
export const { up, down, go } = NumberSlice.actions;
// store (전역으로 slice를 관리해주는 상점)에서 NumberSlice라는 것을 인식할 수 있게 export한다
export default NumberSlice.reducer;
