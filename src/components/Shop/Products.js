import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Fried Egg Plant'
          price={150}
          description='This is a first product - amazing!'
          id='1'
        />
        <ProductItem
          title='Chicken Kabab'
          price={360}
          description='This is a second product - amazing!'
          id='2'
        />
        <ProductItem
          title='Surti Locho'
          price={30}
          description='This is a third product - amazing!'
          id='3'
        />
        <ProductItem
          title='Dosa'
          price={120}
          description='This is a forth product - amazing!'
          id='4'
        />
      </ul>
    </section>
  );
};

export default Products;
