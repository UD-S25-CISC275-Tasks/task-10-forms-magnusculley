import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="forColorSelect">
                <Form.Label>Change Color</Form.Label>
                {COLORS.map((choice: string) => (
                    <div key={choice}>
                        <Form.Check
                            inline
                            type="radio"
                            label={choice}
                            value={choice}
                            checked={color === choice}
                            onChange={updateColor}
                            name="color"
                        />
                    </div>
                ))}
            </Form.Group>
            <div
                data-testid="colored-box"
                style={{
                    background: color,
                }}
            >
                You have chosen {color}
            </div>
        </div>
    );
}
