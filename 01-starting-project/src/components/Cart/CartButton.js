import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {shoppingCartSlice} from "../../state/shoppingCartSlice";

const CartButton = (props) => {
    const quantity = useSelector(state => state.shoppingCart.totalQuantity);
    const dispatch = useDispatch();
    
    return (
        <button className={classes.button} onClick={() => dispatch(shoppingCartSlice.actions.toggle())}>
            <span>My Cart</span>
            <span className={classes.badge}>{quantity}</span>
        </button>
    );
};

export default CartButton;
