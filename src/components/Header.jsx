import { Link, useLocation } from "react-router-dom";

import logo from '../assets/images/Logo.png';

export function Header() {
    let location = useLocation();

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <Link to='/' className="header__logo">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
