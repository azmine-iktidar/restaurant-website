import { useState } from "react";
import { Link } from "react-router-dom";
import { Home3OurMenuArr } from "../elements/JsonData";

const buttons = [
  { icon: "flaticon-fast-food", title: "All" },
  { icon: "flaticon-cocktail", title: "COLD DRINK" },
  { icon: "flaticon-pizza-slice", title: "PIZZA" },
  { icon: "flaticon-salad", title: "SALAD" },
  { icon: "flaticon-cupcake", title: "SWEETS" },
  { icon: "flaticon-chili-pepper", title: "SPICY" },
  { icon: "flaticon-hamburger-1", title: "BURGER" },
];

const Home3OurMenu = () => {
  const [addActive, setAddActive] = useState<number>(0);
  const [data, setData] = useState(Home3OurMenuArr);

  const filterButton = (name: string, ind: number) => {
    document.querySelectorAll(".card-container").forEach((ell) => {
      ell.setAttribute("style", "transform:scale(0);");
    });
    setAddActive(ind);

    const updateItems = Home3OurMenuArr.filter((el) => {
      return el.categery.includes(name);
    });
    setData(updateItems);
    setTimeout(() => {
      document.querySelectorAll(".card-container").forEach((ell) => {
        ell.setAttribute(
          "style",
          "transform:scale(1);transition:all .2s linear"
        );
      });
    }, 200);
  };
  return (
    <>
      <div className="row justify-between">
        <div className="xl:w-10/12 lg:w-9/12 w-full px-[15px]">
          <div className="site-filters lg:mb-10 mb-[30px] sm:text-left text-center">
            <ul className="filters style-1">
              {buttons.map(({ icon, title }, ind) => (
                <li
                  onClick={() => {
                    filterButton(title, ind);
                  }}
                  className={`btn lg:py-2 lg:px-[15px] p-2 lg:mr-[10px] mr-[5px] duration-500 ${addActive === ind ? "active" : ""}`}
                  key={ind}
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
        <div className="xl:w-2/10 px-[15px] lg:block hidden">
          <Link
            to="/our-menu-1"
            className="btn btn-white btn-hover-1 shadow-none border border-primary text-primary"
          >
            <span className="btn-text" data-text="View All">
              View All
            </span>
          </Link>
        </div>
      </div>
      <div className="clearfix">
        <ul id="masonry" className="row dlab-gallery-listing gallery">
          {data.map(({ img, name, price }, index) => (
            <li
              key={index}
              className="card-container lg:w-1/3 md:w-1/2	w-full px-[15px] mb-[30px] All drink sweet salad"
            >
              <div className="dz-img-box7 rounded-[10px] bg-white text-center relative h-full duration-200 overflow-hidden z-[1] shadow-[0px_15px_55px_rgba(34,34,34,0.15)]">
                <div className="dz-media relative overflow-hidden">
                  <img src={img} alt="/" className="duration-200" />
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
                  <p className="mb-[10px] text-sm">
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </p>
                  <span className="price text-2xl font-semibold leading-[1.1]">{price}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home3OurMenu;
