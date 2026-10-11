

import { Link } from "react-router";

export default function Header({
    isAuthenticated,
    onLogout,
}) {
    return (
        <header>
            {/* Navigation */}
            <nav>
                <Link className="home" to="/">
                    <img src="./images/logo.png" alt="logo" />
                </Link>

                <Link to="/catalog">Catalog</Link>

                {/* Logged-in users */}
                {isAuthenticated
                    ? (
                        <div id="user">
                            <Link to="/game/create">Add Game</Link>
                            <Link to="/logout" onClick={onLogout}>Logout</Link>
                        </div>
                    ) :
                    (
                        <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )
                }
            </nav>
        </header>
    )
}