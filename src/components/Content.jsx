import { CardsSet } from "./cards/CardsSet";

export function Content() {

    return (
        <main className="content">
            <div className="container">
                <div className="content-restricted">
                    <CardsSet />
                </div>
            </div>
        </main>
    );
}