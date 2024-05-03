import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeSpacialMenunArr } from "./JsonData";

const HomeSpacialMenu = () => {
  const [addActive, setActive] = useState<number>(1);
  return (
    <>
      <div className="row">
        {HomeSpacialMenunArr.map(({ name, price, img }, ind) => (
          <div
            className="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]"
            key={ind}
          >
            <div
              onMouseEnter={() => {
                setActive(ind);
              }}
              className={`group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1] ${
                addActive === ind ? "active" : ""
              }`}
            >
              <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
                <img src={img} alt="/" className="rounded-full relative group-hover:animate-spin" />
              </div>
              <div className="mt-auto">
                <h4 className="mb-2.5">
                  <Link to="/product-detail">{name}</Link>
                </h4>
                <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                <h5 className="text-primary">{price}</h5>
                <Link to="/shop-cart" className="btn btn-primary btn-hover-2 mt-[18px]">
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeSpacialMenu;
