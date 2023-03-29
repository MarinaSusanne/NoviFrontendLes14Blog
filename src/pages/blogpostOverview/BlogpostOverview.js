import React from 'react';
import posts from '../data/posts.json';
import { Link } from 'react-router-dom';

//ook hier werkt de posts niet

function BlogpostOverview(){
    console.log(posts);

return(
    <section>
        <h2> Blog Overzichtspagina </h2>
        <h4> Aantal blogpost: {posts.length}</h4>
        <ul>
            {/*waarom niet met een constante zoals we geleerd hebben in de map methode? is dit gedestructered? */}
            {posts.map((post) => { return <li key={post.id}>
            <Link to={'/blogposts/${post.id}'}> {post.title} </Link>
            </li>
        })}
        </ul>
    </section>
)
}
export default  BlogpostOverview;