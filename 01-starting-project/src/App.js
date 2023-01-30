import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const shoppingCartState = useSelector((state) => state.shoppingCart.isCartVisible);
    return (
        <Layout>
            {shoppingCartState && <Cart/>}
            <Products/>
        </Layout>
    );
}

export default App;
