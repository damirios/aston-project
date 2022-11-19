import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGames, gamesListCleared } from "../features/games/gamesSlice";
import { SearchDropDown } from "./UIComponents/SearchDropDown";

import useDebounce from "../utilitieFunctions/useDebounce";
import { addQueryToLSHistory } from "../utilitieFunctions/localStorageActions";
import { addedToHistory } from "../features/user/userSlice";

export function SearchForm() {

    const [text, setText] = useState('');

    const dispatch = useDispatch();
    const {list, cards, status} = useSelector(state => state.games);
    const {history, authStatus} = useSelector(state => state.user);

    const debouncedText = useDebounce(text, 700);
    
    useEffect(() => {
        if (debouncedText !== '') {
            dispatch(fetchGames({
                text: debouncedText.toLowerCase(),
                query: false
            })); // запрашиваю новый список игр
        }
        if (text === '') {
            dispatch(gamesListCleared()); // очищаю выпадающий список, т.к. поле поиска пустое
        }

    }, [debouncedText]);

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (text !== '') {
            dispatch(fetchGames({
                text: text.toLowerCase(),
                query: true
            }));
    
            if (authStatus === 'authorized') {
                if (Object.values(history).length === 0 || !Object.values(history).includes(text)) {
                    addQueryToLSHistory({text: text.toLowerCase().trim()});
                    dispatch(addedToHistory(text.toLowerCase().trim()));
                }
            }
            
            setText('');
        }
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