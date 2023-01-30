import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
    {
        id: 6,
        title: "Test",
        price: 8,
        description: "Test description"
    },
    {
        id: 7,
        title: "Test2",
        price: 9,
        description: "Description for items 2"
    }
]

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {products.map((data) => {
                    return (
                        <>
                            <ProductItem 
                                key={data.id}
                                id={data.id}
                                title={data.title}
                                price={data.price}
                                description={data.description}
                            />
                        </>
                    )
                })}
            </ul>
        </section>
    );
};

export default Products;
