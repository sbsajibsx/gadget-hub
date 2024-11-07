const Footer = () => {
  return (
    <div className="w-11/12 md:w-9/12 mx-auto">
        <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Gadget Hub</h1>
            <p className="text-gray-500 font-medium">Leading the way in cutting-edge technology and innovation.</p>
        </div>
      <footer className="footer justify-between text-base-content p-10 ">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      
    </div>
  );
};

export default Footer;
