import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";

const Details = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const id = parseInt(product_id);
  const gadget = data.find((gadget) => gadget.product_id === id);
  const {
    product_id: currentId,
    product_title,
    price,
    availability,
    description,
    Specification,
    rating,
    product_image,
  } = gadget;
  return (
    <div className="md:relative bg-[#9538E2] md:mb-96">
      <div className="w-9/12 mx-auto md:pt-4 md:pb-72 p-4 space-y-2">
        <h1 className="font-bold text-4xl text-center">Product Details</h1>
        <p className="text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="card card-side bg-base-100 shadow-xl md:w-8/12 mx-auto p-4 border rounded-xl md:absolute md:top-[30%] md:left-1/2 md:transform md:-translate-x-1/2 ">
        <figure>
          <img className="w-96 h-80" src={product_image} alt={product_title} />
        </figure>
        <div className="card-body space-y-2">
          <h1 className="text-5xl font-bold">{product_title}</h1>
          <p className="font-bold">Price: {price}</p>
          <div className="flex">
            <button className="btn btn-xs bg-[#2f9c0820]">
              {availability ? "In Stock" : "Out of Stock"}
            </button>
          </div>
          <p>{description}</p>
          <p className="font-bold text-xl">Specification:</p>
          <div className="space-y-2">
            {Specification.map((p, idx) => (
              <ol key={idx}>
                <li>{p}</li>
              </ol>
            ))}
          </div>
          <div>
            <p className="font-bold text-xl">Rating:</p>
            <p>{rating}</p>
          </div>
          <div className="flex items-center">
          <button className="btn btn-sm bg-[#9538E2] mr-3">Add To Card <MdOutlineShoppingCart /></button>
          <button className="p-2 rounded-full border"><IoIosHeartEmpty /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
