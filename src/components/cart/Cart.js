import React, { Fragment } from "react";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Cart = () => {
    const { shoppingCartItems, shoppingCartId, total, cantidad } = useSelector(
      (state) => state.cart
    );

    const { isAuthenticated } = useSelector((state) => state.security);

    const navigate = useNavigate();
    const dispatch = useDispatch();


  const increaseQty = (item) => {

  }
  const decreaseQty = (item) => {

  }

  const removeCartItemhandler = (item) => {

  }


  return (
    <Fragment>
      <MetaData titulo={"Tu carrito de compras"} />
      {shoppingCartItems.length === 0 ? (
        <h2 className="mt-5">Tu carrito de compras esta vacio</h2>
      ) : (
        <Fragment>
          <h2 className="mt-5">
            Tu carrito tiene: <b>{shoppingCartItems.length} items</b>
          </h2>
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
              {shoppingCartItems.map((item) => (
                <Fragment key={item.productId}>
                  <hr />
                  <div className="cart-item">
                    <div className="row">
                      <div className="col-4 col-lg-3">
                        <img
                          src={item.image}
                          alt={item.producto}
                          height="90"
                          width="115"
                        />
                      </div>

                      <div className="col-5 col-lg-3">
                        <Link to={`/product/${item.productId}`}>{item.producto}</Link>
                      </div>

                      <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p id="card_item_price">{item.precio}</p>
                      </div>

                      <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                        <div className="stockCounter d-inline">
                          <span className="btn btn-danger minus" onClick={()=>decreaseQty(item)}>-</span>
                          <input
                            type="number"
                            className="form-control count d-inline"
                            value={item.cantidad}
                            readOnly
                          />

                          <span className="btn btn-primary plus" onClick={()=>increaseQty(item)}>+</span>
                        </div>
                      </div>

                      <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                        <i
                          id="delete_cart_item"
                          className="fa fa-trash btn btn-danger"
                          onClick={()=>removeCartItemhandler(item)}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <hr />
                </Fragment>
              ))}
            </div>

            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Orden de compra</h4>
                <hr />
                <p>
                  Subtotal:{" "}
                  <span className="order-summary-values">{cantidad} (unidades)</span>
                </p>
                <p>
                  Est. total:{" "}
                  <span className="order-summary-values">{total}</span>
                </p>

                <hr />
                <button id="checkout_btn" className="btn btn-primary btn-block">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
