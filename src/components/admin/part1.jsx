import React, { useState, useEffect } from 'react';
import { Form, Button, Table } from "react-bootstrap";
import axios from "axios";

function Part1() {
    const [filter1, setFilter1] = useState('');
    const [filter2, setFilter2] = useState('');
    const [results, setResults] = useState([]);


    const handleSubmit = e => {
        e.preventDefault();

        axios.get('http://localhost:5000/blog/filter', { params: { filter1: filter1, filter2: filter2 } })
            .then(res => {
                console.log("data" + res.data);
                setResults(res.data);
            })
            .catch(e => {
                console.log("error: " + e)
            });
    }
    const onInput = (event) => {
        console.log(event)
        const target = event.id;
        const value = event.value;
        target === 'filter1' ? setFilter1(value) :
            target === 'filter2' ? setFilter2(event.value) :
                console.log('Error None');
    }

    return (
        <div>
            <div className="createBlog">
                <h2>Part1</h2>
                <h6>List the users who post at least two blogs, one has a tag of “X”, and another has a
                    tag of “Y”.</h6>
                <div className="blogTextBox">
                    <Form className="flex-column">
                        <Form.Group className="mb-3" controlId="filter1">
                            <Form.Label>Filter1</Form.Label>
                            <Form.Control name="filter1" placeholder="Enter filter1" onChange={e => onInput(e.target)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="filter2">
                            <Form.Label>Filter2</Form.Label>
                            <Form.Control name="filter1" placeholder="Enter filter2" onChange={e => onInput(e.target)} />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={handleSubmit}>
                            Get Results
                        </Button>
                        <div></div>
                        <Table variant="dark" >
                            <thead>
                                <tr>
                                    <th>username</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((user, index) => {
                                    console.log(user)
                                    return <tr key={index}>
                                        <td>{user[0]}</td>
                                    </tr>
                                })}

                            </tbody>
                        </Table>
                    </Form>
                </div>

            </div>
        </div>
    );
}

export default Part1;