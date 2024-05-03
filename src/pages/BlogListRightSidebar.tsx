import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import BlogGridLeftContent from "../elements/BlogGridLeftContent";
import CommonBanner from "../elements/CommonBanner";
import { BlogGrid2Arr } from "../elements/JsonData";

const BlogListRightSidebar = () => {
  return (
    <>
      <CommonBanner
        img={IMAGES.banner_bnr2}
        title="Blog List Right Sidebar"
        subtitle="Blog List Right Sidebar"
      />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5">
        <div className="container">
          <div className="row">
            <div className="lg:w-4/6 w-full px-[15px] lg:order-1 order-2 mb-[30px]">
              <div className="row justify-center loadmore-content">
                {BlogGrid2Arr.map(({ img2 }, ind) => (
                  <div className="w-full px-[15px]" key={ind}>
                    <div className="overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] sm:flex bg-white group mb-[30px]">
                      <div className="dz-media sm:min-w-[240px] sm:w-[240px] w-full sm:h-auto h-[250px] mb-0 relative overflow-hidden">
                        <Link to="/blog-standard" className="block h-full">
                          <img src={img2} alt="/" className="h-full object-cover w-full group-hover:scale-110 duration-500" />
                        </Link>
                      </div>
                      <div className="content flex-col flex py-[25px] px-[30px] relative">
                        <div className="mb-2.5">
                          <ul className="flex items-center">
                            <li className="inline-block relative text-[13px] mr-3">
                              <Link to={"#"} className="text-sm font-medium text-bodycolor"><i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" /> 26 Jan 2023</Link>
                            </li>
                            <li className="dz-comment">
                              <Link to={"#"} className="text-sm font-medium text-bodycolor">
                                <i className="flaticon-chat-bubble text-base text-primary mr-[5px]" /> 2.5K
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <h5 className="mb-2">Paradise Taste of Dishes</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have.</p>
                        <div><Link to="/blog-standard" className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2">Read More</Link></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
             <div className="text-center mt-[10px]">
                  <Link to={"#"} className="btn btn-primary dz-load-more btn-hover-2">Load More</Link>
              </div>
            </div>
            <div className="lg:w-1/3 w-full px-[15px] lg:order-2 order-1">
              <aside className="lg:sticky pl-5 max-xl:pl-0 pb-[1px] top-0">
                <BlogGridLeftContent />
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogListRightSidebar;
