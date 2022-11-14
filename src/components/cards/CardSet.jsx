import { games } from "../../App";
import { Card } from "./Card";

export function CardSet(props) {
    return (
        <div className="cards">
            <h5>Подборка от автора приложения</h5>
            <ul>
                {games.map((game, index) => {
                    return (
                        <li key={index}>
                            <Card mini={true} game={game} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}