import { Link } from "react-router-dom";

export function AuthorizationLink() {
    return (
        <span>
            <Link to='/auth' className="game-page__auth">Войдите</Link>, чтобы добавить в избранное
        </span>
    );
}