import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Posts from '../Posts/Posts';

const Media = () => {
    const medias = useLoaderData()
    
    return (
        <div>
            {
                medias.map(n => <Posts
                    key={n._id}
                    n={n}
                ></Posts>)
            }
        </div>
    );
};

export default Media;