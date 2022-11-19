import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { historyCleared } from "../features/user/userSlice";
import { fetchGames } from "../features/games/gamesSlice";

import { getInfoFromLS, clearHistoryInLS } from "../utilitieFunctions/localStorageActions";

export function History() {
    const { history } = useSelector(state => state.user);
    const historyArray = Object.values(history);
    const isEmpty = !historyArray.length;

    const userLogin = getInfoFromLS().online.login;

    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    function handleClearClick() {
        dispatch(historyCleared());
        clearHistoryInLS();
    }

    function handleLinkClick(e) {
        const clickedItem = e.target.closest('li');
        const text = clickedItem.getAttribute(['data-text']);
    
        dispatch(fetchGames({
            text: text.toLowerCase(),
            query: true
        }));

        navigate('/');
    }

    return (
        <div className="content history">
            <div className="container">
                <div className="history__column">
                    <div className="history__menu">
                        <h5 className="history__title">История запросов пользователя <span>{userLogin}</span></h5>
                        <div className="history__buttons">
                            <button onClick={handleClearClick} className="history__clear-button">Очистить историю поиска</button>
                        </div>
                    </div>
                    <ul className="history__list">
                        {isEmpty ? null : historyArray.map((elem, index) => {
                            return (
                                <li data-text={elem} onClick={handleLinkClick} className="history__item" key={index}>
                                    {index + 1}) Текст запроса: <span>{elem}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}