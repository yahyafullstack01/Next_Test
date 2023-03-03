import React, { useState, useEffect } from 'react';
import Main from "../styles/Home.module.scss"


export default function PhotoList() {
    // This state is used to save the current state using the useeffect hook to save the state on page refresh
    const [photos, setphotos] = useState([]);
    const [posts, setposts] = useState([]);

    // using the useeffect hook to save the state on page refresh
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setposts(data);
        };

        const fetchPhotos = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await response.json();
            setphotos(data);
        };

        fetchPosts();
        fetchPhotos();

    }, []);


    return (
        <>

            {posts.map(post => {
                // This function gets the photo that has a simailar id to the post 
                const photo = photos.find(photo => photo.id === post.id);

                return (
                    <div key={post.id} className={`${Main.Card} ${"flex flex-col p-4 shadow-md rounded-lg bg-cyan-900"}`}>
                        {
                            photo &&
                            <img
                                src={photo.url}
                                className="w-full  mb-4 rounded-lg"
                                alt={photo.title}
                            />
                        }
                        <div className='flex flex-col justify-between  h-full'>
                            <h1 className=" text-2xl text-white mb-4 rounded-lg text-center">{post.title}</h1>
                            <p className={"text-lg"}>{post.body}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};
