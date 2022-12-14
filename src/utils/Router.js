import { createBrowserRouter} from 'react-router-dom'
import Root from '../components/Root';
import Home from '../components/Home';
import Shop from '../components/Shop';
import Cart from '../components/Cart';
import About  from '../components/About';
import productAndCartLoader from './Loader/DataLoaderForProductAndCart';

export const router = createBrowserRouter([{
    path: '/',
    element: <Root/>,
    loader: productAndCartLoader,
    children:[
        {
            path:'/', element:<Home/>
        },
        {
            path:'/home', element:<Home/>
        },
        {
            path:'/shop', element:<Shop/>
        },
        {
            path:'/cart', element:<Cart/>
        },
        {
            path:'/about', element:<About/>
        }
    ],
}]);

