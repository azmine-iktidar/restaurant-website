import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import BlogGridLeftContent from "../elements/BlogGridLeftContent";
import CommonBanner from "../elements/CommonBanner";
import { BlogGrid3Arr } from "../elements/JsonData";
import Pagination from "../elements/Pagination";

const BlogWideGridSidebar = () => {
  return (
    <>
      <CommonBanner img={IMAGES.banner_bnr2} title="Blog Wide Grid Sidebar" subtitle="Blog Wide Grid Sidebar"/>
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5">
        <div className="container-fluid px-[30px] max-xl:px-5 mx-auto relative">
          <div className="row">
            <div className="xl:w-9/12 lg:w-8/12 w-full px-[15px]">
              <div className="row loadmore-content">
                {BlogGrid3Arr.map(({ img }, ind) => (
                  <div className="w-1/3 max-2lg:w-1/2 px-[15px] blog-detail" key={ind}>
                    <div className="overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] bg-white group mb-[30px]">
                      <div className="dz-media w-full h-full mb-0 relative overflow-hidden">
                        <Link to="/blog-standard" className="block">
                          <img src={img} alt="/" className="block w-full group-hover:scale-110 duration-500" />
                        </Link>
                      </div>
                      <div className="content flex-col flex p-[30px] max-xl:p-5 relative">
                        <div className="mb-2.5">
                          <ul className="flex">
                            <li className="inline-block relative text-[13px] mr-3" >
                              <Link to={"#"} className="text-sm font-medium text-bodycolor">
                                <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" /> 26
                                Jan 2023
                              </Link>
                            </li>
                            <li className="inline-block relative text-[13px] mr-3">
                              <Link to={"#"}  className="text-sm font-medium text-bodycolor">
                                <i className="flaticon-chat-bubble text-base text-primary mr-[5px]" /> 2.5K{" "}
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <h5 className="mb-2">Paradise Taste of Dishes</h5>
                        <p className="mb-4 text-base">There are many variations of passages of Lorem Ipsum available, but the majority have.</p>
                        <div>
                          <Link to="/blog-standard" className="py-3 px-6 btn-hover-2 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination />
            </div>
            <div className="xl:w-1/4 lg:w-1/3 w-full px-[15px]">
              <aside className="lg:sticky pl-5 max-xl:pl-0 pb-[1px] top-[100px]">
                <BlogGridLeftContent />
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogWideGridSidebar;
