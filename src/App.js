import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './styles/css/style.css';

import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Probe } from './components/Probe';

const TLOU = {
    title: 'The Last of Us Part I',
    release: '02-09-2022',
    developer: 'Naughty Dog',
    genres: ['Action', 'Shooter'],
    platforms: ['PlayStation 5', 'PC'],
    metascore: 89,
    imageSRC: 'https://media.rawg.io/media/games/71d/71df9e759b2246f9769126c98ac997fc.jpg'
}

export const games = [TLOU, TLOU, TLOU];

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Content />} />
                    <Route path='/card' element={<Probe />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
