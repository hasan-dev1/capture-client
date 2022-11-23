import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@splidejs/react-splide/css";
import "react-photo-view/dist/react-photo-view.css";
import {PhotoProvider} from 'react-photo-view'
import UserContext from './Components/Others/UserContext/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhotoProvider>
      <UserContext>
        <App />
      </UserContext>
    </PhotoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
