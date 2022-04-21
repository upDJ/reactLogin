import React, {useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './blog.css';
import axios from 'axios';
import TagsInput from './TagsInput';

function CreateBlog() {
    //CREATE BLOGS BUT ONLY TWO PER DAY
    const [subject, setSubject] = useState();
    const [description, setDescription] = useState();
    const [tags, setTags] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log({ subject: subject, description: description, tags: tags });
    
        axios.post('http://localhost:5000/blog/', { subject: subject, description: description, tags: tags, user_id: localStorage.getItem("user_id")})
        .then(data => {
          console.log(data)
        })
        .catch(e => {
          console.log("error: " + e)
        })
    }
    const onInput = (event) => {
        console.log(event)
        const target = event.id;
        const value = event.value;
        target === 'SubjectInput' ? setSubject(value) :
            target === 'DescriptionInput' ? setDescription(event.value) :
                target === 'TagsInput' ? setTags(event.value) :
                    console.log('Error None');
    }
    


    return (
        <div className="createBlog">
            <h2>Create a public blog post</h2>
            <div className="blogTextBox">
                <Form>
                    <Form.Group className="mb-3" controlId="SubjectInput">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control name="subject" placeholder="Enter Subject" onChange={e => onInput(e.target)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="DescriptionInput" onChange={e => onInput(e.target)} >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="TagsInput">
                        <Form.Label>Tags</Form.Label>
                        <TagsInput onChange={onInput} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={handleSubmit}>
                        Post Blog
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default CreateBlog;

