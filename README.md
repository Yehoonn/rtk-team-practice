# rtk 각자 연습해보기

사용한 라이브러리 : redux react-redux @reduxjs/toolkit react-router-dom, styled-components, express

진행 방법

1. git 클론후 프로젝트를 시작하기 전에 npm install을 해준다
2. npm start를 해본다 -> 각자 이름을 클릭하면 미리 설정해준 js 파일을 보여주게 설정해뒀음
3. 각자 이름안의 Components -> 이름.js를 코딩해보면서 redux를 사용해본다
4. Slice또한 각자 폴더의 Slice에 js로 생성
5. 등록은 src/Store/Store.js에서 가능
6. 상시 대기중이니까 언제든지 물어보세용~ (처음부터 잘하면 천재임)
7. Yehoon 폴더에 있는 js 파일 참고 하세용~ (주석으로 설명 달아둠)
8. 예시로 만들어둔 결과도 참고 하세용~

요구사항

1. 리덕스의 데이터 가져오기
2. 리덕스에서 가져온 데이터를 slice의 reducers에서 만든 이벤트로 변경해보기
3. createAsyncThunk와 extraReducers을 사용하여 비동기 통신해보기

궁극적인 목표 ★★★

리덕스 툴킷의 기능 (createSlice,configureStore,createAsyncThunk,useSelector,useDispatch)을 사용해보고 이해한다

간단한 설명

createSlice => 전역으로 사용할 수 있고 관리가 가능한 모듈을 생성한다

예시 -> const newSlice = createSlice({
name: 'newSlice',
initialState: {number : 0, text : "하이"},
reducers: {
up: (state,action) =>{
state.number += 1;
}
}
})

name : 해당 모듈의 이름을 작성합니다.
initialState : 해당 모듈의 초기값을 세팅합니다.
reducers : 리듀서를 작성합니다. 이때 해당 리듀서의 키값으로 액션함수가 자동으로 생성됩니다.
extraReducers : 액션함수가 자동으로 생성되지 않는 별도의 액션함수가 존재하는 리듀서를 정의합니다. (선택 옵션 입니다.)

configureStore => 실질적으로 상태관리가 가능하게 해주는 리덕스의 대장을 생성(프로젝트당 하나가 규칙)한다

예시 -> const store = configureStore({
reducer : {각자 만든 slice, ex) yehoon:yehoonSlice},
devTools: process.env.NODE_ENV !== 'production', // devTool 의 옵션을 선택합니다.

  <!-- middleware: [...middlewares], // 미들웨어를 정의해주도록 합니다. -->

})

createAsyncThunk => rtk에서 사용하는 비동기 통신 (미들웨어) 함수

예시는 Yehoon -> Slice -> DataSlice에 있다

useSelector => store의 reducer에 있는 데이터를 식별하게 해줌

useDispatch => slice에서 정의한 이벤트 함수들을 실행시킬수 있도록 명령을 내리는 redux의 내장 함수
