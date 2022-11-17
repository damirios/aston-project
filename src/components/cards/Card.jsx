import { FullCard } from "./FullCard";
import { MiniCard } from "./MiniCard";

function Card(props) {

    const { mini, game } = props;
    if (mini) { // миниатюра (для отображения на главной странице)
        return (
          <MiniCard game={game} />  
        );
    }
    return (
        <FullCard />
    );
}

export default Card;