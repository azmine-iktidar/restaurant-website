import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import BlogBothContent, {
  BlogBothRightContent,
} from "../elements/BlogBothContent";
import CommonBanner from "../elements/CommonBanner";
import { BlogGrid2Arr } from "../elements/JsonData";
import Pagination from "../elements/Pagination";

const BlogBothSidebar = () => {
  return (
    <>
      <CommonBanner img={IMAGES.banner_bnr1} title="Blog Both Sidebar" subtitle="Blog Both Sidebar"/>

      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 relative bg-white">
        <div className="container">
          <div className="row">
            <BlogBothContent />
            <div className="xl:w-1/2 lg:w-7/12 col-md-12 w-full px-[15px] mb-[30px] lg:order-1 order-1">
              <div className="row justify-center loadmore-content">
                {BlogGrid2Arr.map(({ img2 }, ind) => (
                  <div className="w-full px-[15px]" key={ind}>
                    <div className="overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] sm:flex bg-white group mb-[30px]">
                      <div className="dz-media sm:min-w-[240px] sm:w-[240px] w-full sm:h-auto h-[250px] mb-0 relative overflow-hidden">
                        <Link to="/blog-standard" className="block h-full">
                          <img src={img2} alt="/" className="h-full object-cover w-full group-hover:scale-110 duration-500"/>
                        </Link>
                      </div>
                      <div className="content flex-col flex py-[25px] px-[30px] relative">
                        <div className="mb-2.5">
                          <ul className="flex items-center">
                            <li className="inline-block relative text-[13px] mr-3">
                              <Link to={"#"} className="text-sm font-medium text-bodycolor">
                                <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" /> 31 March 2024
                              </Link>
                            </li>
                            <li className="dz-comment">
                              <Link to={"#"} className="text-sm font-medium text-bodycolor">
                                <i className="flaticon-chat-bubble text-base text-primary mr-[5px]" /> 2.5K
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <h5 className="mb-2">Paradise Taste of Dishes</h5>
                        <p>
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
                ))}
              </div>
              <Pagination />
            </div>
            <BlogBothRightContent />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogBothSidebar;
