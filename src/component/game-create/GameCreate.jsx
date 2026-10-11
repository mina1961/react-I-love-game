import { useState } from "react";
import request from "../../util/request";
import { useNavigate } from "react-router";

export default function GameCreate() {

    const navigate = useNavigate();

const initialValues = {
    title: "",
    genre: "",
    activePlayers: "",
    releaseDate: "",
    imageUrl: "",
    summary: ""
};

    const [values, setValues] = useState(initialValues);

    const changehandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
        const submitAction = async () => {
            try {
                await request("/games", "POST", {
                    ...values,
                    activePlayers: Number(values.activePlayers)
                });
                navigate("/catalog");
            } catch (error) {
                console.error(error);
            }
        };

    return (
        <section id="add-page">
            <form id="add-new-game" >
                <div className="container">

                    <h1>Add New Game</h1>

                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input type="text" id="gameName" name="title" placeholder="Enter game title..." value={values.title} onChange={changehandler} />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" placeholder="Enter game genre..." value={values.genre} onChange={changehandler} />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input type="number" id="activePlayers" name="activePlayers" min="0" placeholder="0" value={values.activePlayers} onChange={changehandler} />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input type="date" id="releaseDate" name="releaseDate" value={values.releaseDate} onChange={changehandler} />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter image URL..." value={values.imageUrl} onChange={changehandler} />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" rows="5" placeholder="Write a brief summary..." value={values.summary} onChange={changehandler}></textarea>
                    </div>

                    <input className="btn submit" type="submit" value="ADD GAME" />
                </div>
            </form>
        </section>
    );
}
