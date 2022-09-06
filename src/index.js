//this is the first file executed by react
import React from 'react';
import ReactDOM from 'react-dom/client';// importing third party library we can see inside packade.json file
import './index.css';// importing css file in react is valid but not valid in js
import App from './App';// importing js file without extension, app is an component


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// here we are using index.html content using root it given to div. we are using js method to get the root and then 
// we are rendring or displaying root content (app) on screen