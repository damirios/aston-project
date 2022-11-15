import { FullCard } from "./FullCard";
import { MiniCard } from "./MiniCard";

export function Card(props) {

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