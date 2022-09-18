import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import { collection, onSnapshot, query } from "firebase/firestore"; 


function PostDetail(){

    const[post, setPost] = useState({});
    const { postId } = useParams(); 

    useEffect(() => {
        const pdata = query(collection(firestore, "posts"));
        onSnapshot(pdata, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            setPost(doc.data());
         });
        });
    },[])

    return(
        <div className="post-detail">
            <h1>{post.title}</h1>
            <p>{post.title}</p>
        </div>
    );
}

export default PostDetail;