import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = ({ item }) => {
  // const { title, quantity, totalPrice, price } = props.item;
  // console.log('props.item', props.item)

  const dispatch = useDispatch();

  return (
    <li className={classes.item}>
      <header>
        <h4>{item.title}</h4>
        <div className={classes.price}>
          ${item?.totalPrice}{" "}
          <span className={classes.itemprice}>
            (${item.price}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>x {item.quantity}</div>
        <div className={classes.actions}>
          <button onClick={() => dispatch(cartActions.removeItem({ item  }))}>-</button>
          <button
            onClick={() => dispatch(cartActions.addItem({ item  }))}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
