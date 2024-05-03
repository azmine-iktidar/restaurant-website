import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";

const ServiceDetail = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner
        img={IMAGES.banner_bnr2}
        title="Services Detail"
        subtitle="Services Detail"
      />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] overflow-hidden lg:pb-[70px] sm:pb-10 pb-5">
        <div className="container">
          <div className="row">
            <div className="lg:w-1/3 w-full px-[15px] lg:order-1 order-2">
              <aside className="lg:sticky lg:pr-5 pb-[1px]">
                <div className="mb-[50px]">
                  <div className="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
                    <h5>Search</h5>
                  </div>
                  <form role="search" method="post" className="mb-[10px]">
                    <div className="input-group flex flex-wrap relative items-stretch w-full">
                      <div className="input-side bg-primary rounded-md flex m-0 p-[5px] items-center w-full h-[60px]">
                        <input name="text" placeholder="Search" type="text"
                          className="bg-white border-0 rounded-md z-0 h-[50px] py-[6px] pl-5 w-full outline-none"
                        />
                        <div className="input-group-btn">
                          <button type="reset" className="btn ml-[5px] w-[50px] min-w-[50px] h-[50px] p-0 justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20"  fill="none"  xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M9.58366 17.5001C13.9559 17.5001 17.5003 13.9557 17.5003 9.58342C17.5003 5.21116 13.9559 1.66675 9.58366 1.66675C5.21141 1.66675 1.66699 5.21116 1.66699 9.58342C1.66699 13.9557 5.21141 17.5001 9.58366 17.5001Z"
                                stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                              />
                              <path d="M18.3337 18.3334L16.667 16.6667" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="mb-[50px]">
                  <div className="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
                    <h5>Recent Post</h5>
                  </div>
                  <div className="widget-post-bx style-1">
                    <div className="widget-post bg-transparent flex items-center rounded-[10px] mb-[30px] clearfix">
                      <div className="dz-media rounded-[10px] mr-[15px] w-[100px] min-w-[100px] h-[100px] overflow-hidden">
                        <img src={IMAGES.blog_recent_pic4} alt="/" />
                      </div>
                      <div className="dz-info relative">
                        <div className="dz-meta">
                          <ul className="px-[-10px]">
                            <li className="text-[#1F1F1F] text-sm font-normal leading-[30px] mr-[25px] relative inline-block">
                              <Link to={"#"} className="text-[#1F1F1F]">STANDARD</Link>
                            </li>
                            <li className="date text-[#1F1F1F] text-sm font-medium leading-[30px] mx-[10px] relative inline-block">
                              <Link to={"#"} className="text-[#666666]">Dec 10, 2023</Link>
                            </li>
                          </ul>
                        </div>
                        <h6 className="text-base"><Link to="/blog-standard">Come Dine with Us!</Link></h6>
                      </div>
                    </div>
                  </div>
                  <div className="widget-post-bx style-1">
                    <div className="widget-post bg-transparent flex items-center rounded-[10px] mb-[30px] clearfix">
                      <div className="dz-media rounded-[10px] mr-[15px] w-[100px] min-w-[100px] h-[100px] overflow-hidden">
                        <img src={IMAGES.blog_recent_pic5} alt="/" />
                      </div>
                      <div className="dz-info relative">
                        <div className="dz-meta">
                          <ul className="px-[-10px]">
                            <li className="text-[#1F1F1F] text-sm font-normal leading-[30px] mr-[25px] relative inline-block">
                              <Link to={"#"} className="text-[#1F1F1F]">STANDARD</Link>
                            </li>
                            <li className="date text-[#1F1F1F] text-sm font-medium leading-[30px] mx-[10px]  relative inline-block">
                              <Link to={"#"} className="text-[#666666]">May 12, 2023</Link>
                            </li>
                          </ul>
                        </div>
                        <h6 className="text-base"><Link to="/blog-standard">Take Link Bite Out of Life</Link></h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-[50px] widget_categories">
                  <div className="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
                    <h4>Categories</h4>
                  </div>
                  <ul>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative"><Link className="text-bodycolor text-[15px] font-medium float-left text-left" to="/blog-standard">All Services</Link></li>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative"><Link className="text-bodycolor text-[15px] font-medium float-left text-left" to="/blog-standard">Water</Link></li>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative"><Link className="text-bodycolor text-[15px] font-medium float-left text-left" to="/blog-standard">Residental Cleaning</Link></li>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative"><Link className="text-bodycolor text-[15px] font-medium float-left text-left" to="/blog-standard">Summer Pizza</Link></li>
                    <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative"><Link className="text-bodycolor text-[15px] font-medium float-left text-left" to="/blog-standard">Free Support</Link></li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="lg:w-4/6 w-full px-[15px] lg:order-2 order-1 mb-[30px]">
              <div className="dz-card blog-half dz-card sidebar mb-0">
                <div className="dz-media rounded-[10px] overflow-hidden">
                  <img src={IMAGES.blog_detail_pic2} alt="/" className="w-full h-auto" />
                </div>
                <div className="dz-info pt-[25px]">
                  <h2 className="lg:text-4xl md:text-3xl text-[1.75rem] mb-2 font-semibold">Delivery Services in Today's World</h2>
                  <div className="dz-meta mb-5">
                    <ul>
                      <li className="dz-user">
                        <Link to={"#"} className="text-black2">
                          <i className="fa-solid fa-user text-base text-primary mr-[5px] relative top-0 scale-[1.2]" />By <span>KK Sharma</span></Link>
                      </li>
                      <li className="dz-comment">
                        <Link to={"#"} className="text-black2"><i className="fa-solid fa-message text-base text-primary mr-[5px] relative top-0 scale-[1.2]" />24 Comments</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dz-post-text style-1">
                    <p className="mb-[10px] text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make  Link type specimen book.
                    </p>
                    <p className="text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </div>
                  <blockquote className="wp-block-quote style-1 text-primary xl:pt-[35px] md:pt-[25px] md:pr-[32px] md:pb-5 md:pl-[100px] p-5 shadow-[0px_15px_50px_rgba(34,34,34,0.15)] mt-[22px] mb-5 rounded-[10px] relative">
                    <i className="flaticon-right-quote quotes absolute right-auto left-[25px] bottom-auto top-[25px] text-[52px] rotate-180 text-primary md:block hidden" />
                    <p className="2xl:text-[22px] md:text-lg text-base xl:leading-[35px] leading-[22px] text-black2 mb-6">Fragment collings mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat</p>
                    <cite className="relative font-semibold text-primary not-italic	text-base">Ronald M. Spino</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
