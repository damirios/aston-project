import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { AddToFavoriteButton } from "../../utilities/AddToFavoriteButton";
import { AuthorizationLink } from "../../utilities/AuthorizationLink";
import { getFormattedDate } from "../../utilitieFunctions/getFormattedDate";
import { getMetaColor } from "../../utilitieFunctions/getMetaColor";


export function FullCard() {
    const params = useParams();
    const games = useSelector(state => state.cards);
    const user = useSelector(state => state.user);

    const isAuthorized = user.authStatus === 'authorized';

    const selectedID = +params.id;

    if (games.hasOwnProperty(selectedID)) {
        const { title, release, developer, genres, imageSRC, platforms, metascore, description } = games[selectedID];
        
        return (
            <div className="game-page">
                <div className="container">
                    <div className="game-page__grid">
                        <div className="game-page__controls">
                            {isAuthorized ? <AddToFavoriteButton /> : <AuthorizationLink />}
                        </div>
                        <div className="game-page__image">
                            <img src={imageSRC} alt="game-image" />
                        </div>
                        <div className="game-page__common-info">
                            <div className="game-page__title">{title}</div>
                            <div className="game-page__developer"><span>Developer: </span>{developer}</div>
                            <div className="game-page__release">
                                <span>Release date: </span>{getFormattedDate(release)}
                            </div>
                            <div className="game-page__genres">
                                <span>Genres: </span>
                                {genres.map((genre, index) => {
                                    if (index !== genres.length - 1) {
                                        return genre + ', '    
                                    } else {
                                        return genre
                                    }
                                })}
                            </div>
                            <div className="game-page__platforms">
                            <span>Platforms: </span>
                                {platforms.map((platform, index) => {
                                    if (index !== platforms.length - 1) {
                                        return platform + ', '    
                                    } else {
                                        return platform
                                    }
                                })}
                            </div>
                            <div className="game-page__metascore">
                                Metacritic Score: <span className={`metacolor__${getMetaColor(metascore)}`}>{metascore}</span>
                            </div>
                        </div>
                        <div className="game-page__description">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>
            Извини! Игры с ID {selectedID} нет
        </div>
    );
}