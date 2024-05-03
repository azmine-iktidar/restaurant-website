import { useState } from "react";
import { Home2AreMenuArr } from "../elements/JsonData";
import { Link } from "react-router-dom";
const buttons = [
  { icon: "flaticon-fast-food", title: "All" },
  { icon: "flaticon-cocktail", title: "COLD DRINK" },
  { icon: "flaticon-pizza-slice", title: "PIZZA" },
  { icon: "flaticon-salad", title: "SALAD" },
  { icon: "flaticon-cupcake", title: "SWEETS" },
  { icon: "flaticon-chili-pepper", title: "SPICY" },
  { icon: "flaticon-hamburger-1", title: "BURGER" },
];

interface Menus {
  img: string;
  name: string;
  price: string;
  categery: string;
}
const Home2AreMenu = () => {
  const [addActive, setActive] = useState<number>(0);
  const [data, setData] = useState<Menus[]>(Home2AreMenuArr);

  const filterButton = (name: string, ind: number) => {
    document.querySelectorAll(".card-container").forEach((ell) => {
      ell.setAttribute("style", "transform:scale(0);");
    });
    setActive(ind);
    const updateData = Home2AreMenuArr.filter((el) =>
      el.categery.includes(name)
    );
    setData(updateData);
    setTimeout(() => {
      document.querySelectorAll(".card-container").forEach((ell) => {
        ell.setAttribute(
          "style",
          "transform:scale(1);transition:all .5s linear"
        );
      });
    }, 200);
  };
  return (
    <>
      <div className="row justify-center">
        <div className="w-full px-[15px] text-center">
          <div className="site-filters mb-5">
            <ul className="filters">
              {buttons.map(({ icon, title }, ind) => (
                <li
                  key={ind}
                  onClick={() => {
                    filterButton(title, ind);
                  }}
                  className={`btn md:mb-0 mb-5 ${addActive === ind ? "active" : ""}`}
                >
                  <Link to="#">
                    <span>
                      <i className={icon}></i>
                    </span>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="clearfix">
        <ul id="masonry" className="row dlab-gallery-listing gallery">
          {data.map(({ img, name, price }, ind) => (
            <li
              className="card-container md:w-2/4 px-[15px] mb-[5px] All drink sweet salad"
              key={ind}
            >
              <div className="dz-img-box5 flex lg:flex-row md:flex-col flex-row lg:items-start md:items-center items-start lg:text-left md:text-center text-start xl:py-5 xl:px-[25px] p-[10px] rounded-[10px] duration-500 relative z-[1]">
                <div className="dz-media lg:mr-3 md:mr-0 mr-3 lg:mb-0 md:mb-5 mb-0 min-w-[80px] w-[80px]">
                  <img src={img} alt="/" />
                </div>
                <div className="dz-content w-full">
                  <div className="dz-head flex justify-between items-center">
                    <span className="header-text sm:text-lg text-base font-semibold leading-7">
                      <Link to="/our-menu-1" className="text-black2 max-w-[280px] text-ellipsis overflow-hidden block whitespace-nowrap hover:text-primary">{name}</Link>
                    </span>
                    <span className="img-line sm:block hidden"></span>
                    <span className="header-price sm:block hidden text-primary font-semibold text-xl leading-7">{price}</span>
                  </div>
                  <p className="dz-body sm:text-[15px] text-sm text-bodycolor leading-[21px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home2AreMenu;
