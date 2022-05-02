import React, { useState, useEffect } from "react";
import { Dropdown, Button } from "react-bootstrap";
import axios from "axios";

function Settings() {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState(null);
    const [userHobbies, setUserHobbies] = useState([]);
    const hobbyList = [ "hiking", "swimming", "calligraphy", "bowling", "movie", "cooking", "dancing"];
    
    function postHobbies(){
        console.log({'hobby':userHobbies, 'user_id':localStorage.getItem('user_id')});
        axios.post('http://localhost:5000/hobby/insert', {'hobby':userHobbies, 'user_id':localStorage.getItem('user_id')})
        .then(res => res.data)
        .catch(e => {
            console.log("error: " + e)
        });
    }

    function postFollows(){
       console.log(username, localStorage.getItem('user_id'))
        axios.post('http://localhost:5000/followers/insert', {'username': username, 'user_id': localStorage.getItem('user_id') })
        .then(res => res.data)
        .catch(e => {
            console.log("error: " + e)
        });
    }

    function getUsers() {
        axios.get('http://localhost:5000/user/all')
            .then(res => res.data)
            .then(data => setUsers(data))
            .catch(e => {
                console.log("error: " + e)
            });
    }

    function submit(){
        postHobbies();
        postFollows();
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            <div> Follow</div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Users
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {users.map((user, index) => {
                        const name = user[3];
                        return <Dropdown.Item key={index} onClick={(e) => {
                            setUsername(user[3]);
                        }}>{name}</Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <div>Add Hobby</div>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Hobbies
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {hobbyList.map((hobby, index) => {
                    return <Dropdown.Item key={index} onClick={(e) => setUserHobbies([...userHobbies, hobby])}>{hobby}</Dropdown.Item>
                })}
            </Dropdown.Menu>
            </Dropdown>
            <Button as="input" type="submit" value="Submit" onClick={submit} />
        </div>
    );
}

export default Settings;