import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './styles/css/style.css';

import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Probe } from './components/Probe';

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
