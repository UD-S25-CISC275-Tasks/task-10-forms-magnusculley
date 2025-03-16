import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);
    function addRequest(): void {
        setAttempts(attempts + request);
    }
    function use(): void {
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <div>attempts left: {attempts}</div>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Request Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequest(parseInt(event.target.value) || 0);
                    }}
                />
            </Form.Group>
            <Button onClick={addRequest}>gain</Button>
            <Button onClick={use} disabled={attempts <= 0}>
                use
            </Button>
        </div>
    );
}
