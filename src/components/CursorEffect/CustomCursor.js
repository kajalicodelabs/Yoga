import React, { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [size, setSize] = useState(30);
    const [bgColor, setBgColor] = useState("red");

    // Track mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Increase size & change color on hover
    useEffect(() => {
        const hoverElements = document.querySelectorAll(".cursor-hover");

        const handleMouseEnter = () => {
            setSize(100);
            setBgColor("#239954");
        };

        const handleMouseLeave = () => {
            setSize(30);
            setBgColor("#388D86");
        };

        hoverElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            hoverElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: position.y - size / 2,
                left: position.x - size / 2,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: bgColor,
                borderRadius: "50%",
                pointerEvents: "none",
                // mixBlendMode: "difference",
                transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease",
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
            }}
        />
    );
};

export default CustomCursor;
