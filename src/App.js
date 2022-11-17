import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles/css/style.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import Card from './components/cards/Card';
import { NotFound } from './components/NotFound';
import { SignInUpPage } from './components/SignInUpPage';

function App(props) {

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
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
