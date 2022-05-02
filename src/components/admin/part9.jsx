import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

function Part8() {
    const [users, setUsers] = useState([]);


    function getResults() {
        axios.get("http://127.0.0.1:5000/user/allpositive")
            .then(res => res.data)
            .then(data => { console.log(data); setUsers(data);})
            .catch(e => console.error(e))
    }

    useEffect(() => {
        getResults();
    }, []);

    return (
        <div>
            <div>Display those users such that all the blogs they posted so far never received any negative comments.  </div>
            <Table  variant="dark" >
                <thead>
                    <tr>
                        <th>firstname</th>
                        <th>lastname</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return <tr key={index}>
                            <td key={index}>{user[0]}</td>
                            <td key={index}>{user[1]}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>);
}

export default Part8;