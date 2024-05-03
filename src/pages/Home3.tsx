import { useEffect } from "react";
import Home3BookTable from "../components/Home3BookTable";
import Home3Box from "../components/Home3Box";
import Home3OurMenu from "../components/Home3OurMenu";
import MainBanner3 from "../components/MainBanner3";
import { IMAGES } from "../constent/theme";
import HomeSpacialMenu from "../elements/HomeSpacialMenu";
import { Home3ServicesArr } from "../elements/JsonData";

const Home3 = () => {
  useEffect(() => {
    document.body.setAttribute("data-color", "color_3");
  }, []);
  return (
    <>
      <MainBanner3 />
      <Home3Box />
      <section className="content-inner lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5 bg-white relative overflow-hidden">
        <div className="container">
          <div className="mb-[50px] max-xl:mb-[30px] relative mx-auto text-center">
            <h2 className="font-lobster">Our Featured Food</h2>
          </div>
          <HomeSpacialMenu />
        </div>        
      </section>

      <section
        className="bg-light lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5 relative overflow-hidden mx-[100px] max-2xl:mx-0 rounded-[30px] max-2xl:rounded-none bg-fixed"
        style={{
          backgroundImage: `url(${IMAGES.background_pic10})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="2xl:mb-[50px] mb-[35px] relative mx-auto text-center">
            <h2 className="font-lobster">Why Choose Us ?</h2>
          </div>
          <div className="row">
            {Home3ServicesArr.map(({ icon, content }, ind) => (
              <div
                className="lg:w-1/4 md:w-2/4 w-full px-[15px]"
                key={ind}
              >
                <div className="icon-bx-wraper2 text-center min-h-[180px] pt-5 pb-[30px] px-3 relative">
                  <div className="icon-bx mb-5">
                    <div className="icon-cell w-[65px] h-[65px] min-w-[65px] leading-[65px] m-auto">
                      <i className={`text-[60px] text-[var(--primary)] inline-flex align-middle ${icon}`}></i>
                    </div>
                  </div>
                  <div className="icon-content overflow-hidden">
                    <p className="xl:text-lg text-[15px] font-medium leading-[27px] text-[#222222]">{content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="content-inner-1 lg:pt-[100px] sm:pt-[70px] pt-[50px] pb-10 relative overflow-hidden section-wrapper-6">
        <div className="container md:mb-[80px] sm:mb-[45px] mb-[25px]">
          <div className="2xl:mb-[50px] mb-[35px] relative mx-auto text-center">
            <h2 className="title font-lobster text-black2">From Our Menu</h2>
          </div>
          <Home3OurMenu />
        </div>
        <Home3BookTable />
      </section>
    </>
  );
};

export default Home3;
