import { IMAGES } from "../constent/theme";
import BlogGridCard from "../elements/BlogGridCard";
import CommonBanner from "../elements/CommonBanner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { BlogGrid3MasonaryArr } from "../elements/JsonData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const BlogGrid3Masonary = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="XJb1G9iRoL4"
        onClose={() => setIsOpen(false)}
      />
      <>
        <CommonBanner img={IMAGES.banner_bnr1} title="Blog Grid 3 Masonry" subtitle="Blog Grid 3 Masonry"/>
        <section className="content-inner-1 sm:pt-[100px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5">
          <div className="container clearfix">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="30px" columnsCount={3}>
                <BlogGridCard img={IMAGES.blog_grid3_pic1} title="Paradise Taste of Dishes"/>
                <div className="card-container">
                  <div className="dz-card rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] bg-white group ">
                    <Swiper
                      className="service2-swiper"
                      modules={[Autoplay, Pagination]}
                      autoplay={{ delay: 1500 }}
                      speed={1200}
                      pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                      }}
                    >
                      {BlogGrid3MasonaryArr.map(({ img }, ind) => (
                        <SwiperSlide className="swiper-slide" key={ind}>
                          <img src={img} alt="" />
                        </SwiperSlide>
                      ))}
                      <div className="swiper-pagination style-1 inline-block absolute bottom-2.5"></div>
                    </Swiper>
                    <div className="content flex-col flex p-[30px] max-xl:p-5 relative">
                      <div className="mb-2.5">
                        <ul className="flex items-center">
                          <li className="inline-block relative text-[13px] mr-3">
                            <Link to={"#"} className="text-sm font-medium text-bodycolor">
                              <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" /> 31 Mar 2024
                            </Link>
                          </li>
                          <li className="inline-block relative text-[13px] mr-3">
                            <Link to={"#"} className="text-sm font-medium text-bodycolor">
                              <i className="flaticon-chat-bubble text-base text-primary mr-[5px]" /> 1.0K{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h5 className="mb-2">The Fork & Knife</h5>
                      <p className="text-base">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have.
                      </p>
                      <div>
                        <Link to="/blog-standard" className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-container ">
                  <div
                    className="dz-card style-3 dz-card-large blog-half relative min-h-[570px] h-full overflow-hidden rounded-lg flex flex-col mb-[30px]"
                    style={{
                      backgroundImage: `url(${IMAGES.blog_large_pic1})`,
                    }}
                  >
                    <div className="dz-info p-[30px] z-[1] mt-auto">
                      <h4 className="dz-title mb-[15px]">
                        <Link to="/blog-standard" className="text-white">
                          Exploring the World of Pizza
                        </Link>
                      </h4>
                      <div className="dz-meta">
                        <ul>
                          <li className="dz-date absolute top-[35px] left-[35px] after:hidden py-[10px] px-[15px] block duration-1000 hover:text-primary hover:bg-white">14 Feb 2024</li>
                          <li className="dz-user mr-[34px]">
                            <Link to={"#"} className="text-white">
                              <i className="fa-solid fa-user text-xs text-primary mr-[5px] relative top-0 scale-[1.2]"></i>
                              By <span className="text-primary">KK Sharma</span>
                            </Link>
                          </li>
                          <li className="dz-comment mr-[34px]">
                            <Link to={"#"} className="text-white">
                              <i className="fa-solid fa-message text-xs text-primary mr-[5px] relative top-0 scale-[1.2]"></i>
                              15 Comments
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-container ">
                  <blockquote className="wp-block-quote style-1 text-primary xl:pt-5 md:pt-[25px] md:pr-[2rem] md:pb-5 md:pl-7 p-5 shadow-[0px_15px_50px_rgba(34,34,34,0.15)] rounded-[10px] relative ">
                    <p className="xl:text-[22px] md:text-lg text-base xl:leading-[1.5] leading-[22px] text-black2 mb-4">
                      Create An Information That’s Easy To Use Usability
                      Considerations For Partially
                    </p>
                    <cite className="relative font-semibold text-primary not-italic	text-base">Ronald M. Spino</cite>
                  </blockquote>
                </div>
                <BlogGridCard
                  img={IMAGES.blog_grid3_pic4}
                  title="Flavors Of The World"
                />
                <div className="card-container ">
                  <div className="dz-card rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] bg-white group ">
                    <Swiper
                      className="service-swiper swiper"
                      modules={[Autoplay, Navigation, Pagination]}
                      autoplay={{ delay: 1200 }}
                      pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                      }}
                      speed={1200}
                      navigation={{
                        prevEl: ".service-button-prev",
                        nextEl: ".service-button-next",
                      }}
                    >
                      {BlogGrid3MasonaryArr.map(({ img }, ind) => (
                        <SwiperSlide key={ind}>
                          <img src={img} alt="" />
                        </SwiperSlide>
                      ))}
                      <div className="swiper-pagination style-1 inline-block absolute bottom-2.5"></div>
                      <div className="service-button-prev btn-prev absolute rounded-full top-[50%] bg-white text-primary hover:bg-primary hover:text-white translate-y-[-50%] duration-500">
                        <i className="icon-arrow-left"></i>
                      </div>
                      <div className="service-button-next btn-next absolute rounded-full top-[50%] bg-white text-primary hover:bg-primary hover:text-white translate-y-[-50%] duration-500 right-0">
                        <i className="icon-arrow-right"></i>
                      </div>
                    </Swiper>
                    <div className="content flex-col flex p-[30px] max-xl:p-5 relative">
                      <div className="mb-2.5">
                        <ul className="flex items-center">
                          <li className="inline-block relative text-[13px] mr-3">
                            <Link to={"#"} className="text-sm font-medium text-bodycolor">
                              <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150"></i> 20 Nov
                              2024
                            </Link>
                          </li>
                          <li className="inline-block relative text-[13px] mr-3">
                            <Link to={"#"} className="text-sm font-medium text-bodycolor">
                              <i className="flaticon-chat-bubble text-base text-primary mr-[5px]"></i> 4.0K
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h5 className="mb-2">Tabletop Treats Cheese</h5>
                      <p className="text-base">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have.
                      </p>
                      <div>
                        <Link to="/blog-standard"
                          className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <BlogGridCard
                  img={IMAGES.blog_grid3_pic2}
                  title="Taste Excitement"
                />
                <div className="card-container ">
                  <div className="dz-card rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] bg-white group ">
                    <Swiper
                      className="service-swiper swiper"
                      modules={[Autoplay, Navigation]}
                      autoplay={{ delay: 1200 }}
                      speed={1200}
                      navigation={{
                        prevEl: ".service-button-prev",
                        nextEl: ".service-button-next",
                      }}
                    >
                      {BlogGrid3MasonaryArr.map(({ img }, inde) => (
                        <SwiperSlide className="swiper-slide" key={inde}>
                          <img src={img} alt="" />
                        </SwiperSlide>
                      ))}
                      <div className="swiper-pagination style-1 inline-block absolute bottom-2.5"></div>
                      <div className="service-button-prev btn-prev absolute rounded-full top-[50%] bg-white text-primary hover:bg-primary hover:text-white translate-y-[-50%] duration-500">
                        <i className="icon-arrow-left"></i>
                      </div>
                      <div className="service-button-next btn-next absolute rounded-full top-[50%] bg-white text-primary hover:bg-primary hover:text-white translate-y-[-50%] duration-500 right-0">
                        <i className="icon-arrow-right"></i>
                      </div>
                    </Swiper>
                    <div className="content flex-col flex p-[30px] max-xl:p-5 relative">
                      <div className="mb-2.5">
                        <ul className="flex items-center">
                          <li className="inline-block relative text-[13px] mr-3">
                            <Link to={"#"} className="text-sm font-medium text-bodycolor">
                              <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150"></i> 20 Nov
                              2024
                            </Link>
                          </li>
                          <li className="inline-block relative text-[13px] mr-3">
                            <Link to={"#"} className="text-sm font-medium text-bodycolor">
                              <i className="flaticon-chat-bubble text-base text-primary mr-[5px]"></i> 4.0K
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h5 className="mb-2">Tabletop Treats Cheese</h5>
                      <p className="text-base">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have.
                      </p>
                      <div>
                        <Link to="/blog-standard"
                          className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-container ">
                  <div className="overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] bg-white group">
                    <div className="dz-media w-full h-full mb-0 relative overflow-hidden">
                      <Link to="/blog-standard"  className="block">
                        <img src={IMAGES.blog_grid3_pic1} alt="/" className="block w-full group-hover:scale-110 duration-500" />
                      </Link>
                      <Link
                        className="video video-btn popup-youtube absolute top-[50%] left-[50%] 2xl:w-[60px] md:w-[55px] w-[60px] 2xl:h-[60px] md:h-[55px] h-[60px] bg-primary text-white rounded-full 2xl:text-lg md:text-base text-lg flex items-center justify-center translate-x-[-50%]  translate-y-[-50%] duration-500 hover:scale-125"
                        to="#"
                        onClick={() => {
                          setIsOpen(true);
                        }}
                      >
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                    <div className="content flex-col flex p-[30px] max-xl:p-5 relative">
                      <div className="mb-2.5">
                        <ul className="flex items-center">
                            <li className="inline-block relative text-[13px] mr-3">
                                <Link to={"#"} className="text-sm font-medium text-bodycolor"><i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" /> 30 Nov 2024</Link>
                            </li>
                            <li className="inline-block relative text-[13px] mr-3">
                                <Link to={"#"} className="text-sm font-medium text-bodycolor"><i className="flaticon-chat-bubble text-base text-primary mr-[5px]" /> 3.5K </Link>
                            </li>
                        </ul>
                      </div>
                      <h5 className="mb-2">Paradise Taste of Dishes</h5>
                      <p className="text-base">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have.
                      </p>
                      <div>
                        <Link to="/blog-standard"
                          className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2"
                        >
                          Read More
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-container ">
                  <div className="overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] bg-white group ">
                    <div className="dz-media w-full h-full mb-0 relative overflow-hidden">
                      <Link to="/blog-standard" className="block">
                        <img src={IMAGES.blog_grid3_pic2} alt="/" className="block w-full group-hover:scale-110 duration-500"/>
                      </Link>
                    </div>
                    <div className="content flex-col flex p-[30px] max-xl:p-5 relative">
                      
                      <div className="mb-2.5">
                        <ul className="flex items-center">
                          <li className="inline-block relative text-[13px] mr-3">
                            <Link to={"#"} className="text-sm font-medium text-bodycolor">
                              <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150"></i>
                              By <span>KK Sharma</span>
                            </Link>
                          </li>
                          <li className="inline-block relative text-[13px] mr-3">
                            <Link to={"#"} className="text-sm font-medium text-bodycolor">
                              <i className="flaticon-chat-bubble text-xs text-primary mr-[5px] translate-y-[1px] scale-150"></i>
                              24 Comments
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h5 className="dz-title">Taste Excitement</h5>
                      <p className="text-base">
                        Nostrud tem exrcitation duis laboris nisi ut aliquip sed
                        duis aute cupidata.
                      </p>
                       <div>
                          <Link to="/blog-standard" className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </section>
      </>
    </>
  );
};

export default BlogGrid3Masonary;
