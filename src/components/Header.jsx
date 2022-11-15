import { Link, useLocation } from "react-router-dom";

export function Header() {
    let location = useLocation();

    console.log(location.pathname);

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <Link to='/' className="header__logo">
                        <img src="./assets/images/Logo.png" alt="Logo" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
