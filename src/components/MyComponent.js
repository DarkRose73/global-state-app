import React, { useContext } from "react";
import { StoreContext, useDispatch, useStore } from "../store/StoreProvider";
import { TYPES } from "../store/storeReducer";

const MyComponent = () => {
  //   const [store, dispatch] = useContext(StoreContext);
  const store = useStore();
  const dispatch = useDispatch();
  const { user, products } = store;
  return (
    <div>
      <h1>MyComponent</h1>
      <h2>User: {user?.name}</h2>
      <button onClick={() => dispatch({ type: TYPES.AUTH_LOGOUT })}>
        Logout
      </button>
      <button
        onClick={() =>
          dispatch({ type: TYPES.AUTH_LOGIN, payload: { id: 1, name: "Luis" } })
        }
      >
        Login
      </button>

      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: TYPES.PRODUCT_DELETE_ALL })}>
        Delete All
      </button>
      <button onClick={() => dispatch({ type: TYPES.PRODUCT_CHANGE })}>
        Change
      </button>
    </div>
  );
};

export default MyComponent;
