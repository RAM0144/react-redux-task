import { useSelector } from "react-redux";

const Header = () => {
    const cart = useSelector(state => state.listingReducer.cart);

    return <span
        style={{
            position: "fixed",
            top: 10, right: 35,
            fontFamily: "fantasy",
            fontSize: "30px"
        }}
    >
        Cart({cart.length})
    </span>


};
export default Header;