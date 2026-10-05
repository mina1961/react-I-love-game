import { useState, useEffect } from "react"
import request from "../../util/request";
import GameCard from "../game-card/GameCard";

export default function Home() {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        // Fetch latest games from the API
        request(`/games?order=created_at.desc&limit=3`)
            .then(result => setLatestGames(result))
            .catch(err => alert(err));
    }, []);
    return (
        <section id="welcome-world">
                <div className="welcome-message">
                    <h2>ALL new games are</h2>
                    <h3>Only in</h3>
                    <img
                        id="logo-left"
                        src="./images/logo.png"
                        alt="logo"
                    />
                </div>

                <div id="home-page">
                    <h1>Latest Games</h1>

                    <div id="latest-wrap">
                        {/* Display div with information about every game */}
                        <div className="home-container">
                            {latestGames.length > 0 
                                ? latestGames.map(game => <GameCard key={game.id} {...game} />)
                                : <p className="no-articles">No games yet</p>
                            }

                            {/* If there are no games */}
                            {/* <p className="no-articles">No games yet</p> */}
                        </div>
                    </div>
                </div>
            </section>
    )
}