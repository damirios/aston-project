import { Link } from "react-router-dom";

export function NotFound(props) {
    if (props.error) {
        return (
        <div className="not-found">
            <div className="container">
                <h3>Где-то произошла ошибка!</h3>
                <Link className="not-found__link" to='/'>Go Home!</Link>
            </div>
        </div>
        );
    }

    return (
        <div className="not-found">
            <div className="container">
                <h3>404 - Not Found!</h3>
                <Link className="not-found__link" to='/'>Go Home!</Link>
            </div>
        </div>
    );
}