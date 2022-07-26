import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Components/Header.css';
import './Components/Title.css';
import './App.css';
import './Components/Content.css';
import './Components/Footer.css';
import Header from './Components/Header';
import Title from './Components/Title';
import App from './App';
import Content from './Components/Content';
import Footer from './Components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Title />
    <App />
    <Content />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
