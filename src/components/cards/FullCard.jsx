import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { AddToFavoriteButton } from "../../utilityComponents/AddToFavoriteButton";
import { AuthorizationLink } from "../../utilityComponents/AuthorizationLink";
import { getFormattedDate } from "../../utilitieFunctions/getFormattedDate";
import { getMetaColor } from "../../utilitieFunctions/getMetaColor";
import { NotFound } from "../NotFound";
import { Screenshot } from "../UIComponents/Screenshot";


export function FullCard(props) {
    const params = useParams();
    const selectedID = +params.id;

    const games = useSelector(state => state.games.cards);
    const gamesIDs = games.map(game => game.id);

    const user = useSelector(state => state.user);
    const favoriteGames = user.favorites;
    const favoriteGamesIDs = Object.keys(favoriteGames);
    
    const isAuthorized = user.authStatus === 'authorized';
    
    if (gamesIDs.includes(selectedID) || (isAuthorized && favoriteGamesIDs.includes(selectedID.toString()))) {
        const game = games.find(game => game.id === selectedID) || favoriteGames[selectedID.toString()];
        const { title, release, genres, imageSRC, platforms, metascore, screenshots } = game;
        
        return (
            <div className="game-page content">
                <div className="container">
                    <div className="game-page__grid">
                        <div className="game-page__controls">
                            {isAuthorized ? <AddToFavoriteButton game={game} /> : <AuthorizationLink />}
                        </div>
                        <div className="game-page__image">
                            <img src={imageSRC} alt="game-image" />
                        </div>
                        <div className="game-page__common-info">
                            <div className="game-page__title">{title}</div>
                            {/* <div className="game-page__developer"><span>Developer: </span>{developer}</div> */}
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
                                Metacritic Score: <span className={`metacolor__${getMetaColor(metascore)}`}>{metascore == -1 ? 
                                    'No score on metacritic' : metascore
                                }</span>
                            </div>
                        </div>
                        <div className="game-page__screenshots screenshots">
                            <h1 className="screenshots__title">ScreenShots: </h1>
                            <div className="screenshots__grid">
                                {screenshots.map(url => <Screenshot key={url} className='screenshots__screenshot' url={url} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <NotFound />
    );
}