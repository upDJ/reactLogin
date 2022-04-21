import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './blog.css';


function BlogTile({ blog, index }) {
    const [rating, setRating] = useState('positive');
    const [comment, setComment] = useState('');

    const title = { "fontSize": 30, "fontWeight": "bold" }


    const handleSubmit = e => {
        e.preventDefault();
        console.log({ rating: rating, comment: comment, user_id: localStorage.getItem("user_id"), blog_id: index + 1  });

        axios.post('http://localhost:5000/comment/', { rating: rating, comment: comment, user_id: localStorage.getItem("user_id"), blog_id: index + 1 })
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
        console.log(value);
        target === 'Rating' ? setRating(value) :
            target === 'Comment' ? setComment(value) :
                console.log('Error None');
    }

    return (
        <div className="readBlog">
            <div className="readBlogTextBox">
                <div style={{ float: "right" }}>post: {index + 1}</div>
                <Form>
                    <Form.Group className="mb-3" controlId="SubjectInput">
                        <Form.Label style={title}>Subject</Form.Label>
                        <div>{'\n' + blog[0]}</div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="DescriptionInput" >
                        <Form.Label style={title}>Description</Form.Label>
                        <div>{blog[1]}</div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="TagsInput">
                        <Form.Label style={title}>Tags</Form.Label>
                        <div>{blog[2]}</div>
                    </Form.Group>
                </Form>

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label >Rate Blog</Form.Label>
                        <Form.Select name id="Rating" onChange={e => onInput(e.target)}>
                            <option value="postitive">Positive</option>
                            <option value="negative">Negative</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Comment" >
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={e => onInput(e.target)} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={handleSubmit} >
                        Post Rating
                    </Button>
                </Form>

            </div>
        </div>
    );
}

export default BlogTile;

