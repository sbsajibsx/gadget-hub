
// import { useState } from "react";
import Dgedget from "./Dgedget";


const Cgadget = ({ cartList, handleSort }) => {
    // const [price, setPrice] = useState([]);
    // const items = JSON.parse(localStorage.getItem('cart')) || [];
    // const total = items.reduce((acc, item) => acc + (item.price || 0), 0);
    //     setPrice(total);
  
  return (
    <div>
      <div className="flex justify-between items-center my-3">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="flex items-center">
            <p className="mr-2">Total: $</p>
            <div className="mr-2"><button className="btn bg-green-200" onClick={()=>handleSort('price')}>Sort by Price</button></div>
            <div><button className="btn bg-green-400">Purchase</button></div>
        </div>
      </div>
      <div>
        {cartList.map((cart) => (
          <div key={cart.product_id} className="mb-4 rounded-xl bg-white">
            <Dgedget cart={cart}></Dgedget>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cgadget;
