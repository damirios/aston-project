export function AddToFavoriteButton(props) {
    function handleClick() {
        console.log('click');
    }
    
    return (
        <button onClick={handleClick}>
            Добавить в избранное
        </button>
    );
}