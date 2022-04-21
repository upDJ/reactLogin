import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ReadBlog from '../components/readBlog';
import CreateBlog from '../components/createBlog';
import axios from 'axios';

function Blog() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/blog/all')
            .then(res => res.data)
            .then(data => setBlogs(data))
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h1>Blog Page</h1>
            <Tabs defaultActiveKey="readBlog" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="readBlog" title="Read Blogs">
                    <ReadBlog posts={blogs} /> 
                </Tab>
                <Tab eventKey="create" title="Create Blogs">
                    <CreateBlog />
                </Tab>
            </Tabs>
        </div>
    );
}

export default Blog;
