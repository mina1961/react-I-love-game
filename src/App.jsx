import { Route, Routes } from "react-router";
import Catalog from "./component/catalog/Catalog";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import GameDetails from "./component/game-details/GameDetails";
import GameCreate from "./component/game-create/GameCreate";
import GameEdit from "./component/game-edit/GameEdit";
import Register from "./component/register/register";
import Login from "./component/login/Login";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/games/:gameId" element={<GameDetails />} />
                <Route path="/game/create" element={<GameCreate />} />
                <Route path="/games/:gameId/edit" element={<GameEdit />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;