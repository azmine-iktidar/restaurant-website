import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { useContext, useRef, useState } from "react";
import { MenuStyle4Arr } from "../elements/JsonData";
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
  price: string;
}

const MenuStyle4 = () => {
  const [active, setActive] = useState<number>(0);
  const [hoverActive, setHoverActive] = useState<number>();
  const [data, setData] = useState<MenuFile[]>(MenuStyle4Arr);
  const cardRef = useRef<HTMLLIElement[]>([]); 
  const { setShowCategeryFilter } = useContext(Context);
  const filterGallery = (name: string) => {
    if (cardRef.current) {
      cardRef.current.forEach((ele) => {
        if (ele) {
          ele.style.transform = "scale(0)";
        }
      });

      const updateItems = MenuStyle4Arr.filter((el: MenuFile) =>
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
    <div className="page-content bg-white">
      <CommonBanner
        img={IMAGES.images_bnr4}
        title="Our Menu 4"
        subtitle="Our Menu 4"
      />

      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5 overflow-hidden relative bg-white">
        <div className="container">
          <div className="row justify-between">
            <div className="xl:w-10/12 lg:w-9/12 w-full px-[15px]">
              <div className="site-filters lg:mb-10 mb-[30px] sm:text-left text-center">
                <ul className="filters style-1">
                  {Buttons.map(({ icon, title }, ind) => (
                    <li
                      className={`btn lg:py-2 lg:px-[15px] p-2 lg:mr-[10px] mr-[5px] duration-500  ${active === ind ? "active" : ""}`}
                      key={ind}
                      onClick={() => {
                        setActive(ind);
                        filterGallery(title);
                      }}
                    >
                      <Link to="#" className="flex items-center lg:text-[15px] text-[13px] overflow-hidden">
                        <span className="mb-0">
                          <i className={`text-[25px]  lg:mr-[10px] mr-[5px] ${icon}`} />
                        </span>
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="xl:w-2/12 lg:w-1/4 w-full px-[15px] lg:text-right lg:block flex justify-between items-center mb-[30px]">
              <strong className="filter-item-show text-bodycolor font-medium lg:hidden block">51,740 items</strong>
              <Link to={"#"}
                className="btn btn-primary filter-btn btn-hover-2"
                onClick={() => {setShowCategeryFilter(true);}}
              >
                Filter{" "}
                <span><i className="icon-filter ml-[5px] text-xl" /></span>
              </Link>
            </div>
            <OurMenuFilter />
          </div>

          <ul id="masonry" className="row dlab-gallery-listing gallery">
            {data.map(({ img, name, price }, ind) => (
              <li
                className="card-container xl:w-1/4 lg:w-1/3 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px] All pizza spicy"
                style={{ transition: "all .2s" }}
                key={ind}
                ref={(node) => {
                  if (node) {
                    cardRef.current.push(node);
                  }
                }}
              >
                <div
                  className={`dz-img-box3 box-hover group style-4 bg-white p-[18px] flex flex-col h-[160px] relative z-[1] overflow-hidden rounded-[10px] ${
                    hoverActive === ind ? "active" : ""
                  }`}
                  onMouseEnter={() => {
                    setHoverActive(ind);
                  }}
                >
                  <div className="menu-detail flex items-center mb-3">
                    <div className="dz-media mr-5 w-[60px] min-w-[60px] h-[60px]">
                      <img src={img} alt="/" />
                    </div>
                    <div className="dz-content">
                      <h5 className="title mb-[3px] duration-500">
                        <Link to="/product-detail">{name}</Link>
                      </h5>
                      <p>Delicious and Spicy</p>
                    </div>
                  </div>
                  <div className="menu-footer max-w-[110px] mt-auto">
                    <span className="text-bodycolor text-[13px]">Regular Price</span>
                    <h5 className="price duration-500">{price}</h5>
                  </div>
                  <Link className="detail-btn" to="/product-detail"><i className="fa-solid fa-plus"/></Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MenuStyle4;
