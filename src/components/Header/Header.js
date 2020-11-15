import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../FirabaseConfig";
import logo from "../../Logo.png";

function Header({ user, setUser }) {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 47) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
    return () => {
      // window.removeEventListener("scroll");
    };
  }, []);

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser({});
        localStorage.removeItem("apartment-hunt");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className={`position-sticky sticky-top w-100 ${bg && "bg-light"} `}>
      <nav className="container navbar navbar-expand-lg header">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" className="header__logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <NavLink
              activeClassName="selected"
              className="nav-link ml-3"
              exact
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="selected"
              className="nav-link ml-3"
              to="/admin/myrent"
            >
              My Orders
            </NavLink>
            <NavLink
              activeClassName="selected"
              className="nav-link ml-3"
              to="/admin/servicelist"
            >
              Dashboard
            </NavLink>

            <div className="loginBtn">
              {user.email ? (
                <button className="btn ml-3" onClick={logout}>
                  LOGOUT
                </button>
              ) : (
                <NavLink className="nav-link btn ml-3 px-3 " to="/login">
                  LOGIN
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

//   <header className='header'>
//   <div className="container">
//     <div className="row">
//       <div className="col-md-12">
//         <nav className="navbar navbar-expand-lg">
//           <Link className="navbar-brand" href="#">
//             <img src={logo} alt="" className="img-fluid" />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div
//             className="collapse navbar-collapse"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item active">
//                 <Link className="nav-link" href="#">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item active">
//                 <Link className="nav-link" href="#">
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item active">
//                 <Link className="nav-link" href="#">
//                   Services
//                 </Link>
//               </li>
//               <li className="nav-item active">
//                 <Link className="nav-link" href="#">
//                   Event
//                 </Link>
//               </li>
//               <li className="nav-item active">
//                 <Link className="nav-link" href="#">
//                   Contact
//                 </Link>
//               </li>
//               <li className="nav-item active">
//                 <button className="btn button">Login</button>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   </div>
// </header>
