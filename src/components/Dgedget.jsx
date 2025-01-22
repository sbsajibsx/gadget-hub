import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const Dgedget = ({cart}) => {
    const {product_title, product_image, price, description, product_id} = cart;
    const [carts, setCarts] = useState([]);
    const handleDelete= id =>{
        const removeCart = carts.filter((p) => p.id != id);
        setCarts(removeCart);
    }
    return (
        <div className="flex justify-between p-4">
            <div className="flex items-center">
                <div className="mr-4">
                    <img className="w-20 h-20" src={product_image} alt={product_title} />
                </div>
                <div className="space-y-3">
                    <h1 className="text-2xl font-semibold">{product_title}</h1>
                    <p>{description}</p>
                    <h1 className="text-xl font-semibold">Price: ${price}</h1>
                </div>
            </div>
            <div>
                <button className="text-red-600 text-4xl" onClick={()=>handleDelete(product_id)}><MdOutlineCancel /></button>
            </div>
        </div>
    );
};

export default Dgedget;