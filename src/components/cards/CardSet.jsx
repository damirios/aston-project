import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Card from "./Card";

export function CardSet(props) {

    const games = useSelector(state => state.games.cards);

    return (
        <div className="cards">
            <h5>Подборка от автора приложения</h5>
            <ul>
                {games.map((game, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/games/${game.id}`}>
                                <Card mini={true} game={game} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}