import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import Card from './components/cards/Card';
import { NotFound } from './components/NotFound';
import { SignInUpPage } from './components/SignInUpPage';
import { Favorites } from './components/Favorites';
import { History } from './components/History';

function App() {
    const {authStatus} = useSelector(state => state.user);
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Content />} />
                    <Route path='/games/:id' element={<Card />} />
                    <Route path='/auth' element={authStatus === 'authorized' ? <Navigate replace to='/' /> : 
                        <SignInUpPage />} />
                    <Route path='/favorites' element={authStatus !== 'authorized' ? <Navigate replace to='/' /> : 
                        <Favorites />} />
                    <Route path='/history' element={authStatus !== 'authorized' ? <Navigate replace to='/' /> : 
                        <History />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
