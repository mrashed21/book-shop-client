import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center w-11/12 mx-auto">
          {/* navbar start */}
          <h2>ভ্রাম্যমাণ দোকান</h2>
          {/* navbar center */}
          <div>
            <ul className="flex gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
          {/* navbar end */}
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
              <li>
                <button>Add to Cart</button>
              </li>
              <li>
                <button>Checkout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
