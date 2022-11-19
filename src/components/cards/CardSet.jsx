import { useSelector } from "react-redux";

import { ShowGames } from "../UIComponents/ShowGames";

export function CardSet(props) {
    let title = 'Подборка от автора приложения';
    
    const {zeroSearches, lastSearchQuery, cards} = useSelector(state => state.games);

    if (!zeroSearches) {
        title = `Результаты поиска по запросу: "${lastSearchQuery}"`;
    }


    return (
        <ShowGames title={title} classname='cards' games={cards} />
    );
}