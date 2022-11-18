import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addedFavorite, deletedFavorite } from "../features/user/userSlice";
import { addFavoriteGameToLS, removeFavoriteGameFromLS } from "../utilitieFunctions/localStorageActions";

export function AddToFavoriteButton(props) {
    const { game } = props;
    const userState = useSelector(state => state.user);
    const favorites = Object.keys(userState.favorites);

    const dispatch = useDispatch();

    const [text, setText] = useState('Добавить в избранное');

    useEffect(() => {
        if (favorites.includes(game.id.toString())) {
            setText('Убрать из избранного');
        } else {
            setText('Добавить в избранное');
        }
    }, [favorites]);

    function handleClick() {
        if (favorites.includes(game.id.toString())) {
            dispatch(deletedFavorite(game.id.toString()));
            removeFavoriteGameFromLS(game.id);
        } else {
            dispatch(addedFavorite(game));
            addFavoriteGameToLS(game);
        }
    }
    
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    );
}