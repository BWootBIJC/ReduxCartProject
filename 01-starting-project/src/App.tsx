import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Notification} from "./components/UI/Notification";

function App() {
    const shoppingCartState = useSelector((state: any) => state.shoppingCart.isCartVisible);
    const cart = useSelector((state: any) => state.shoppingCart);
    const dispatch = useDispatch();
    const notification = useSelector((state: any) => state.shoppingCart.notification);

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(shoppingCartState.actions.showNotification({
                status: 'pending',
                title: "Sending...",
                message: "Sending cart data!"
            }));
            const response = await fetch('api/products/list', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "PUT",
                body: JSON.stringify(cart)
            });
            if (!response.ok) {
                throw new Error("Sending cart data failed")
            }
            dispatch(shoppingCartState.actions.showNotification({
                status: 'success',
                title: "Success!",
                message: "Sent cart data successfully!"
            }));
            const responseData = await response.json();
        }
        sendCartData().catch(error => {
            dispatch(shoppingCartState.actions.showNotification({
                status: "error",
                title: "Error!",
                message: "Sending cart data failed!",
            }));
        })
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
