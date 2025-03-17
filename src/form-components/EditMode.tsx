import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                className="form-switch"
                checked={isEditMode}
                onChange={() => {
                    setIsEditMode(!isEditMode);
                }}
            />

            {isEditMode ?
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="formStudent">
                        <Form.Check
                            type="checkbox"
                            label="Student"
                            checked={isStudent}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setIsStudent(event.target.checked);
                            }}
                        />
                    </Form.Group>
                </div>
            :   <p>
                    {name} {isStudent ? "is a student" : "is not a student"}
                </p>
            }
        </div>
    );
}
