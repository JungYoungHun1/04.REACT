// import logo from './logo.svg';
import './App.css'
// import Hello from './Hello';
import UseState1 from './UseState1'
// import UseState2 from './UseState2';
// import View from './View';
// import Parent from './Parent';
// import Child from './Child';
// import UseEffect1 from './UseEffect1';
// import UseEffect2 from './UseEffect2';
import React, { useEffect, useState } from 'react'
// import UseRef1 from './UseRef1';
// import UseRef2 from './UseRef2';
// import UseRef3 from './UseRef3';
import News from './News'
import { UseContext1 } from './UseContext1'
import Parent from './Parent'
// import { UseMemo } from 'react';
// import UseMemo1 from './UseMemo1';
// import UseMemo2 from './UseMemo2';
// import UseCallback1 from './UseCallback1';
// import UseCallback2 from './UseCallback2';
// import UseReducer1 from './UseReducer1';
// import UseReducer2 from './UseReducer2';
import Storage from './Storage'
import Inputs from './Inputs'
import CSSModule from './components/CSSModule'
import StyledComponent from './components/StyledComponent'
import Async from './components/Async'
import homeTraining from './homeTraining'
import UserList from './UserList'
import CreateUser from './CreateUser'

// import { UseContext2 } from './UseContext1';

// function App() {
//   const title = "React"
//   const basicStyle = {color: "green", fontSize : '40px'}
//   // const basic = {color: "red", fontSize : '30px'}
//   // const {color} = basic;

//   return (
//     // <View>
//     //   <Hello name="react" color="red"></Hello>
//     //   {/* <Hello name="react" color="blue"></Hello> */}
//     //   <Hello color="yellowgreen" important={true}></Hello>
//     //   {/* <div className="item"></div>
//     //   <div style={basicStyle}>{title}</div> */}
//     // </View>

//     // <UseState1/>
//     <UseState2/>
//   );
// }
function App() {
    // const [work, setWork] = useState(false);
    // const [company, setCompany] = useState("더존");
    // const [color, setColor] = useState("black");
    // const [back, setBack] = useState("white");

    return (
        <div className="App">
            {/* <View>
        <Hello name="react" color="red"></Hello>
        <Hello color="yellowgreen" important={true}></Hello>
      </View> */}

            {/* 부모 - 자식간의 데이터 전달 */}
            {/* <Parent>
        <child></child>
      </Parent> */}
            {/* <UseState1 /> */}
            {/* <UseState2 /> */}

            {/* useEffect1 */}
            {/* <UseEffect1/> */}
            {/* 조건부 랜더링 {true} */}
            {/* {!work ? "" : <UseEffect2/>} */}

            {/* work 버튼을 클릭 했을 때 작업이 실행 되도록 */}
            {/* 1) "작업중 - 콘솔보기"가 출력 되면서
      2) work 누르면 실행 */}

            {/* <button onClick={() => {work ? setWork(false) : setWork(true);}}>work</button> */}

            {/* {useRef} */}
            {/* <UseRef1></UseRef1> */}
            {/* <UseRef2></UseRef2> */}
            {/* <UseRef3></UseRef3> */}

            {/* useContext */}

            {/* <News 
        company={company} 
        setCompany={setCompany}>
      </News> */}
            {/* <UseContext1.Provider value={{company, color, setCompany, setColor}}>
        <News></News>
      </UseContext1.Provider> */}
            {/* <Parent></Parent> */}
            {/* <UseMemo1></UseMemo1> */}
            {/* <UseMemo2></UseMemo2> */}
            {/* <UseCallback1></UseCallback1> */}
            {/* <UseCallback2></UseCallback2> */}
            {/* <UseReducer1></UseReducer1> */}
            {/* <UseReducer2></UseReducer2> */}
            {/* <UseState1></UseState1> */}
            {/* <Storage></Storage> */}
            {/* <Inputs></Inputs> */}
            {/* <CSSModule></CSSModule> */}
            {/* <StyledComponent></StyledComponent> */}
            {/* <Async></Async> */}
            {/* <homeTraining></homeTraining> */}
            {/* <UserList></UserList> */}
            <CreateUser></CreateUser>
        </div>
    )
}

export default App
