import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import { MenuDark } from "./Menu";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/AppContext";

const Header3 = () => {
  const { setShowSignInForm, headerSidebar, setHeaderSidebar } =
    useContext(Context);
  const [cart, setCart] = useState<boolean>(false);
  const [scroll, setScroll] = useState(false);

  const cartRef = useRef<HTMLLIElement[]>([]);

  const cartButton = () => {
    setCart(!cart);
  };
  const deletItems = (ind: number) => {
    // e.target.s
    cartRef.current[ind].classList.add("cartListItems");
    setTimeout(() => {
      cartRef.current[ind].remove();
    }, 500);
  };

  const scrollHandler = () => {
    if (window.scrollY > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <header className={`site-header main-bar-wraper top-0 left-0 w-full z-[999] ${scroll ? "is-fixed" : ""}`}>      
        <div className="main-bar">
          <div className="container">
            <div className="logo-header w-[180px] h-[64px] items-center relative flex float-left">              
                <Link to="/" className="anim-logo">
                  <img src={IMAGES.logo} alt="/" className="lg:w-full sm:w-[165px] w-[150px]" />
                </Link>              
            </div>

            <button
              className={`togglebtn lg:hidden block bg-primary w-[45px] h-[45px] relative rounded-md float-right mt-2 ${headerSidebar ? "open" : "" }`}
              type="button"
              onClick={() => {
                setHeaderSidebar(!headerSidebar);
              }}
            >
              <span className={`bar1 ${headerSidebar ? 'rotate1' : ''}`}></span>
              <span className={`bar1 ${headerSidebar ? 'opacity0' : ''}`}></span>
              <span className={`bar1 ${headerSidebar ? 'rotate2' : ''}`}></span>
            </button>

            <div className="extra-nav float-right items-center h-[64px] lg:flex relative hidden">
              <div className="extra-cell flex items-center">
                <ul className="flex items-center gap-[10px]">
                  <li className="inline-block">
                    <Link
                      className="bg-white user-btn white-btn flex items-center justify-center w-[45px] h-[45px] rounded-md shadow-[0_10px_10px_0_rgba(0,0,0,0.1)] text-black2"
                      to={"#"}
                      onClick={() => {
                        setShowSignInForm(true);
                      }}
                    >
                      <i className="flaticon-user text-2xl inline-flex" />
                    </Link>
                  </li>
                  <li className="inline-block">
                    <button
                      type="button"
                      className="cart-btn bg-white white-btn flex items-center justify-center w-[45px] h-[45px] rounded-md shadow-[0_10px_10px_0_rgba(0,0,0,0.1)]"
                      onClick={cartButton}
                    >
                      <i className="flaticon-shopping-bag-1 text-2xl inline-flex ping-bag-1" />
                      <span className="badge absolute top-[3px] right-[-6px] p-0 h-5 w-5 font-medium text-xs leading-5 bg-[#666666] text-white rounded-[10px]">6</span>
                    </button>
                    <div
                      style={{
                        transition: "all 0.5s",
                        opacity: cart ? "1" : "0",
                      }}
                    >
                      <ul
                        className="dropdown-menu cart-list mt-2.5"
                        style={{
                          display: cart ? "block" : "",
                          transitionDuration: "0.5s",
                          opacity: cart ? "1" : "0",
                          overflow: "hidden",
                        }}
                      >
                        <li
                          className="cart-item"
                          ref={(node) => {
                            if (node) {
                              cartRef.current.push(node);
                            }
                          }}
                        >
                          <div className="media">
                            <div className="media-left">
                              <Link to="/product-detail">
                                <img
                                  alt="/"
                                  className="media-object"
                                  src={IMAGES.shop_pic2}
                                />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h6 className="dz-title">
                                <Link
                                  to="/product-detail"
                                  className="media-heading"
                                >
                                  Double Burger
                                </Link>
                              </h6>
                              <span className="dz-price">$28.00</span>
                              <span
                                className="item-close"
                                onClick={() => {
                                  deletItems(0);
                                }}
                              >
                                &times;
                              </span>
                            </div>
                          </div>
                        </li>
                        <li
                          className="cart-item"
                          ref={(node) => {
                            if (node) {
                              cartRef.current.push(node);
                            }
                          }}
                        >
                          <div className="media">
                            <div className="media-left">
                              <Link to="/product-detail">
                                <img
                                  alt="/"
                                  className="media-object"
                                  src={IMAGES.shop_pic3}
                                />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h6 className="dz-title">
                                <Link
                                  to="/product-detail"
                                  className="media-heading"
                                >
                                  Cheese Burger
                                </Link>
                              </h6>
                              <span className="dz-price">$20.00</span>
                              <span
                                className="item-close"
                                onClick={() => {
                                  deletItems(1);
                                }}
                              >
                                &times;
                              </span>
                            </div>
                          </div>
                        </li>
                        <li
                          className="cart-item"
                          ref={(node) => {
                            if (node) {
                              cartRef.current.push(node);
                            }
                          }}
                        >
                          <div className="media">
                            <div className="media-left">
                              <Link to="/product-detail">
                                <img
                                  alt="/"
                                  className="media-object"
                                  src={IMAGES.shop_pic4}
                                />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h6 className="dz-title">
                                <Link
                                  to="/product-detail"
                                  className="media-heading"
                                >
                                  Burger
                                </Link>
                              </h6>
                              <span className="dz-price">$15.00</span>
                              <span
                                className="item-close"
                                onClick={() => {
                                  deletItems(2);
                                }}
                              >
                                &times;
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="cart-item text-center flex justify-between">
                          <h6 className="text-primary mb-0">Total:</h6>
                          <h6 className="text-primary mb-0">$63</h6>
                        </li>
                        <li className="text-center d-flex">
                          <Link to="/shop-cart" className="btn btn-primary me-2 w-100 d-block btn-hover-1"><span>View Cart</span></Link>
                          <Link to="/our-menu-1" className="btn btn-outline w-100 d-block btn-hover-1"><span>Menu</span></Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`header-nav lg:justify-start lg:flex-row flex-col lg:gap-0 gap-5 flex ${ headerSidebar ? "open" : ""}`}
              id="navbarNavDropdown"
            >
              {" "}
              <MenuDark />
            </div>
          </div>
        </div>      
    </header>
  );
};

export default Header3;
