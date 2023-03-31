import React from 'react';
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import posts from '../../data/posts.json';


function BlogPost(){
 const {blogId} = useParams();
 const currentPost = posts.find((post) => {
     return post.id === blogId;
  });

 return (
     <>
      <article>
         <h1>{currentPost.title}</h1>
         <h3>{currentPost.date}</h3>
         <p> {currentPost.content}</p>
      </article>
     </>
 );

}
export default BlogPost;