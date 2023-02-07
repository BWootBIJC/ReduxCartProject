import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Notification} from "./components/UI/Notification";
import {sendCartData} from "./state/shoppingCartSlice";
function App() {
    const shoppingCartState = useSelector((state: any) => state.shoppingCart.isCartVisible);
    const cart = useSelector((state: any) => state.shoppingCart);
    const dispatch = useDispatch();
    const notification = useSelector((state: any) => state.shoppingCart.notification);

    useEffect(() => {
        //TODO: dispatch(sendCartData(cart))
    }, [cart, dispatch])

    return (
        <>
            {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
            <Layout>
                {shoppingCartState && <Cart/>}
                <Products/>
            </Layout>
        </>
    );
}

export default App;
