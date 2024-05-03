import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import Menu from "./Menu";
import Sidebar from "../elements/Sidebar";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/AppContext";

const Header2 = () => {
  const { setShowSidebar, headerSidebar, setHeaderSidebar } =
    useContext(Context);
  const [scroll, setScroll] = useState(false);

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
    <>
      <header
        className={`site-header main-bar-wraper top-0 left-0 w-full z-[999] ${
          scroll ? "is-fixed" : ""
        }`}
      >
        <div className="main-bar md:py-[15px] py-[5px] ">
          <div className="container-fluid px-[90px] max-xl:px-[15px] relative flex justify-between">
            <div className="logo-header w-[180px] h-[64px] items-center relative flex">
              <Link to="/" className="anim-logo">
                <img src={IMAGES.logo} alt="/" />
              </Link>
            </div>
            <button
              type="button"
              onClick={() => {
                setHeaderSidebar(!headerSidebar);
              }}
              className={`togglebtn lg:hidden block bg-primary w-[45px] h-[45px] relative rounded-md mt-2 ${
                headerSidebar ? "open" : ""
              }`}
            >
              <span className={`bar1 ${headerSidebar ? "rotate1" : ""}`}></span>
              <span
                className={`bar1 ${headerSidebar ? "opacity0" : ""}`}
              ></span>
              <span className={`bar1 ${headerSidebar ? "rotate2" : ""}`}></span>
            </button>

            <div className="extra-nav items-center h-[64px] lg:flex relative hidden pl-[25px] order-2">
              <div className="extra-cell flex items-center gap-5">
                <form className="block max-xl:hidden">
                  <div className="input-group flex relative w-full">
                    <input
                      required
                      type="text"
                      className="bg-white border-primary border text-[15px] rounded-[25px] py-2.5 px-[15px] outline-none focus:right-0"
                      placeholder="Search"
                    />
                    <div className="input-group-addon absolute top-0 right-0 text-white bg-primary rounded-full w-[44px] h-[44px] leading-[44px] text-center">
                      <i className="fa-solid fa-magnifying-glass" />
                    </div>
                  </div>
                </form>
                <button
                  className="menu-btn bg-white block relative"
                  onClick={() => {
                    setShowSidebar(true);
                  }}
                >
                  <div className="bar1 bg-[#222222]"></div>
                  <div className="bar2 bg-[#222222]"></div>
                  <div className="bar3 bg-[#222222]"></div>
                </button>
              </div>
            </div>
            <div
              className={`header-nav lg:justify-end lg:grow lg:flex-row flex-col lg:gap-0 gap-5 flex lg:relative ${
                headerSidebar ? "open" : ""
              }`}
              id="navbarNavDropdown"
            >
              <Menu />
            </div>
          </div>
        </div>
      </header>
      <Sidebar />
    </>
  );
};

export default Header2;
