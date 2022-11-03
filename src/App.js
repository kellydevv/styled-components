import styled, { keyframes } from "styled-components";

//1.백틱내부에 css코드를 써내면 된다.
//2. SC로 만든 styled.div를 return에서 div처럼 사용해주면 된다.
//(SC는 class명을 만들어 주고 있다.)
//styled.** 이 부분은 html요소이다. styled.h1써도 됨!
const Father = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  //psuedo selector 부모 컴포넌트father안에 있는 h1을 꾸밀 때
  h1 {
    color: violet;
    background-color: black;
  }
  //state selector 위의 h1의 설정을 바꾸고 싶을 때 &==h1
  &:hover {
    font-size: 25px;
  }
`;

//중복되는데 색깔만 바꾸고 싶다면 props를 보내서 ${}에 넣어주면 된다.
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

//div는 블록레벨요소, span은 인라인 요소
const Text = styled.span` 
  color: ${(props) => props.theme.textColor};

`;

// 컴포넌트를 확장 가능하게 만드는 방법
//  컴포넌트를 변경 가능하게 만들기(기존 컴포넌트의 모든 속성을 들고 와서 새로운 속성을 추가하는 것)
// Box의 속성과 같지만 circl에서 border-radius만 추가하고 싶을 때 styled.** 말고 styled(@@)
const Circle = styled(Box)`
  border-radius: 50px;
  background-color: purple;
`;

//컴포넌트의 태그를 바꾸고 싶은데 스타일은 바꾸고 싶지 않을 때(as사용하기)
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
  height: 100px;
`;

//.attrs({})는 input에 전달될 모든 속성을 가진 object를 담을 수 있다
//input의 required가 true이면 아래 모든 input에 console창에 required:true로 나온다.
const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
  height: 100px;
`;

const animationRotation = keyframes`
0% {
transform:rotate(0deg);
border-radius:0px;
}
50% {
transform:rotate(360deg);
border-radius:100px;
}
100% {
transform:rotate(0deg);
border-radius:0px;
}
`;

const Emoji = styled.span`
  font-size: 35px;
`;

const BoxOne = styled.div`
  height: 200px;
  width: 200px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animationRotation} 1s linear infinte;
//SC안에 또다른 SC를 선택하고 싶으면 $ {}을 사용하면 됨 
  ${Emoji} {
    &:hover {
      font-size: 98px;
      opacity: 20%;
    }
    //클릭하면 active===클릭하면 불투명 0.
    &:active {
      opacity: 0;
    }
  }
`;


//theme 기본적으로 모든 색상들을 가지고 있는 object 
//색상을 변경할 때 component의 색을 일일이 바꾸는게 아니라 그냥 theme의 색상만 바꿔주면 된다.

function App() {
  return (
    <Father>
      <Input />
      <BoxOne />
      <Btn>login</Btn>
      {/* /* 버튼을 a(링크)처럼 쓰고 싶을 때 'as'   */}
      <Btn as="a" href="/">
        login
      </Btn>
      <Circle />
      <Box bgColor="yellow" />
      <BoxOne>
        <Emoji>🎆🎇🎆 </Emoji>
      </BoxOne>
      <Emoji>🎆🎇 </Emoji>
      <h1>hello</h1>
    </Father>
  );
}

export default App;
