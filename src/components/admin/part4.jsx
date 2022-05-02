import axios from "axios";
import React, { useState, useEffect } from "react";
import { ButtonGroup, Dropdown, Button, Table } from "react-bootstrap";



function Part3() {
    const [users, setusers] = useState([]);
    const [selection1, setSelection1] = useState(null);
    const [selection2, setSelection2] = useState(null);
    const [results, setResults] = useState([])

    function getAllUsers() {
        axios.get("http://127.0.0.1:5000/user/all")
            .then(res => res.data)
            .then(data => setusers(data))
            .catch(e => console.error(e))
    }

    function getResults() {
        console.log({ "first": selection1, "second": selection2 })
        axios.get("http://127.0.0.1:5000/user/followedBy", { params:{ "first": selection1, "second": selection2 }})
            .then(res => res.data)
            .then(data => setResults(data))
            .catch(e => console.error(e))
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className="createBlog">
            <div>List the users who are followed by both X and Y. Usernames X and Y are inputs
                from the user. </div>
            <ButtonGroup>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        User1
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {users.map((user, index) => <Dropdown.Item key={index} onClick={(e) => setSelection1(user[1])}>{user[1]}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        User2
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {users.map((user, index) => <Dropdown.Item key={index} onClick={(e) => setSelection2(user[1])}>{user[1]}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="primary" type="button" onClick={getResults}>
                    Get Results
                </Button>

            </ButtonGroup>
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

        </div>

    );
}

export default Part3;