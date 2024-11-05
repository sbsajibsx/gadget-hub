import Gadgets from "./Gadgets";
import SideBar from "./SideBar";

const All = () => {
  return (
    <div className="w-11/12 md:w-9/12 mx-auto py-20 pt-96">
        <h1 className="text-4xl font-bold text-center mb-10">Explore Cutting-Edge Gadgets</h1>
      <div className="grid grid-cols-4 md:grid-cols-5">
        <div className="col-span-1">
          <SideBar></SideBar>
        </div>
        <div className="col-span-3 md:col-span-4">
          <Gadgets></Gadgets>
        </div>
      </div>
    </div>
  );
};

export default All;
