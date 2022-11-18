import {Link} from 'react-router-dom';

import Card from '../cards/Card';

export function ShowGames(props) {
    const { title, games, classname } = props;
    return (
        <div className={classname}>
            <h5 className={`${classname}__title`}>{title}</h5>
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