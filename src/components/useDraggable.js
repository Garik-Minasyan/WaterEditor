import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


export default function useDraggable(el, panelRef, position) {
    console.log(el, panelRef, position)
    const [{ dx, dy }, setOffset] = useState({ dx: 0, dy: 0 });
    useEffect(() => {
        const handleMouseDown = (event) => {
            const rect = panelRef.current.getBoundingClientRect();
            const startX = event.pageX - dx;
            const startY = event.pageY - dy;

            const handleMouseMove = (event) => {
                const newDx = event.pageX - startX;
                const newDy = event.pageY - startY;
                if (newDx < 0 || newDy < 0) {
                    event.preventDefault()
                    return
                }
                if (newDx > rect.width - position.INITIAL_CROP_PARAMS.width ||
                    newDy > rect.height - position.INITIAL_CROP_PARAMS.height) {
                    event.preventDefault()
                    return
                }
                setOffset({ dx: newDx, dy: newDy });
            };

            panelRef.current.addEventListener("mousemove", handleMouseMove);

            panelRef.current.addEventListener(
                "mouseup",
                () => {
                    panelRef.current.removeEventListener("mousemove", handleMouseMove);
                },
                { once: true }
            );
        };

        el.current.addEventListener("mousedown", handleMouseDown);

        return () => {
            el.current.removeEventListener("mousedown", handleMouseDown);
        };
    }, [dx, dy]);

    useEffect(() => {
        setOffset({
            dx: position.left,
            dy: position.top
        });
    }, [position]);

    useEffect(() => {
        el.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    }, [dx, dy]);
}
