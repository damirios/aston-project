import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

const RAWG_API_KEY = 'a7cbf56b60204b669694535720621edf';
const getURL = function(apikey = RAWG_API_KEY) {
  return `https://rawg-video-games-database.p.rapidapi.com/games/the-last-of-us-part-i?key=${apikey}`;
}

const fetchMetacritic = async function() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dac52bbe39mshc055fd56faf9c4cp12ff7ajsne147baf043fc',
      'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
    },
    mode: 'cors'
  }
  fetch(getURL(), options)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
};

// fetchMetacritic();


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
