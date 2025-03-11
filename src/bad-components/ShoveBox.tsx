import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface shoveProps {
    position: number;
    setPosition: (newPosition: number) => void;
}

function ShoveBoxButton(props: shoveProps) {
    return (
        <Button
            onClick={() => {
                props.setPosition(4 + props.position);
            }}
        >
            Shove the Box
        </Button>
    );
}

function MoveableBox(props: shoveProps): React.JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: props.position + "px",
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
    const box = MoveableBox();

    return (
        <div>
            <h3>Shove Box</h3>
            {/* <span>The box is at: {box.position}</span>
            <div>
                <ShoveBoxButton
                    position={box.position}
                    setPosition={box.setPosition}
                ></ShoveBoxButton>
                {box}
            </div> */}
        </div>
    );
}
