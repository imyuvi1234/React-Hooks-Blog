import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {firestore} from '../firebase';
import {useFormInput} from '../hooks'

function CreatPost(){
    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');

    function handleSubmit (e) {
        e.preventDefault(); 
        // this is done to prevent reloading the page on any activity
         console.log('title', title);
         console.log('subTitle', subTitle);
         console.log('content', content);

        const Indatabase = collection(firestore, "posts");

         const docRef = addDoc(Indatabase,
                        {
                            title: title.value,
                            subTitle: subTitle.value,
                            content: content.value,
                            date_of_creation : new Date()
                        })
    }

    return(
        <div className="create-post">
            <h1>CreatePost</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-field">
                <label>Title</label>
                <input {...title}/>
                </div>

                <div className="form-field">
                <label>Sub Title</label>
                <input {...subTitle}/>

                </div>

                <div className="form-field">
                <label>Content</label>
                <textarea {...content}></textarea>
                </div>

                <button className="create-post-btn"> Create Post </button>
            </form>
        </div>
    );
}

export default CreatPost;