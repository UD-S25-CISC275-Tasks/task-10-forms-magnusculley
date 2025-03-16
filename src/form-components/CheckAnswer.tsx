import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const correct: string = answer === expectedAnswer ? "✔️" : "❌";
    return (
        <div>
            <Form.Group controlId="formShortAnswerResponse">
                <Form.Label>Answer: </Form.Label>
                <Form.Control
                    value={answer}
                    onChange={(e) => {
                        setAnswer(e.target.value);
                    }}
                />
            </Form.Group>
            <div>{correct}</div>
        </div>
    );
}
