import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, docs, onSnapshot} from "firebase/firestore"; 
import { firestore } from "../firebase";
import { async } from "@firebase/util";

function Home(){
    const[posts, setPosts] =useState([]);

   useEffect(() =>{
    // const q = collection(firestore, "posts");
    //    onSnapshot(q, (doc) => {
    //     const posts = [];
    //     doc.forEach((doc) => {
    //       const post = doc.data();
    //       post.id = doc.id;
    //       posts.push(post);
    //     });
    //     setPosts(posts);
    //   });

    const pdata = collection(firestore, "posts");
        onSnapshot(pdata, (doc) => {
            const posts = [];
            doc.forEach((doc) => {
                const post = doc.data();
                post.id = doc.id;
                posts.push(post);
            });
            console.log(posts);
            setPosts(posts);
        });
    }, []);
    

    return(
        <div className="home">
            <h1>Tech Blog</h1>
            <div id="blog-by"> Yuvraj </div>

            {posts.map((post,index) => (
                <div className="post" key={`post-${index}`}>
                    <Link to={`/post/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                    <p>{post.subTitle}</p>
                </div>
            ))}


        </div>
    );
}

export default Home;