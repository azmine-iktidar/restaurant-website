import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { useRef, useState } from "react";
import { MenuStyle2Arr } from "../elements/JsonData";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

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

const MenuStyle2 = () => {
  const [active, setActive] = useState<number>(0);
  const [data, setData] = useState<MenuFile[]>(MenuStyle2Arr);
  const cardRef = useRef<HTMLLIElement[]>([]); 
  const heartRef = useRef<HTMLSpanElement[]>([]); 

  const filterGallery = (name: string) => {
    if (cardRef.current) {
      cardRef.current.forEach((ele) => {
        if (ele) {
          ele.style.transform = "scale(0)";
        }
      });

      const updateItems = MenuStyle2Arr.filter((el: MenuFile) =>
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

  const HearHandler = (i: number) => {
    heartRef.current[i].classList.toggle("heart-blast");
  };
  return (
    <div className="page-content bg-white">
      <CommonBanner
        img={IMAGES.banner_bnr2}
        title="Our Menu 2"
        subtitle="Our Menu 2"
      />

      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5 overflow-hidden relative bg-white">
        <div className="container">
          <div className="row">
            <div className="w-full px-[15px] text-center">
              <div className="site-filters style-2 clearfix lg:mb-12 md:mb-6 mb-5 ">
                <ul className="filters">
                  {Buttons.map(({ icon, title }, ind) => (
                    <li
                      className={active === ind ? "active" : ""}
                      key={ind}
                      onClick={() => {
                        setActive(ind);
                        filterGallery(title);
                      }}
                    >
                      <Link to="#"><span><i className={icon} /></span>{title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            selector={".lg-item"}
            elementClassNames="clearfix"
          >
            <ul id="masonry" className="row dlab-gallery-listing gallery">
              {data.map(({ img, name }, ind) => (
                <li className="card-container lg:w-1/3 md:w-1/2	w-full px-[15px] All pizza spicy" style={{ transition: "all .2s" }} key={ind}
                  ref={(node) => {
                    if (node) {
                      cardRef.current.push(node);
                    }
                  }}
                >
                  <div className="dz-img-box8 flex flex-col xl:mb-[45px] mb-[30px]" data-src={img}>
                    <Link to={img} className="dz-media overflow-hidden lg-item">
                        <img src={img} alt="" width="800" height="650" className="h-full w-full rounded-[5px] object-cover duration-500"/>
                    </Link>
                    <div className="dz-content pt-[15px] relative">
                      <div className="dz-head flex justify-between items-center">
                        <h6><Link to="/product-detail">{name}</Link></h6>
                        <span className="bg-heart w-[60px] h-[60px] inline-block my-[-25px] mx-[-18px] heart cursor-pointer"
                          onClick={() => { HearHandler(ind);}}
                          ref={(el) => {
                            if (el) {
                              heartRef.current.push(el);
                            }
                          }}
                        ></span>
                      </div>
                      <p className="category text-[13px] leading-5 uppercase">Fast Food</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </LightGallery>
        </div>
      </section>
    </div>
  );
};

export default MenuStyle2;
