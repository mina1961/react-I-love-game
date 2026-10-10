import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import request from "../../util/request";

export default function GameEdit() {

const { gameId } = useParams();

const navigate = useNavigate();

const [game, setGame] = useState(null);

useEffect(() => {
    request(`/games?id=eq.${gameId}`)
        .then(result => {
            setGame(result[0]);
        })
        .catch(error => {
            console.error(error);
        });
}, [gameId]);

if (!game) {
    return <p>Loading game...</p>;
}

async function editGameHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    data.activePlayers = Number(data.activePlayers);

    try {
        await request(
            `/games?id=eq.${gameId}`,
            "PATCH",
            data
        );

        navigate(`/games/${gameId}`);
    } catch (error) {
        console.error(error);
        alert("Error updating game!");
    }
}

    return (
        // < !--add Page(Only for logged -in users) -->
        <section id="edit-page">
            <form id="edit-game" onSubmit={editGameHandler}>
                <div className="container">

                    <h1>Edit Game</h1>

                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input type="text" id="gameName" name="gameName" placeholder="Enter game title..." defaultValue={game.title} />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" placeholder="Enter game genre..." defaultValue={game.genre} />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input type="number" id="activePlayers" name="activePlayers" min="0" placeholder="0" defaultValue={game.activePlayers} />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input type="date" id="releaseDate" name="releaseDate" defaultValue={game.releaseDate} />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter image URL..." defaultValue={game.imageUrl} />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" rows="5" placeholder="Write a brief summary..." defaultValue={game.summary}></textarea>
                    </div>

                    <input className="btn submit" type="submit" value="EDIT GAME" />
                </div>
            </form>
        </section>
    );
}
