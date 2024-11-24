import React, { useContext } from "react";
import { StoreContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const { getCartTotal, deleveryFee } = useContext(StoreContext);
  const total = getCartTotal() + deleveryFee;
  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-[30vw] p-4">
            <h2 className="text-3xl font-medium mb-8">Delivery Informtion</h2>
            <form action="" className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input type="text" placeholder="First name" className="input-p" />
                <input type="text" placeholder="Last name" className="input-p" />
              </div>
              <input type="email" placeholder="Email address" className="input-p" />
              <input type="text" placeholder="Street" className="input-p" />
              <div className="flex gap-2">
                <input type="text" placeholder="City" className="input-p" />
                <input type="text" placeholder="State" className="input-p" />
              </div>
              <div className="flex gap-2">
                <input type="text" placeholder="Zip code" className="input-p" />
                <input type="text" placeholder="Country" className="input-p" />
              </div>
              <input type="number" placeholder="Phone" className="input-p" />
            </form>
        </div>
        <div className="w-full lg:w-[350px] p-4 rounded-sm">
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
            <Link to="/place-order">Checkout</Link>
            </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
