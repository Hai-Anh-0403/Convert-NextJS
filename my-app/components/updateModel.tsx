'use client'

import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { json } from "stream/consumers";

import styles from './updateModel.module.css';



interface IProps {
    showModelUpdate: boolean;
    setShowModelUpdate: (value: boolean) => void;
    tour: Tour | null;
    setTour: (value: Tour | null) => void;
    fetchTours: () => void;
}
function UpdateModel(props: IProps) {
    const { showModelUpdate, setShowModelUpdate, tour, setTour, fetchTours } = props;
    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [price, setPrice] = useState<string>("  ");
    const [days, setDays] = useState<number>(0);
    const [description, setDescription] = useState<string>("");

    useEffect(() => {
        if (tour && tour._id) {
            setId(tour._id);
            setName(tour.name);
            setLocation(tour.location);
            setPrice(tour.price);
            setDays(tour.days);
            setDescription(tour.description);
        }
    }, [tour])
    const handleSubmit = async () => {
        if (!name || !location || !price || !days || !description) {
            return;
        }
        const res = await fetch(`http://localhost:5001/api/tours/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                name,
                location,
                price,
                days,
                description
            })
        });
        const data = await res.json();
        if (data) {
            fetchTours();
            handleCloseModal();

        }
    }
    const handleCloseModal = () => {
        setId("");
        setName("");
        setLocation("");
        setPrice("");
        setDays(0);
        setDescription("");
        setTour(null);
        setShowModelUpdate(false);

    }
    return (
        <Modal
            show={showModelUpdate}
            onHide={() => handleCloseModal()}
            backdrop="static"
            keyboard={false}
            size="lg"
            centered
        >

            <Modal.Header closeButton
                className={styles.modalHeader}>
                <Modal.Title className={styles.modalTitle}>
                    Update Model
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Form>


                    <Form.Group className={styles.formLabel}>

                        <Form.Label>
                            Name
                        </Form.Label>

                        <Form.Control className={styles.input}
                            type="text"
                            placeholder="Enter title..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                    </Form.Group>


                    <Form.Group className={styles.formLabel}>

                        <Form.Label>
                            Location
                        </Form.Label>

                        <Form.Control className={styles.input}
                            type="text"
                            placeholder="Enter location..."
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />

                    </Form.Group>


                    <Form.Group className={styles.formLabel}>

                        <Form.Label>
                            Price
                        </Form.Label>

                        <Form.Control className={styles.input}
                            type="text"
                            placeholder="Enter title..."
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                    </Form.Group>
                    <Form.Group className={styles.formLabel}>

                        <Form.Label>
                            Days
                        </Form.Label>

                        <Form.Control className={styles.input}
                            type="text"

                            placeholder="Enter Days..."
                            value={days}
                            onChange={(e) => setDays(Number(e.target.value))}
                        />

                    </Form.Group>
                    <Form.Group className={styles.formLabel}>

                        <Form.Label>
                            Description
                        </Form.Label>

                        <Form.Control className={styles.input}
                            type="text"

                            placeholder="Enter Description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                    </Form.Group>
                </Form>

            </Modal.Body>

            <Modal.Footer>

                <Button
                    variant="secondary"
                    onClick={() => handleCloseModal()}
                >
                    Close
                </Button>

                <Button
                    variant="primary"
                    onClick={() => handleSubmit()}
                >
                    Save Changes
                </Button>

            </Modal.Footer>

        </Modal>
    );
}
export default UpdateModel;