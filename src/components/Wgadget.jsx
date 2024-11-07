import Dgedget from "./Dgedget";


const Wgadget = ({wishList}) => {
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
        {wishList.map((cart) => (
          <div key={cart.product_id} className="mb-4 rounded-xl bg-white">
            <Dgedget cart={cart}></Dgedget>
          </div>
        ))}
      </div>
        </div>
    );
};

export default Wgadget;