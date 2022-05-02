import React, { useState, useEffect } from "react";
import { Dropdown, ListGroup } from "react-bootstrap";
import axios from "axios";

function Part2() {
    const [users, setUsers] = useState([]);
    const [blogs, setBlogs] = useState([]);

    function getUsers() {
        axios.get('http://localhost:5000/user/all')
            .then(res => res.data)
            .then(data => setUsers(data))
            .catch(e => {
                console.log("error: " + e)
            });
    }

    function getUserBlogs(id) {
        console.log(`user id: ${id}`);
        axios.get(`http://localhost:5000/blog/upvote/${id}`)
            .then(res => res.data)
            .then(data => setBlogs(data))
            .catch(e => {
                console.log("error: " + e)
            });
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="createBlog">
            <div>List all the blogs of user X, such that all the comments are positive for these blogs.</div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Users
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {users.map((user, index) => {
                        const name = user[1] + " " + user[2];
                        return <Dropdown.Item key={index} onClick={(e) => getUserBlogs(user[0])}>{name}</Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <ListGroup >
                {blogs.map((blog, index) => {
                    return <ListGroup.Item key={index}>{"subject: " + blog[1] + " description: " + blog[2]}</ListGroup.Item>
                })}
            </ListGroup>
        </div>
    );
}

export default Part2;