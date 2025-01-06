import React from "react";

interface CanvasProps {
    label: string;
}

const TestCanvas = (props: CanvasProps) => {
    return <button>{props.label}</button>
};

export default TestCanvas;