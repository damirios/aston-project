import { games } from "../../App";
import { Card } from "./Card";

import { Link } from "react-router-dom";

export function CardSet(props) {
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