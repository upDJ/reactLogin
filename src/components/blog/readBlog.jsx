import './blog.css';
import React from 'react';
import BlogTile from './blogTile';


function ReadBlog({ obj }) {
   return (
      <div>
         {Object.entries(obj).map((post, index) => { console.log(post); return <BlogTile header={post[0]} blog={post[1]} key={index} index={index} />})
         }
         
      </div>
   );
}

export default ReadBlog;

