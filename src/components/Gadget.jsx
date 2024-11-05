import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
    const {product_title, product_image, price, product_id} = gadget;
  return (
    <div>
      <div className="card card-compact bg-base-100 border">
        <figure className="p-4">
          <img className="rounded-xl h-52"
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}</p>
          <div className="card-actions justify-start">
          <Link to={`/gadgets/${product_id}`}><button className="btn btn-sm border-2 border-purple-400 hover:bg-green-300">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
