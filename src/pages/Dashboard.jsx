import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList, getStoredWishList } from "../Utility/AddToDb";

import Cgadget from "../components/Cgadget";
import Wgadget from "../components/Wgadget";

const Dashboard = () => {
  const [sort, setSort] = useState('');


    const [isActives, setIsActives] = useState( {
        available: true,
        status: "available"
      } )
      const handleIsActiveState =(status)=>{
        if(status == 'available'){
          setIsActives( {
            available: true,
            status: "available"
          } )
        }
        else{
          setIsActives({
            available: false,
            status: "selected"
          })
        }
      }
  const [cartList, setCartList] = useState([]);
  const allCart = useLoaderData();
  console.log(allCart);
  useEffect(() => {
    const storedCartList = getStoredCartList();
    const storedCartListInt = storedCartList.map((id) => parseInt(id));
    console.log(storedCartListInt);

    const addedCartList = allCart.filter((cart) =>
      storedCartListInt.includes(cart.product_id)
    );
    setCartList(addedCartList);
  }, []);
  const [wishList, setWishList] =useState([]);
  useEffect(()=>{
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id)=> parseInt(id));
    const addedWishList = allCart.filter((cart) => storedWishListInt.includes(cart.product_id));
    setWishList(addedWishList);
  },[])

  const handleSort = sortType =>{
    setSort(sortType);
    if(sortType === 'price'){
  
      const storeCartList = [...cartList].sort((a,b)=>a.price - b.price);
      setCartList(storeCartList);
    }
  }
  
  return (
    <div>
      <div className="bg-[#9538E2]">
        <div className="w-10/12 mx-auto py-4 space-y-2">
          <h1 className="text-4xl font-bold text-black text-center">
            Dashboard
          </h1>
          <p className="text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex items-center justify-center">
            <button onClick={()=> handleIsActiveState("available")} className={`mr-3 ${
              isActives.available
                ? "btn bg-yellow-400 hover:bg-red-400"
                : "btn hover:bg-red-400"
            }`}>Cart List</button>
            <button onClick={() => handleIsActiveState("selected")} className={`${
              isActives.available
                ? "btn hover:bg-red-400"
                : "btn bg-yellow-400 hover:bg-red-400"
            }`}>Wish List</button>
          </div>
        </div>
      </div>
      <div className="md:w-9/12 mx-auto rounded-xl py-4">
        {
            isActives.available ? <Cgadget handleSort={handleSort} cartList={cartList}></Cgadget> : <Wgadget wishList={wishList}></Wgadget>
        }
      </div>
    </div>
  );
};

export default Dashboard;
