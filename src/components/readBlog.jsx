import './blog.css';
import React from 'react';
import BlogTile from './blogTile';


function ReadBlog({ posts }) {
   return (
      <div>
         {posts.map((arr, index) => {
            return <BlogTile blog={arr} key={index} index={index} />
         })}
      </div>
   );
}

export default ReadBlog;

