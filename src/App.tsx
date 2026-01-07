import { BrowserRouter } from "react-router";
import Header from "./features/Header";
import Main from "./features/Main";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Main />
        </BrowserRouter>
    );
}

export default App;
