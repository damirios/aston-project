import React, { Suspense, lazy } from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles/css/style.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import { NotFound } from './components/NotFound';
import { SignInUpPage } from './components/SignInUpPage';
import { Card } from './components/cards/Card';

const Favorites = lazy(() => import('./components/Favorites'));
const History = lazy(() => import('./components/History'));


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
                        <Suspense fallback={<div>...Loading</div>}><Favorites /></Suspense>} />
                    <Route path='/history' element={authStatus !== 'authorized' ? <Navigate replace to='/' /> : 
                        <Suspense fallback={<div>...Loading</div>}><History /></Suspense>} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
