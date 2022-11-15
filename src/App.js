import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './styles/css/style.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import { Card } from './components/cards/Card';
import { NotFound } from './components/NotFound';



const TLOU = {
    id: 12,
    title: 'The Last of Us Part I',
    release: '02-09-2022',
    developer: 'Naughty Dog',
    genres: ['Action', 'Shooter'],
    platforms: ['PlayStation 5', 'PC'],
    metascore: 89,
    imageSRC: 'https://media.rawg.io/media/games/71d/71df9e759b2246f9769126c98ac997fc.jpg',
    description: `Revisit the game that set a new bar for single-player narrative 
    storytelling with The Last of Us™ and explore a ravaged and hardened world, 
    where every action has a brutal consequence for Joel and Ellie.`
}
const Bioshock_Infinite = {
    id: 4062,
    title: 'Bioshock Infinite',
    release: '26-03-2013',
    developer: 'Irrational Games',
    genres: ['Action', 'Shooter'],
    platforms: ['PlayStation 4', 'Xbox 360', 'Switch', 'Linux', 'PC', 'PlayStation 3', 'Xbox One'],
    metascore: 94,
    imageSRC: "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    description: `The third game in the series, Bioshock takes the story of the underwater confinement 
    within the lost city of Rapture and takes it in the sky-city of Columbia. 
    Players will follow Booker DeWitt, a private eye with a military past; 
    as he will attempt to wipe his debts with the only skill he’s good at – finding people. 
    Aside from obvious story and style differences, this time Bioshock 
    protagonist has a personality, character, and voice, no longer the protagonist is a silent man, trying to survive.
    Open and bright level design of Columbia shows industrial colonial America in a seemingly endless carnival. 
    But Bioshock is not famous for its visuals, but for its story. 
    Mystery and creative vision of Irrational Games invite players to uncover the secrets of Columbia’s leader - Zachary Comstock 
    and save Elizabeth, the girl, that’s been locked up in the flying city since her birth.
    Unique weapons and mechanics of Vigor will make encounters different, 
    helping players to adjust to the new found mobility and hook shot, making fights fast-paced and imaginative.`
}
export const games = [TLOU, Bioshock_Infinite];
export const gamesIDs = games.map(game => game.id);


function App(props) {

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Content />} />
                    <Route path='/games/:id' element={<Card />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
