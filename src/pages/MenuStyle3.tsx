import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { useContext, useRef, useState } from "react";
import { MenuStyle3Arr } from "../elements/JsonData";
import OurMenuFilter from "../elements/OurMenuFilter";
import { Context } from "../context/AppContext";

const Buttons = [
  { icon: "flaticon-fast-food", title: "ALL" },
  { icon: "flaticon-cocktail", title: "COLD DRINK" },
  { icon: "flaticon-pizza-slice", title: "PIZZA" },
  { icon: "flaticon-salad", title: "SALAD" },
  { icon: "flaticon-cupcake", title: "SWEETS" },
  { icon: "flaticon-chili-pepper", title: "SPICY" },
  { icon: "flaticon-hamburger-1", title: "BURGER" },
];

interface MenuFile {
  img: string;
  categery: string;
  name: string;
}

const MenuStyle3 = () => {
  const [active, setActive] = useState<number>(0);
  const [data, setData] = useState<MenuFile[]>(MenuStyle3Arr);
  const cardRef = useRef<HTMLLIElement[]>([]); 
  const { setShowCategeryFilter } = useContext(Context);

  const filterGallery = (name: string) => {
    if (cardRef.current) {
      cardRef.current.forEach((ele) => {
        if (ele) {
          ele.style.transform = "scale(0)";
        }
      });

      const updateItems = MenuStyle3Arr.filter((el: MenuFile) =>
        el.categery.includes(name)
      );

      setData(updateItems);

      setTimeout(() => {
        cardRef.current.forEach((ele) => {
          if (ele) {
            ele.style.transform = "scale(1)";
          }
        });
      }, 100);
    }
  };

  return (
    <>
      <div className="page-content bg-white">
        <CommonBanner
          img={IMAGES.images_bnr3}
          title="Our Menu 3"
          subtitle="Our Menu 3"
        />

        <section className="content-inner-1 lg:pt-[100px] sm:pt-[70px] pt-[50px] pb-10 relative overflow-hidden">
          <div className="container">
            <div className="row justify-between">
              <div className="xl:w-10/12 lg:w-9/12 w-full px-[15px]">
                <div className="site-filters lg:mb-10 mb-[30px] sm:text-left text-center">
                  <ul className="filters style-1">
                    {Buttons.map(({ icon, title }, ind) => (
                      <li
                        className={`btn lg:py-2 lg:px-[15px] p-2 lg:mr-[10px] mr-[5px] duration-500 ${active === ind ? "active" : ""}`}
                        key={ind}
                        onClick={() => {
                          setActive(ind);
                          filterGallery(title);
                        }}
                      >
                        <Link to="#" className="flex items-center lg:text-[15px] text-[13px] overflow-hidden">
                          <span className="mb-0"><i className={`flaticon-fast-food text-[25px]  lg:mr-[10px] mr-[5px] ${icon}`} /></span>
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="xl:w-2/12 lg:w-1/4 w-full px-[15px] lg:text-right lg:block flex justify-between items-center mb-[30px]">
                <strong className="filter-item-show text-bodycolor font-medium lg:hidden block">51,740 items</strong>
                <Link to={"#"} className="btn btn-primary filter-btn btn-hover-2"
                  onClick={() => {
                    setShowCategeryFilter(true);
                  }}
                >
                  Filter{" "}
                  <span><i className="icon-filter ml-[5px] text-xl" /></span>
                </Link>
              </div>
              <OurMenuFilter />
            </div>

            <ul id="masonry" className="row dlab-gallery-listing gallery">
              {data.map(({ img, name }, ind) => (
                <li
                  className="card-container lg:w-1/3 md:w-1/2	w-full px-[15px] mb-[30px] All drink sweet salad"
                  style={{ transition: "all .2s" }}
                  key={ind}
                  ref={(node) => {
                    if (node) {
                      cardRef.current.push(node);
                    }
                  }}
                >
                  <div className="dz-img-box7 rounded-[10px] bg-white text-center relative h-full duration-200 overflow-hidden z-[1] shadow-[0px_15px_55px_rgba(34,34,34,0.15)]">
                    <div className="ddz-media relative overflow-hidden">
                      <img src={img} alt="/" className="duration-300" />
                      <div className="dz-meta">
                        <ul>
                          <li className="absolute top-0 bg-[#FE9F10] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-2.5 font-semibold text-xs leading-[18px] z-[2]">Top Seller</li>
                          <li className="rating absolute bottom-[20px] right-[20px] bg-white text-[#222222] rounded-md text-sm font-medium py-1 px-[10px] mr-0">
                            <i className="fa-solid fa-star text-[#FE9F10] text-xs top-[-2px] mr-[5px] relative scale-[1.2]"></i> 4.5
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="dz-content flex flex-col lg:py-[25px] py-5 lg:px-5 px-[15px]">
                      <h5 className="title text-black2 mb-2">
                        <Link to="/product-detail">{name}</Link>
                      </h5>
                      <p className="mb-[10px] text-sm">It is a long established fact that a reader will be distracted by the readable.</p>
                      <span className="price text-2xl font-semibold leading-[1.1]">$4.56</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default MenuStyle3;
