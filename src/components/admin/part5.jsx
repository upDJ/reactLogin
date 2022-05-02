import React, { useState, useEffect } from "react";
import {Table} from "react-bootstrap";
import axios from "axios";

function Part5() {
    const [userPair, setUserPair] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/hobby/common')
            .then((res) => res.data)
            .then((data) => setUserPair(data))
            .catch((e) => console.error(e))
    }, []);

    return (
        <div className="createBlog">
            <div>List a user pair (A, B) such that they have at least one common hobby. </div>
            <Table variant="dark" >
                <thead>
                    <tr>
                        <th>username1</th>
                        <th>username2</th>
                    </tr>
                </thead>
                <tbody>
                    {userPair.map((user, index) => {
                        console.log(user)
                        return <tr key={index}>
                            <td>{user[0]}</td>
                            <td>{user[1]}</td>
                        </tr>
                    })}

                </tbody>
            </Table>
        </div>);
}

export default Part5;