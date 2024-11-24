import React, { useContext } from "react";
import { StoreContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItems, removeFromCart, deleveryFee, getCartTotal } =
    useContext(StoreContext);
  const total = getCartTotal() + deleveryFee;

  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between gap-5 my-14 mx-3">
        {getCartTotal() > 0 ? (
          <>
            <div className="flex flex-col flex-1">
              <div className="grid grid-cols-6 text-center text-sm font-normal lg:text-lg lg:font-semibold bg-slate-300 px-5 py-2">
                <p>image</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
              </div>
              {Object.keys(cartItems).map((id) => {
                const item = food_list.find((item) => item._id === id);

                if (item && cartItems[id] > 0) {
                  return (
                    <div
                      key={id}
                      className="grid grid-cols-6 text-center text-sm lg:text-lg font-semibold items-center py-3 border-b-2"
                    >
                      <img
                        src={item.image}
                        className="w-12 lg:w-20 h-12 lg:h-20 rounded-full object-cover "
                      />
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>{item.price * cartItems[item._id]}</p>
                      <p
                        onClick={() => removeFromCart(item._id)}
                        className="text-lg cursor-pointer hover:text-red-500"
                      >
                        X
                      </p>
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <div className="flex flex-col gap-5">
                <div className="flex border w-full bg-slate-300 lg:w-[350px] h-11 rounded-l-sm rounded-r-full">
                  <input
                    className="bg-transparent flex-1 px-3 outline-none"
                    placeholder="Promo code"
                  />
                  <button className="bg-black text-white px-3 h-full rounded-r-full uppercase font-semibold">
                    Submit
                  </button>
                </div>
                <div className="bg-slate-300 w-full lg:w-[350px] py-4 px-6 rounded-sm">
                  <h2 className="text-2xl font-semibold">Order Summary</h2>
                  <div className="flex justify-between items-center my-5">
                    <span className="">Subtotal</span>
                    <span>${getCartTotal()}</span>
                  </div>
                  {getCartTotal() > 0 && (
                    <>
                      <div className="flex justify-between items-center my-5">
                        <span className="">Delevery Fee</span>
                        <span>${deleveryFee}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Total</span>
                        <span>${total}</span>
                      </div>
                    </>
                  )}
                  <button className="bg-black text-white w-full py-2 uppercase mt-5">
                    <Link to="/place-order">
                    Checkout
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-5xl font-medium text-center w-full">
            {" "}
            Your cart is Empty
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
