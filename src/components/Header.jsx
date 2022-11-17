import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import logo from '../assets/images/Logo.png';
import { loggedOut } from "../features/user/userSlice";
import { addOfflineStatusOnLS } from "../utilitieFunctions/localStorageActions";

function Menu() {
    const dispatch = useDispatch();

    function handleQuitClick() {
        dispatch(loggedOut());
        addOfflineStatusOnLS();
    }

    return (
        <div className="header__menu">
            <ul className="header__list">
                <li>Избранное</li>
                <li>История</li>
                <li>
                    <button onClick={handleQuitClick}>Выход!</button>
                </li>
            </ul>
        </div>
    );
}

export function Header() {
    const {authStatus} = useSelector(state => state.user);
    console.log(authStatus);
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <Link to='/' className="header__logo">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <div className="header__authorization">
                        {authStatus === 'authorized' ? <Menu /> : <Link to='/auth'>Вход/Регистрация</Link>}
                    </div>
                </div>
            </div>
        </header>
    );
}
