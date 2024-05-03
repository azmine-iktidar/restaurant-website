import { Link } from "react-router-dom";
import CommonBanner from "../elements/CommonBanner";
import { IMAGES } from "../constent/theme";
import { TestimonialArr } from "../elements/JsonData";
import { useState } from "react";

const Testimonial = () => {
  const [refreshToggle, setRefreshToggle] = useState(false);
  const [datas, setDatas] = useState(TestimonialArr)
  const hendelClick = () => {
      setRefreshToggle(true);
      setTimeout(() => {
        setDatas([
          ...datas,
          datas[Math.floor(Math.random() * Math.floor(datas.length - 1))],      
        ]);
        setRefreshToggle(false);
      }, 1000);
  };

  return (
    <>
      <CommonBanner
        img={IMAGES.images_bnr5}
        title="Testimonial"
        subtitle="Customer's Comment"
      />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 overflow-hidden">
        <div className="container">
          <div className="row loadmore-content">
            {datas.map(({ img, name, diraction }, ind) => {
              if (diraction == "left") {
                return (
                  <div className="w-full px-[15px] lg:mb-[60px] mb-[30px]" key={ind}>
                    <div className="testimonial-2 flex lg:flex-row flex-col bg-white relative">
                      <div className="dz-media rounded-lg xl:w-[570px] xl:min-w-[570px] lg:w-[450px] lg:min-w-[450px] w-full relative overflow-hidden">
                        <img src={img} alt="/" className="max-xl:h-full object-cover"/>
                      </div>
                      <div className="testimonial-1 lg:pt-5 lg:pb-[30px] lg:pl-[30px] py-5 relative w-full flex flex-col">
                        <div className="testimonial-text relative my-[15px] text-base">
                          <p className="xl:text-[18px] text-base leading-[32px] font-medium text-[#222222]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                        <div className="testimonial-info pl-[15px] mt-auto relative z-[1] after:content-[''] after:bg-primary after:rounded after:h-[5px] after:w-[50px] after:absolute after:top-[25px] after:left-[-22px] after:rotate-90">
                          <h5 className="testimonial-name font-bold leading-[32px] lg:text-[25px] text-lg">{name}</h5>
                          <span className="testimonial-position leading-[21px] text-sm block text-primary">Food Expert</span>
                        </div>
                        <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[15px] xl:text-[102px] lg:text-[85px] text-[65px] text-primary inline-flex items-center" />
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="w-full px-[15px] lg:mb-[60px] mb-[30px]" key={ind}>
                    <div className="testimonial-2 flex lg:flex-row flex-col-reverse bg-white relative">
                      <div className="testimonial-1 lg:pt-5 lg:pb-[30px] lg:pr-[30px] py-5 relative w-full flex flex-col">
                        <div className="testimonial-text relative my-[15px] text-base">
                          <p className="xl:text-[18px] text-base leading-[32px] font-medium text-[#222222]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                        <div className="testimonial-info pl-[15px] mt-auto relative z-[1] after:content-[''] after:bg-primary after:rounded after:h-[5px] after:w-[50px] after:absolute after:top-[25px] after:left-[-22px] after:rotate-90">
                          <h5 className="testimonial-name font-bold leading-[32px] lg:text-[25px] text-lg">{name}</h5>
                          <span className="testimonial-position leading-[21px] text-sm block text-primary">Food Expert</span>
                        </div>
                        <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[15px] xl:text-[102px] lg:text-[85px] text-[65px] text-primary inline-flex items-center"/>
                      </div>
                      <div className="dz-media rounded-lg xl:w-[570px] xl:min-w-[570px] lg:w-[450px] lg:min-w-[450px] w-full relative overflow-hidden">
                        <img src={img} alt="/" className="max-xl:h-full object-cover"/>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="text-center m-t10">
            <Link className="btn btn-primary dz-load-more btn-hover-2" to={"#"}
              onClick={() => hendelClick()}
            >
              Load More {" "}{refreshToggle && <i className="ms-1 fa fa-refresh" />}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
