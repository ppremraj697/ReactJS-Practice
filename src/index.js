import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FuncComp from './components/FuncComp';
import ClassComp from './components/ClassComp';
import Counter from './components/Counter';
// import './index.css'

function MyApp() {
  return (
    <h1>Custom React</h1>
  );
}

//Behind the scene parsing of the JSX by React
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com', target: '_blank'
  },
  'Click me to Visit Google'
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <MyApp />
    <FuncComp />
    <ClassComp />
    <Counter />
  </>
  // reactElement
);