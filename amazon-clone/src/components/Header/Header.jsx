// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// function Header() {
//   return (
//     <div className="header">
//       <Link to="/">
//         <img
//           className="header__logo"
//           src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//           alt="Amazon Logo"
//         />
//       </Link>
//       <div className="header__search">
//         <input
//           className="header__searchInput"
//           type="text"
//           placeholder="Search products..."
//         />
//         <button className="header__searchIcon">🔍</button>
//       </div>
//       <div className="header__nav">
//         <Link to="/login">
//           <div className="header__option">
//             <span className="header__optionLineOne">Hello Guest</span>
//             <span className="header__optionLineTwo">Sign In</span>
//           </div>
//         </Link>
//         <Link to="/cart">
//           <div className="header__optionBasket">
//             <span>🛒</span>
//             <span className="header__optionLineTwo header__basketCount">0</span>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Header;








import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateContext";
import "./Header.css";

function Header() {
  const { state } = useStateValue();
  const cart = state.cart;

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search products..."
        />
        <button className="header__searchIcon">🔍</button>
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/cart">
          <div className="header__optionBasket">
            <span>🛒</span>
            <span className="header__optionLineTwo header__basketCount">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;