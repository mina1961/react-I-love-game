import { Route, Routes } from "react-router";
import Catalog from "./component/catalog/Catalog";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import GameDetails from "./component/game-details/GameDetails";

function App() {
    return (
        <>
            <Header />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/games/:gameId" element={<GameDetails />} />
            </Routes>
            
            <Footer />
        </>
    );
}

export default App;