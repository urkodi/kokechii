import { BrowserRouter } from "react-router";
import Header from "./features/Header";
import Main from "./features/Main";
import Footer from "./features/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
