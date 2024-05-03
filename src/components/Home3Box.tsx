import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";

const Home3Box = () => {
  return (
    <section className="content-inner sm:pt-[100px] pt-[50px] overflow-hidden pb-0">
      <div className="container">
        <div className="row">
          <div className="lg:w-2/6 w-full px-[15px] mb-[30px]">
            <div
              className="adv-box bg-[#054F48] text-center overflow-unset relative rounded-[10px] h-full"
              style={{
                backgroundImage: `url(${IMAGES.images_adv_pic2})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="adv-content px-5 pt-[30px] xl:mb-0 lg:mb-[30px] mb-[45px]">
                <span className="special font-bold text-xl text-white">FRIDAY SPECIAL</span>
                <h4 className="title font-extrabold xl:text-[43px] text-[33px] text-[#FECC48] lg:leading-[64px] leading-[44px] font-poppins mb-2">TASTY BURGER</h4>
              </div>
              <div className="adv-media relative overflow-unset xl:w-[400px] w-full xl:left-[-31px] left-0 top-0 ml-auto">
                <img className="main-media ml-auto w-[400px] max-xl:w-[500px] h-[300px] max-xl:h-auto"  src={IMAGES.images_adv_pic1} alt="/" />
                <div className="item-media offer-label absolute right-5 bottom-5 w-[100px] h-[100px]">
                  <img src={IMAGES.images_adv_label} alt="/" className="absolute top-0 left-0" />
                  <span className="text-[#222222] text-[22px] font-bold top-[54%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute block leading-[1.2]">50% OFF</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-8/12 w-full px-[15px]">
            <div className="row">
              <div className="md:w-1/2 w-full mb-[30px] px-[15px]">
                <div className="adv-box bg-[var(--primary)] flex items-center overflow-unset relative rounded-[10px] h-[100%]">
                  <div className="adv-media relative rounded-[10px] xl:h-[220px] xl:min-h-[220px] h-[185px] min-h-[185px] xl:w-[200px] md:w-[145px] w-[120px] md:mr-0 mr-[30px] overflow-unset">
                    <img src={IMAGES.images_adv_pic3} alt="/"  className="absolute bottom-[-1px] object-cover"/>
                  </div>
                  <div className="adv-content lg:p-[10px] ml-[-15px]">
                    <span className="special font-bold xl:text-lg text-base text-white">TODAY SPECIAL</span>
                    <h4 className="title text-white font-bold xl:text-[50px] text-[40px] xl:leading-[55px] leading-[40px] font-poppins mb-2">Nodels</h4>
                    <span className="price font-extrabold text-2xl leading-[36px] block text-[#F9FE10] mb-2">60% OFF</span>
                    <Link to="/shop-cart" className="btn bg-white text-[#222] btn-hover-3">
                      <span className="btn-text" data-text="Add To Cart">
                        Add To Cart
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full mb-[30px] px-[15px]">
                <div
                  className="adv-box relative rounded-[10px] h-[100%] style-3"
                  style={{
                    background: `url(${IMAGES.background_pic15})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="adv-content py-10 pr-[15px] pl-[190px] max-2lg:pl-[131px]">
                    <span className="special font-bold text-base text-white">MUSHROOM</span>
                    <h4 className="title font-extrabold text-[40px] max-xl:text-[30px] text-[#FECC48] lg:leading-[1.2] leading-[50px] font-poppins mb-5">BURGER</h4>
                    <Link to="/shop-cart" className="btn bg-white text-[#222] btn-hover-3">
                      <span className="btn-text" data-text="Add To Cart">Add To Cart</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full px-[15px]">
                <div
                  className="adv-box offer relative rounded-[10px] h-[100%] sm:flex block text-center items-center overflow-unset bg-[#138919] justify-between px-[30px] pt-[30px] pr-[30px] pb-0 max-xl:pr-5 max-xl:p-0"
                  style={{
                    background: `url(${IMAGES.background_pic16})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="adv-media relative w-[250px] max-xl:w-[200px] min-w-[250px] max-xl:min-w-[200px] h-[150px] overflow-unset sm:mx-0 mx-auto">
                    <img src={IMAGES.images_adv_pic4} alt="/" className="absolute top-[-55px] max-xl:top-[-20px] left-[-90px] max-xl:left-[-70px] object-cover" />
                  </div>
                  <div className="adv-content">
                    <span className="special font-semibold text-lg text-white">
                      FOR LIMITED TIME ONLY
                    </span>
                    <h4 className="price font-extrabold text-[54px] max-xl:text-[40px] leading-[81px] max-xl:leading-[50px] block text-white mb-2">35% Offer</h4>
                  </div>
                  <Link to="/shop-cart" className="btn bg-white text-[#222] btn-hover-3">
                    <span className="btn-text" data-text="Add To Cart">
                      Add To Cart
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3Box;
