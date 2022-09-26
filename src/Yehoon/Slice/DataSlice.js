import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";
import axios from "axios";

// 데이터 통신을 위한 함수 (리덕스 툴킷의 createAsyncThunk 기능을 사용) -> redux-Thunk

const getData = createAsyncThunk("data/getData", async () => {
  return await axios
    .get("https://api.countapi.xyz/hit/namespace/key")
    .then(async (value) => {
      return await value.data;
    });
});

const DataSlice = createSlice({
  name: "data",

  // data엔 비동기 통신으로 얻은 데이터를 담을 예정
  // status는 비동기 통신의 상태를 나타냄 (pending,fulfilled,reject) => 모르겠으면 promise 참고

  initialState: { data: "", status: "wait" },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      // getData라는 비동기 통신 함수의 return값 (데이터)가 action.payload에 담겨서 온다
      // 통신에 성공하면 initialState의 data에 통신에서 얻은 데이터를 할당함
      state.data = action.payload.value;
      state.status = "fulfilled";
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

// getData (비동기 통신)함수를 이벤트로 사용할 수 있게 export
export { getData };

// 스토어에 저장하기 위해 export
export default DataSlice.reducer;
