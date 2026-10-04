import { Route, Routes } from "react-router";
import Catalog from "./component/catalog/Catalog";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./component/home/Home";

function App() {
    return (
        <>
            <Header />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
            
            <Footer />
        </>
    );
}

export default App;