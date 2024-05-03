import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import ShopStyle1LeftContent from "../elements/ShopStyle1LeftContent";
import ShopStyle1RightContent from "../elements/ShopStyle1RightContent";

const ShopStyle1 = () => {
  return (
    <>
      <CommonBanner
        img={IMAGES.banner_bnr1}
        title="Shop Style 1"
        subtitle="Shop Style 1"
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
                    className="form-control bg-white py-[25px] pl-[30px] sm:pr-[150px] pr-20 border-none rounded-[10px] lg:h-[80px] h-[60px] w-full shadow-[0px_15px_55px_rgba(34,34,34,0.15)] text-[#666666] text-[15px] outline-none"
                    placeholder="Type Here"
                  />
                  <div className="input-group-addon absolute top-[50%] right-[12px] translate-y-[-50%] z-[9]">
                    <button
                      name="submit"
                      value="submit"
                      type="reset"
                      className="btn btn-primary btn-hover-2 lg:py-[15PX] xl:px-[30px] sm:py-[10px] py-[6px] px-3"
                    >
                      <span className="sm:block hidden">Search</span>
                      <i className="icon-search sm:hidden block text-xl"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <ShopStyle1LeftContent />
            <div className="lg:w-3/4 w-full px-[15px] lg:order-2 order-1 mb-[30px]">
              <div className="flex justify-between items-center">
                <h5 className="md:mb-4 lg:mb-6 mb-5 lg:block hidden">Search Results</h5>
                <strong className="filter-item-show mb-5 text-bodycolor font-medium">Search: 51,740 items</strong>
                <Link to="#" className="btn btn-primary filter-btn lg:hidden block mb-[15px] py-[5px] px-[18px] text-white">Filter</Link>
              </div>
              <ShopStyle1RightContent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopStyle1;
