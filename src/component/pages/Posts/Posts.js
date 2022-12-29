import axios from 'axios';
import React from 'react';
import './Posts.css'

const Posts = ({ n }) => {
    const { _id, text, filename } = n;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        console.log(comment)


        const fid = new FormData();
        fid.append('comment', text)


        axios.put(`https://serverofendgame-mdrobiulislam09.vercel.app/medias/${_id}`, fid, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });


        // fetch(`https://serverofendgame-mdrobiulislam09.vercel.app/medias/comments/${_id}`, {
        //     method: 'PUT'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })


    }
    return (
        <div className='new my-3'>
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img width='400' src={`https://serverofendgame-mdrobiulislam09.vercel.app/${filename}`} alt="Shoes" className="rounded" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>{text}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">LIKE</button>

                        <div className="dropdown">
                            <label tabIndex={0} className="btn m-1">Click</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <form onSubmit={handleSubmit}>
                                    <textarea name='comment' className="textarea textarea-error" placeholder="comment here"></textarea>
                                    <input type="submit" value='submit'></input>
                                </form>
                            </ul>
                        </div>

                        <button className="btn btn-info">Details</button>
                    </div>
                </div>
            </div>
            {/* <h2>Id: {_id}</h2>
            <h2>Comment: {mindbook ? mindbook: <>no Coment</>}</h2> */}
        </div>
    );
};

export default Posts;