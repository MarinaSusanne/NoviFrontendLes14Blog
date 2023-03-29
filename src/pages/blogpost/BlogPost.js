import React from 'react';
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';
//mijn post kan ik niet ophalen

function BlogPost(){

    //ik snap deze niet helemaal! Wat gebeurt hier?
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