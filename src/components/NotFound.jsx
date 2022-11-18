import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="not-found">
            <div className="container">
                <h3>404 - Not Found!</h3>
                <Link className="not-found__link" to='/'>Go Home!</Link>
            </div>
        </div>
    );
}