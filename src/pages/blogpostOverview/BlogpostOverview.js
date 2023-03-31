import React from 'react';
import posts from '../../data/posts.json';
import { Link } from 'react-router-dom';

function BlogpostOverview(){
    console.log(posts);

    return (
        <section>
            <h1>Blog overzichtspagina</h1>
            <h3>Aantal blogposts: {posts.length}</h3>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>
                        <Link to={`/blogposts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                })}
            </ul>
        </section>
    );
}
export default  BlogpostOverview;