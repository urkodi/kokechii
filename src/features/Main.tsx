import { Route, Routes } from "react-router";
import Home from "../pages/Home";

function Main() {
    return (
        <main>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </main>
    );
}

export default Main;
