import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Card from "./Card";
import { ShowGames } from "../UIComponents/ShowGames";

export function CardSet(props) {
    const title = 'Подборка от автора приложения';

    const games = useSelector(state => state.games.cards);


    return (
        <ShowGames title={title} classname='cards' games={games} />
        // <div className="cards">
        //     <h5>Подборка от автора приложения</h5>
        //     <ul>
        //         {games.map((game, index) => {
        //             return (
        //                 <li key={index}>
        //                     <Link to={`/games/${game.id}`}>
        //                         <Card mini={true} game={game} />
        //                     </Link>
        //                 </li>
        //             );
        //         })}
        //     </ul>
        // </div>
    );
}