import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import logo from '../assets/images/Logo.png';
import { loggedOut } from "../features/user/userSlice";
import { addOfflineStatusOnLS, getInfoFromLS } from "../utilitieFunctions/localStorageActions";

function Menu(props) {
    const dispatch = useDispatch();

    let onlineUserLogin = null;
    if (props.auth === 'authorized') {
        onlineUserLogin = getInfoFromLS().online.login;
    }

    function handleQuitClick() {
        dispatch(loggedOut());
        addOfflineStatusOnLS();
    }

    return (
        <div className="header__menu">
            <ul className="header__list">
                {onlineUserLogin ? <li className="header__hello">Привет, <span>{onlineUserLogin}</span>. Твоё меню: </li> : null }
                <li>
                    <Link className="header__link" to='/favorites'>Избранное</Link>
                </li>
                <li>
                    <Link className="header__link" to='/history'>История</Link>
                </li>
                <li>
                    <button className="header__quit" onClick={handleQuitClick}>Выход!</button>
                </li>
            </ul>
        </div>
    );
}

export function Header() {
    const {authStatus} = useSelector(state => state.user);

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <Link to='/' className="header__logo">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <div className="header__authorization">
                        {authStatus === 'authorized' ? <Menu auth={authStatus}/> : <Link to='/auth'>Вход/Регистрация</Link>}
                    </div>
                </div>
            </div>
        </header>
    );
}
