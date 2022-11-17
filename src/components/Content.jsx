import { CardSet } from "./cards/CardSet";
import { SearchForm } from "./SearchForm";

export function Content() {
    return (
        <div className="content">
            <div className="container">
                <div className="content__width-restricted">
                    <SearchForm />
                    <CardSet />
                </div>
            </div>
        </div>
    );
}