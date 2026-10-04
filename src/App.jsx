import Catalog from "./component/catalog/Catalog";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./component/home/Home";

function App() {
    return (
        <>
            <Header />

            {/* Home Page */}
            <Home />
            <Catalog />

            <Footer />
        </>
    );
}

export default App;