import { Link } from 'react-router-dom';

import preloader from '../../assets/images/basketball.gif';


export function SearchDropDown(props) {
    const { games, showNumber, status } = props;
    const gamesToShow = games.slice(0, showNumber);

    if (status === 'idle') {
        return null;
    } else if (status === 'loading') {
        return (
            <div className="search-form__drop-down">
                <div className="search-form__preloader">
                    <img src={preloader} alt="preloader" />
                </div>
            </div>
        );
    } else if (status === 'loaded') {
        return (
            <div className="search-form__drop-down">
                <ul className="search-form__list">
                    {gamesToShow.map(game => {
                        return (
                            <li key={game.id} className="search-form__item">
                                <Link className="search-form__link" to={`/games/${game.id}`}>
                                    <img className="search-form__image" src={game.imageSRC} alt="image" />
                                    {game.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    } else {
        return (
            <div className="search-form__drop-down">
                Произошла ошибка при запросе на сервер(
            </div>
        );
    }
}