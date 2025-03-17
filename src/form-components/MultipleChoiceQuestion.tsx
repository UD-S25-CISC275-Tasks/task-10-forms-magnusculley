import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    return (
        <div>
            <Form.Group controlId="formMultipleChoiceAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Select
                    value={choice}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setChoice(event.target.value);
                    }}
                >
                    {options.map((answer: string) => (
                        <option key={answer} value={answer}>
                            {answer}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{choice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
