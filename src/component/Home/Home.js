import axios from 'axios';
import React, { useState } from 'react';

const Home = () => {
    const [text, setText] = useState('')
    const [image, setimage] = useState('')

    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleUpload = () => {
        console.log(image, text)
        const fd = new FormData();
        fd.append('text', text)
        fd.append('image', image)

        
            axios.post("https://serverofendgame-mdrobiulislam09.vercel.app/medias", fd, {
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

}



// const handlePost = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const ttext = form.ttext.value;
//     const photourl = form.photo.files[0];

// const formData = new FormData();
// formData.append('ttext', ttext);
// formData.append('photourl', photourl);


// fetch('https://serverofendgame-mdrobiulislam09.vercel.app/medias', {
//     method: 'POST',
//     body: formData,
// })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//     const bookmind = {
//         mindbook: ttext,
//         photobook: photourl,

//     }
//     fetch('https://serverofendgame-mdrobiulislam09.vercel.app/medias', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify(bookmind)

//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => console.error(err))

// }
return (
    <div>
        <section className='flex justify-center my-3'>

            <input onChange={handleText} type="text" name='text' placeholder="Write on your Mind" required className="input input-bordered w-full max-w-xs" />
            <input onChange={(e) => setimage(e.target.files[0])} type="file" name='image'></input>
            <div>
                <button onClick={handleUpload} className='btn'>upload</button>
            </div>

        </section>
        <section>
            {/* <form action="https://serverofendgame-mdrobiulislam09.vercel.app/medias" method="post" enctype="multipart/form-data">
                    <input type="file" name="avatar" />
                    <input type="submit" value="Submit"></input>
                </form> */}
        </section>
    </div>
);
};

export default Home;