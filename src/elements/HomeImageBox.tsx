import { useState } from "react";
import { HomeImageBoxArr } from "./JsonData";
import { Link } from "react-router-dom";

const HomeImageBox = () => {
  const [addActive, setActive] = useState<number>(1);
  
  return (
    <>
      <div className="row inner-section-wrapper">
        {HomeImageBoxArr.map(({ img, name, price }, ind) => (
          <div className="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]" key={ind}>
            <div className={`rounded-[10px] shadow-[0_15px_55px_rgba(35,35,35,0.15)] duration-500 relative z-[1] overflow-hidden group dz-img-box ${ addActive === ind ? "active" : ""}`}
              onMouseEnter={() => { setActive(ind);}}
            >
              <div className="w-full min-w-full h-full">
                <img src={img} alt="/" className="w-full block" />
              </div>
              <span className="absolute top-0 bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-2.5 font-semibold text-xs leading-[18px] z-[2]">TOP SELLER</span>
              <div className="content bg-white text-center py-[23px] px-[15px] block duration-500 absolute w-full bottom-0 mb-0 group-hover:bottom-[-150px] group-hover:opacity-0">
                <h5 className="mb-2.5">
                  <Link to="/our-menu-1">{name}</Link>
                </h5>
                <p className="mb-[2px]">Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
              </div>
              <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                  <div className="info relative">
                    <h5 className="mb-0"><Link className="text-white" to="/our-menu-1">Pasta</Link></h5>
                    <span className="text-xl text-[var(--secondary-dark)] font-bold leading-[30px]">{price}</span>
                  </div>
                  <Link to="/shop-cart" >
                    <i className="flaticon-shopping-cart bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex items-center relative justify-center text-2xl text-center"></i>
                  </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full text-center mt-[10px]">
          <Link to="/our-menu-2" className="btn btn-md btn-primary btn-hover-1">
            <span>See All Dishes</span>
          </Link>
        </div>
      </div>
        
    </>
  );
};

export default HomeImageBox;
