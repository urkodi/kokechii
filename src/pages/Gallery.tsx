import { useState } from "react";

function Gallery() {
    const [tab, setTab] = useState("originals");


    return (
        <>
            <h1>Gallery</h1>

            <span>
                <ul>
                    <li>
                        <button onClick={() => setTab("originals")}>Originals</button>
                    </li>
                    <li>
                        <button onClick={() => setTab("fanart")}>Fanart</button>
                    </li>
                </ul>
            </span>
            <article>

            </article>
        </>
    );
}

export default Gallery;
