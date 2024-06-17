
import { useDispatch, useSelector } from "react-redux";
import styles from "./product.module.css"
import PropTypes from "prop-types";


const Product = (props) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch({ type: "add_to_cart", product: props })
        console.log(addToCart)
    };

    // { image, title, description, price, quantity,
    //     discountPercentage, rating, stock, brand, category }) => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.root}>
                    <img src={props.image} alt={props.title} />
                    <h2>{props.title}</h2>
                    <h3>Description : {props.description}</h3>

                    <h3>Brand :{props.brand}</h3>

                    <h4>Rating :{props.rating}</h4>

                    <h4>Stock : {props.stock}</h4>

                    <h4>Discount : {props.discountPercentage}</h4>

                    {/* <select >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> */}
                    <button onClick={addToCart} style={{ color: "blue", backgroundColor: "yellowgreen" }}>Add to Cart</button>

                    <h2 style={{ position: "fixed", top: 30, right: 430, color: "black" }} >Price: ${props.price}</h2>

                    <h2 style={{ position: "fixed", right: 440, bottom: 160, color: "blue" }} >SUBTOTAL : ${props.quantity}</h2>
                    <br />

                    <h2 style={{ position: "fixed", right: 440, bottom: 100, color: "green" }} >SHIPPING : FREE</h2>
                    <br />

                    <h2 style={{ position: "fixed", right: 438, bottom: 20, color: "red" }} >TOTAL : ${props.price}</h2>
                </div>

            </div>


        </>
    )
};

Product.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    brand: PropTypes.string,
    rating: PropTypes.number,
    stock: PropTypes.number,
    price: PropTypes.string,
    quantity: PropTypes.number,
    discountPercentage: PropTypes.string
}

const Listing = () => {
    const products = useSelector(state => state.listingReducer.products);

    return (
        <div>
            {(products || []).map((pd) => (
                <Product {...pd} key={pd.id} />
            ))}
        </div>
    )

};

export default Listing;