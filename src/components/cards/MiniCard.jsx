export function MiniCard(props) {
    const {game} = props;
    const color = getMetaColor(game.metascore);
    return (
        <div className="card card_mini">
            <div className="card_mini__image">
                <img src={game.imageSRC} alt="game-image" />
            </div>
            <div className="card_mini__info">
            <div className="card_mini__title">{game.title}</div>
                <div className="card_mini__developer-release">
                    {game.developer}, <span>{game.release}</span>
                </div>
                <div className="card_mini__metascore">
                    Metascore: <span className={`metacolor__${color}`}>{game.metascore}</span>
                </div>
            </div>
        </div>
    );
}

function getMetaColor(score) { // score value is between 0 and 100
    if (score < 50) {
        return 'red';
    } else if (score < 75) {
        return 'yellow';
    } else if (score < 90) {
        return 'lime';
    } else {
        return 'green';
    }
}