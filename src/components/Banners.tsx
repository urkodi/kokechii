import { useCallback, useEffect, useState } from "react";
import { COLOR_ORDER } from "../utils/Colors";

function Banners() {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const units = 24;
    const width = units / 4;
    const height = units / 6;

    const [count, setCount] = useState(calculateCount());

    function calculateCount(): number {
        return Math.ceil(4 * window.innerWidth / (rem * units));
    }

    const handleWindowResize = useCallback(() => {
        setCount(calculateCount());
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, [handleWindowResize]);

    return (
        <div className="flex overflow-hidden">
            {
                Array.from({ length: count }).map((_, index) => (
                    <span
                        key={index}
                        style={{
                            backgroundColor: COLOR_ORDER[index % COLOR_ORDER.length],
                            minWidth: `${width}rem`,
                            maxWidth: `${width}rem`,
                            minHeight: `${height}rem`,
                            maxHeight: `${height}rem`,
                            borderRadius: `0 0 ${width / 2}rem ${width / 2}rem`,
                            display: "block"
                        }}
                    />
                ))
            }
        </div>
    );
}

export default Banners;
