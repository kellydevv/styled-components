import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';

//다크,라이트모드 바꾸려면property의 이름이 똑같아야 함(textColor가 dark/light에서 같은 것 처럼)
const darkTheme = {
textColor:"whitesmoke",
backgroundColor: "#111",
};

const lightTheme = {
  textColor:"#111",
  backgroundColor: "whitesmoke",
  };



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ThemeProvider theme={lightTheme}>
<App />
</ThemeProvider>
);

