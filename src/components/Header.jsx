import { Link, useLocation } from "react-router-dom";

export function Header() {
    let location = useLocation();

    console.log(location);

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <Link to='/'>
                        Game!
                    </Link>
                </div>
            </div>
        </header>
    );
}
