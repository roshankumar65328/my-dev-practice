import {React , useState} from 'react'
import axios from 'axios'

function IntegrateApi(){
    const [products, setProducts] = useState([]);

    const getProducts = () =>{
        const api = 'https://fakestoreapi.com/products';

        axios.get(api)
        .then(products=>{
            console.log(products)
            setProducts(products.data);
            console.log(products.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }


    const postProducts = () =>{
        const api = 'https://fakestoreapi.com/products';

        axios.post(api, {
            title : 'test post product', 
            price : 13.5,
            description : 'lorem ispum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        })
        .then(products =>{
            console.log(products)
        })
        .catch(err =>{ 
            console.log(err)}
        )}


    return(
        <div className="m-25">
            <p>Click to get data from API / Link</p>
            <button onClick={getProducts} className='m-5 p-5 bg-green-500 border-2 rounded-lg'> get data </button>
            <button onClick={postProducts} className='m-5 p-5 bg-green-500 border-2 rounded-lg'> post data </button>

            <ul>
                {products.length > 0 ? (products.map(p=> (<li className='p-3 bg-green-300 m-3'> {p.title} </li>))) : (<h1>Loading...</h1> )}
            </ul>
        </div>
    )
}

export default IntegrateApi;