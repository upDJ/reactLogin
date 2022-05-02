import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

function Part3() {
    const [users, setUsers] = useState([]);
    const [ties, setTies] = useState([]);


    function getUsers() {
        const test = null;
        axios.get('http://localhost:5000/user/ondate')
            .then(res => setUsers([res.data]))
            .catch(e => {
                console.log("error: " + e)
            });
    }

    useEffect(() => {
        getUsers();

    }, [])

    return (
        <div>
            <div>List the users who posted the most number of blogs on 5/2/2022</div>
            <Table variant="dark" >
                <thead>
                    <tr>
                        <th>username</th>
                        <th>num blogs</th>
                    </tr>
                </thead>
                <tbody> </tbody>
            </Table>

            {users.map((user, index) => {

                return (<tr key={index}>
                    <td >{user}</td>
                </tr>)
            })}

        </div>


    );
}

export default Part3;