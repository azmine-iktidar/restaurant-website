import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { useContext, useRef, useState } from "react";
import { MenuStyle5Arr } from "../elements/JsonData";
import { Context } from "../context/AppContext";
import OurMenuFilter from "../elements/OurMenuFilter";

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

const MenuStyle5 = () => {
  const [active, setActive] = useState<number>(0);
  const [hoverActive, setHoverActive] = useState<number>();
  const [data, setData] = useState<MenuFile[]>(MenuStyle5Arr);
  const cardRef = useRef<HTMLLIElement[]>([]); // Assuming the refs are for li elements
  const { setShowCategeryFilter } = useContext(Context);

  const filterGallery = (name: string) => {
    if (cardRef.current) {
      cardRef.current.forEach((ele) => {
        if (ele) {
          ele.style.transform = "scale(0)";
        }
      });

      const updateItems = MenuStyle5Arr.filter((el: MenuFile) =>
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
      <CommonBanner
        img={IMAGES.images_bnr5}
        title="Our Menu 5"
        subtitle="Our Menu 5"
      />

      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5 overflow-hidden relative bg-white">
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
                        <span className="mb-0">
                          <i className={`text-[25px]  lg:mr-[10px] mr-[5px] ${icon}`}></i>
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
              <Link to={"#"} className="btn btn-primary filter-btn btn-hover-2" onClick={() => {setShowCategeryFilter(true);}}>
                Filter{" "}
                <span><i className="icon-filter ml-[5px] text-xl" /></span>
              </Link>
            </div>
            <OurMenuFilter />
          </div>

          <ul id="masonry" className="row dlab-gallery-listing gallery">
            {data.map(({ img, name, price }, ind) => (
              <li key={ind} style={{ transition: "all .2s" }}
                className="card-container lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px] All pizza spicy"
                ref={(node) => {
                  if (node) {
                    cardRef.current.push(node);
                  }
                }}
              >
                <div onMouseEnter={() => { setHoverActive(ind);}}
                  className={`group rounded-lg menu-box box-hover text-center pt-10 px-5 pb-[30px] bg-white border border-grey-border hover:border-primary h-full flex duration-500 flex-col relative overflow-hidden z-[1] ${
                    hoverActive === ind ? "active" : ""
                  }`}
                >
                  <div className="w-[150px] min-w-[150px] h-[150px] mt-0 mx-auto mb-[10px] rounded-full border-[9px] border-white duration-500 z-[1]">
                    <img src={img} alt="/" className="rounded-full relative group-hover:animate-spin"/>
                  </div>
                  <div className="mt-auto">
                    <h4 className="mb-2.5"><Link to="/product-detail">{name}</Link></h4>
                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                    <h5 className="text-primary">{price}</h5>
                    <Link to="/shop-cart" className="btn btn-primary mt-[18px] btn-hover-2">
                      {" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default MenuStyle5;
