import { useLoaderData, useParams } from "react-router-dom";

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
    <div>
      <div>
        <div className="bg-[#9538E2]">
          <div className="mb-8 pt-10 pb-40 w-11/12 md:w-10/12 mx-auto">
            <h1 className="text-3xl font-bold text-center">Product Details</h1>
            <p className="text-center">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
        <div>
          <div className="hero min-h-screen">
            <div className="hero-content md:flex justify-between">
              <img
                src={product_image}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div className="space-y-2">
                <h1 className="text-5xl font-bold">{product_title}</h1>
                <p className="font-bold">Price: {price}</p>
                <button className="btn btn-xs bg-[#2f9c0820]">
                  {availability ? "In Stock" : "Out of Stock"}
                </button>
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
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
