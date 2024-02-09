import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { cartActions } from "./store/cart-slice";

let temp = true;
function App() {
  const showCart = useSelector((state) => state.ui.cartOpen);
  const cart = useSelector((state) => state.cart);
  const changed = useSelector((state) => state.cart.changed);

  useEffect(() => {
    async function storeData() {
      if (temp) {
        temp = false;
        return;
      }
      await fetch(
        "https://redux-practice-project-ed92d-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
    }
    storeData();
  }, [changed]);

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://redux-practice-project-ed92d-default-rtdb.firebaseio.com/cart.json"
      );

      const data = await res.json();

      dispatch(cartActions.setItems({ data }));
    }

    fetchData();
  }, []);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
