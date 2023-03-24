import React from "react";
import Products from "../Products/Products";
import ProductsList from "../ProductsList/ProductsList";
import Cart from "../Cart/Cart";
import Search from "../Search/Search";

import { Route, Switch } from "react-router-dom";
const Routes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClereance
}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path="/productslist" exact>
          <ProductsList />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClereance={handleCartClereance}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
