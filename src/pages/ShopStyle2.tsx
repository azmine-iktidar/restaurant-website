import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { MenuStyle3Arr } from "../elements/JsonData";
import ShopStyle1LeftContent from "../elements/ShopStyle1LeftContent";

const ShopStyle2 = () => {
  return (
    <>
      <CommonBanner
        img={IMAGES.banner_bnr2}
        title="Shop Style 2"
        subtitle="Shop Style 2"
      />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 relative bg-white">
        <div className="container">
          <div className="row search-wraper style-1 text-center lg:mt-[-135px] sm:mt-[-100px] mt-[-90px] xl:mb-[80px] lg:mb-[60px] sm:mb-[50px] mb-[40px]">
            <div className="lg:w-2/3 w-full px-[15px] m-auto">
              <form>
                <div className="input-group relative flex flex-wrap items-stretch z-[1] w-full">
                  <input
                    required
                    type="text"
                    className="form-control bg-white py-[25px] sm:pr-[150px] pr-20 pl-[30px] border-none rounded-[10px] lg:h-[80px] h-[60px] w-full shadow-[0px_15px_55px_rgba(34,34,34,0.15)] text-[#666666] text-[15px] outline-none"
                    placeholder="Type here"
                  />
                  <div className="input-group-addon absolute top-[50%] right-[12px] translate-y-[-50%] z-[9]">
                    <button
                      name="submit"
                      value="submit"
                      type="submit"
                      className="btn btn-primary btn-hover-2 lg:py-[15PX] xl:px-[30px] sm:py-[10px] py-[6px] px-3"
                    >
                      <span className="sm:block hidden">Search</span>
                      <i className="icon-search sm:hidden block text-xl" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <ShopStyle1LeftContent />
            <div className="lg:w-3/4 w-full px-[15px] lg:order-2 order-1">
              <div className="flex justify-between items-center">
                <h5 className="md:mb-4 lg:mb-6 mb-5 lg:block hidden">
                  Search Results
                </h5>
                <strong className="filter-item-show mb-5 text-bodycolor font-medium">Search: 51,740 items</strong>
                <Link to={"#"} className="btn btn-primary filter-btn lg:hidden block mb-[15px] py-[5px] px-[18px] text-white">Filter</Link>
              </div>
              <ul id="masonry" className="row">
                {MenuStyle3Arr.map(({ img, name, price }, ind) => (
                  <li
                    className="lg:w-1/3 md:w-1/2 w-full px-[15px] mb-[30px] All drink sweet salad"
                    key={ind}
                  >
                    <div className="dz-img-box7 rounded-[10px] bg-white text-center relative h-full duration-200 overflow-hidden z-[1] shadow-[0px_15px_55px_rgba(34,34,34,0.15)]">
                      <div className="dz-media relative overflow-hidden">
                        <img src={img} alt="/" className="duration-300" />
                        <div className="dz-meta">
                          <ul>
                            <li className="absolute top-0 bg-[#FE9F10] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-2.5 font-semibold text-xs leading-[18px] z-[2]">Top Seller</li>
                            <li className="rating absolute bottom-[20px] right-[20px] bg-white text-[#222222] rounded-md text-sm font-medium py-1 px-[10px] mr-0"><i className="fa-solid fa-star text-[#FE9F10] text-xs top-[-2px] mr-[5px] relative scale-[1.2]" /> 4.5</li>
                          </ul>
                        </div>
                      </div>
                      <div className="dz-content flex flex-col lg:py-[25px] py-5 lg:px-5 px-[15px]">
                        <h5 className="title text-black2 mb-2"><Link to="/product-detail">{name}</Link></h5>
                        <p className="mb-[10px] text-sm">It is Link long established fact that Link reader will be distracted.</p>
                        <span className="price text-2xl font-semibold leading-[1.1]">${price}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopStyle2;
