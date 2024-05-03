import { useContext, useEffect, useMemo } from "react";
import MainBanner from "../components/MainBanner";
import MenuSlider from "../components/MenuSlider";
import OurBlog from "../components/OurBlog";
import TeamCarosel from "../components/TeamCarosel";
import Testimonial from "../components/Testimonial";
import { IMAGES } from "../constent/theme";
import { Context } from "../context/AppContext";
import HomeImageBox from "../elements/HomeImageBox";
import HomeSpacialMenu from "../elements/HomeSpacialMenu";
import HomeImageBox2 from "../elements/HomeImageBox2";
import Reservation from "../elements/Reservation";

const Home = () => {
  const { setHeaderClass } = useContext(Context);
  useEffect(() => {
    document.body.setAttribute("data-color", "color_1");
  }, []);
  
  useMemo(() => setHeaderClass(false), []);
  return (
    <>
      <MainBanner />
      <section className="lg:pt-[100px] pt-[50px] lg:pb-[70px] pb-[40px] bg-white relative overflow-hidden section-wrapper-2">
          <div className="container">
            <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
              <h2 className="font-lobster">Special Menu</h2>
            </div>
              <HomeSpacialMenu />
          </div>
          <img className="bg1 bottom-0 left-[-275px] absolute max-2xl:hidden animate-move" src={IMAGES.background_pic2} alt="/"/>
          <img className="bg2 right-[40px] max-2xl:right-0 top-[100px] max-2xl:top-[28px] absolute 2xl:block hidden" src={IMAGES.background_pic3} alt="/" />
      </section>
      <section className="bg-light content-inner pb-0 relative overflow-hidden">
            <div className="container">
              <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
                <h2 className="font-lobster">Today's Menu</h2>
              </div>
              <HomeImageBox />
            </div>
            <img className="2xl:right-[20px] xl:right-[20px] 2xl:top-[20px] xl:top-[10px] absolute xl:block hidden" src={IMAGES.background_pic4} alt="/" />
      </section>
      <section className="bg-light relative section-wrapper-3  after:content-[''] after:h-[200px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 after:z-[0] sm:py-[100px] py-[50px]">
		    <div className="container">
          <HomeImageBox2 />
        </div>
        <img className="2xl:left-[20px] 2xl:top-[20px] absolute 2xl:block hidden" src={IMAGES.background_pic3} alt="/" />

      </section>


      <section className="sm:pb-[100px] pb-[40px] relative">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
            <h2 className="font-lobster">From Our Menu</h2>
          </div>
          <MenuSlider />
        </div>
      </section>

      <section className="bg-fixed sm:py-[100px] py-[40px] relative z-[2] after:content-[''] after:absolute after:z-[-1] after:bg-black-blur after:opacity-100 after:w-full after:h-full after:top-0 after:left-0 after:backdrop-blur-[6px]"
          style={{ backgroundImage: `url(${IMAGES.background_pic1})`, backgroundAttachment: "fixed",}}
      >
        <div className="container">
          <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
            <h2 className="font-lobster text-white">Reservation</h2>
          </div>
          <Reservation />
        </div>
      </section>
      <section className="sm:py-[100px] py-[40px] bg-white relative overflow-hidden">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
            <h2 className="font-lobster">Customer's Comment</h2>
          </div>
          <Testimonial />
        </div>
        <img className="bottom-0 right-[-355px] absolute 2xl:block hidden animate-move" src={IMAGES.background_pic2} alt="/"/>
      </section>
      <section className="bg-light sm:py-[100px] py-[40px] relative overflow-hidden">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
            <h2 className="font-lobster">Master Chefs</h2>
          </div>
        </div>
        <TeamCarosel />
      </section>
      <section className="content-inner sm:pb-[100px] pb-[40px] relative overflow-hidden">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
            <h2 className="font-lobster ">News & Blog</h2>
          </div>
          <OurBlog />
        </div>
      </section>
      <div className="map-iframe style-1 relative">
        <iframe className="w-full lg:h-[400px] sm:h-[350px] h-[300px] mb-[-10px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d244934.17139458598!2d75.27787773507539!3d25.125368923263647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1678086292169!5m2!1sen!2sin" 
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}          
        ></iframe>
      </div>
    </>
  );
};

export default Home;
