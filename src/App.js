import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import './styles/css/style.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import Card from './components/cards/Card';
import { NotFound } from './components/NotFound';



function App(props) {

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Content />} />
                        <Route path='/games/:id' element={
                            <Card />
                        } />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
