import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";

function Main() {
    return (
        <main>
            <Routes>
                <Route index element={<Home />} />
                <Route path="gallery" element={<Gallery />} />
            </Routes>
        </main>
    );
}

export default Main;
