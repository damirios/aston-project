import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;

const getURL = function(apikey = RAWG_API_KEY) {
  console.log(apikey);
  return `https://api.rawg.io/api/games?key=${apikey}`;
  // return `https://api.rawg.io/api/games?key=${apikey}&search=biosho`;
  // return `https://rawg-video-games-database.p.rapidapi.com/games/the-last-of-us-part-i?key=${apikey}`;
}

const fetchRAWG = async function() {
  const options = {
    method: 'GET',
    // headers: {
    //   'X-RapidAPI-Key': 'dac52bbe39mshc055fd56faf9c4cp12ff7ajsne147baf043fc',
    //   'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
    // },
    mode: 'cors'
  }
  fetch(getURL(), options)
  .then(response => {
    // console.log(response);
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
};

// fetchRAWG();


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
