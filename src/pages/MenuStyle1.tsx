import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { MenuStyle1Arr, MenuStyle1Arr2 } from "../elements/JsonData";

const MenuStyle1 = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner
        img={IMAGES.banner_bnr1}
        title="Our Menu 1"
        subtitle="Our Menu 1"
      />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5 section-wrapper-7 overflow-hidden relative bg-white">
        <div className="container">
          <div className="row inner-section-wrapper md:mb-[50px]">
            {MenuStyle1Arr.map(({ title, child }, ind) => (
              <div className="xl:w-1/3 md:w-1/2 w-full px-[15px]" key={ind}>
                <div className="menu-head mb-[25px]">
                  <h4 className="title font-lobster text-[34px] font-normal text-primary">{title}</h4>
                </div>
                {child?.map(({ categery, price }, index) => (
                  <div
                    className="dz-shop-card style-2 relative overflow-hidden mb-[30px] p-0 shadow-none"
                    key={index}
                  >
                    <div className="dz-content flex flex-col w-full">
                      <div className="dz-headdz-head flex justify-between items-center mb-3">
                        <span className="header-text lg:text-lg text-base lg:leading-7 lg:leading-528px]a font-semibold">
                          <Link to="/shop-style-2" className="text-black2 max-w-[280px] text-ellipsis overflow-hidden block whitespace-nowrap duration-500 hover:text-primary">{categery}</Link>
                        </span>
                        <span className="img-line block"></span>
                        <span className="header-price header-price text-primary font-semibold text-xl leading-7">{price}</span>
                      </div>
                      <p className="dz-body dz-body text-[15px] text-bodycolor leading-[21px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="row">
            {MenuStyle1Arr2.map(({ title, child }, ind) => (
              <div className="xl:w-1/3 md:w-1/2 w-full px-[15px]" key={ind}>
                <div className="menu-head mb-[25px]">
                  <h4 className="title font-lobster text-[34px] font-normal text-primary">{title}</h4>
                </div>
                {child?.map(({ categery, price }, index) => (
                  <div
                    className="dz-shop-card style-2 relative overflow-hidden mb-[30px] p-0 shadow-none"
                    key={index}
                  >
                    <div className="dz-content flex flex-col w-full">
                      <div className="dz-headdz-head flex justify-between items-center mb-3">
                        <span className="header-text lg:text-lg text-base lg:leading-7 lg:leading-528px]a font-semibold">
                          <Link to="/shop-style-2" className="text-black2 max-w-[280px] text-ellipsis overflow-hidden block whitespace-nowrap duration-500 hover:text-primary">{categery}</Link>
                        </span>
                        <span className="img-line block"></span>
                        <span className="header-price header-price text-primary font-semibold text-xl leading-7">{price}</span>
                      </div>
                      <p className="dz-body dz-body text-[15px] text-bodycolor leading-[21px] font-normal">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <img className="bg1 animate-move absolute top-[85px] left-[-110px] max-2xl:hidden" src={IMAGES.background_pic12} alt="/"/>
        <img className="bg2 animate-move absolute right-[-54px] top-[30px] max-2lg:top-auto max-2lg:bottom-0 z-[0] 2xl:w-[600px] md:w-[500px] md:block hidden" src={IMAGES.background_pic14} alt="/" />
      </section>
    </div>
  );
};

export default MenuStyle1;
