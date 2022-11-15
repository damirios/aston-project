import { Link } from "react-router-dom";

export function AuthorizationLink() {
    return (
        <Link to='/' className="auth">
            this is authorization link
        </Link>
    );
}