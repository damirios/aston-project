import { useSelector } from 'react-redux';

import { ShowGames } from './UIComponents/ShowGames';

export default function Favorites(props) {
    const gamesObj = useSelector(state => state.user.favorites);
    
    const gamesArray = Object.values(gamesObj);

    return (
        <div className="favorites content">
            <div className="container">
                <div className="favorites__grid">
                    <ShowGames title='Избранное' classname='cards' games={gamesArray} />
                </div>
            </div>
        </div>
    );
}