import { CardSet } from "./cards/CardSet";

export function Content() {
    return (
        <div className="content">
            <div className="container">
                <div className="content__width-restricted">
                    <CardSet />
                </div>
            </div>
        </div>
    );
}