import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchGames, gamesCardsFilled, gamesStatusIdle, gamesStatusLoading, gamesListCleared, gamesStatusLoaded } from "../features/games/gamesSlice";
import { SearchDropDown } from "./UIComponents/SearchDropDown";

import useDebounce from "../utilitieFunctions/useDebounce";

export function SearchForm() {

    const [text, setText] = useState('');

    const dispatch = useDispatch();
    const {list, cards, status} = useSelector(state => state.games);
    

    const debouncedText = useDebounce(text, 700);
    
    useEffect(() => {
        // запрос к апи
        dispatch(fetchGames(debouncedText.toLowerCase())); // запрашиваю новый список игр
    }, [debouncedText]);

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        dispatch(gamesCardsFilled());
        setText('');
    }

    return (
        <div className="search-form">
            <form onSubmit={handleSubmit} className="search-form__form">
                <input onChange={handleChange} value={text} type="text" name='search-input' className="search-form__input" />
                <button className="search-form__submit-button">Искать</button>
                <SearchDropDown status={status} games={list} showNumber={5} />
            </form>
        </div>
    );
}