import { useEffect } from "react";
import Listing from "./Listings";
import Header from "./header";
import { useDispatch } from "react-redux";


const products = [
   
    {
        id: 1,
        title: "iPhone 13",
        description: "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
        price: "75000",
        quantity: 1,
        discountPercentage: "12.00 %",
        rating: 4.5,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        image: "https://m.media-amazon.com/images/I/314Rp+8XKWL._SX342_SY445_.jpg",

    },
    {
        id: 2,
        title: "iPhone 14",
        description: "An apple mobile which is nothing like apple",
        price: "75000",
        quantity: 1,
        discountPercentage: "12.96 %",
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg",

    },
    {
        id: 3,
        title: "iPhone 15 Pro",
        description: "FORGED IN TITANIUM — iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant",
        price: "75000",
        quantity: 1,
        discountPercentage: "4 %",
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        image: "https://m.media-amazon.com/images/I/81+GIkwqLIL._SL1500_.jpg",

    },
  

];

const Products = () => {
  
    const dispatch = useDispatch();

    const loadProducts = () => {
        dispatch({type: "load_ProdItem", products})
    }

  useEffect(() => {
    loadProducts();

  }, []);

     return(
        <div>
         <Header />
         <Listing />
        
        </div>
     )
};

export default Products;