import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(uiActions.toggle());
  };
  const items=useSelector(state=>state.cart.items)

  const totalQuant = items?.reduce((acc,item)=>{
    return acc + item.quantity
  },0)
  // console.log('totalQuant', totalQuant)
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuant?totalQuant:0}</span>
    </button>
  );
};

export default CartButton;
