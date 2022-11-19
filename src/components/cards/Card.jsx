import { FullCard } from "./FullCard";
import { MiniCard } from "./MiniCard";

import ErrorBoundary from "../ErrorBoundary";

export function Card(props) {

    const { mini, game } = props;
    if (mini) { // миниатюра (для отображения на главной странице)
        return (
          <MiniCard game={game} />  
        );
    }
    return (
        <ErrorBoundary>
            <FullCard />
        </ErrorBoundary>
    );
}
