import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Main from "../component/Main/Main";
import About from "../component/pages/About/About";
import FofPage from "../component/pages/FofPage/FofPage";
import Media from "../component/pages/Media/Media";
import Message from "../component/pages/Message/Message";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },   
            {
                path: '/media',
                element: <Media></Media>,
                loader: () => fetch('https://serverofendgame-mdrobiulislam09.vercel.app/medias')
            },   
            {
                path: '/message',
                element: <Message></Message>
            },   
            {
                path: '/about',
                element: <About></About>
            } 
        ]
    },
    {
        path: '/*',
        element: <FofPage></FofPage>
    }
   
])
export default router;