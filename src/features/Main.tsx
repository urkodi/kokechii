import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Merch from "../pages/Merch";
import About from "../pages/About";
import Display from "../pages/Display";
import Brand from "../pages/Brand";

function Main() {
    return (
        <main className="mx-6">
            <Routes>
                <Route index element={<Home />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="merch" element={<Merch />} />
                <Route path="display" element={<Display />} />
                <Route path="brand" element={<Brand />} />
                <Route path="about" element={<About />} />
            </Routes>
        </main>
    );
}

export default Main;
