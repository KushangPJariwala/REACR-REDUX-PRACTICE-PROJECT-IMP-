import { useDispatch,useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  const items = useSelector(item=>item.cart.items)
  // console.log('items', items)

  const addItemToCart = (title, price, description, id) => {
    // console.log(title, price, description, id);
    const newItem = { title, price, description, id };
    dispatch(cartActions.addItem({ item: newItem }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => addItemToCart(title, price, description, id)}>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
