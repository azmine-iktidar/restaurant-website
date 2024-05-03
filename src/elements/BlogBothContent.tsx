import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";

const BlogBothContent = () => {
  return (
    <div className="xl:w-1/4 lg:w-5/12 md:w-1/2 w-full px-[15px] mb-[30px] lg:order-1 order-2">
      <aside className="lg:sticky pr-5 max-xl:pr-0 pb-[1px] top-[100px]">
        <div className="md:mb-[50px] sm:mb-[30px] mb-4">
          <div className="widget-title xl:mb-[25px] mb-5 pb-3 text-lg relative">
            <h5>Latest Post</h5>
          </div>
          <div className="widget-post-bx">
            <div className="widget-post clearfix flex items-center p-[10px] rounded-[10px] border border-[#2222221a] mb-[15px]">
              <div className="dz-media h-[80px] w-[100px] min-w-[100px] max-xl:w-[80px] max-xl:min-w-[80px] mr-[15px] rounded-md overflow-hidden">
                <img src={IMAGES.recent_blog_pic1} alt="/" />
              </div>
              <div className="dz-info relative">
                <h6 className="text-base mb-2">
                  <Link to="/blog-standard">Explore the Food Taste</Link>
                </h6>
                <div className="mb-0">
                  <ul className="flex items-center max-2xl:block max-xl:mx-[-6px]">
                    <li className="inline-block relative text-[13px] mr-3">
                      <Link to={"#"} className="text-[13px] font-medium text-bodycolor">
                        <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" />{" "} 30 Mar,2024
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="widget-post clearfix flex items-center p-[10px] rounded-[10px] border border-[#2222221a] mb-[15px]">
              <div className="dz-media h-[80px] w-[100px] min-w-[100px] max-xl:w-[80px] max-xl:min-w-[80px] mr-[15px] rounded-md overflow-hidden">
                <img src={IMAGES.recent_blog_pic2} alt="/" />
              </div>
              <div className="dz-info relative">
                <h6 className="text-base mb-2">
                  <Link to="/blog-standard">Delicious Food Secret</Link>
                </h6>
                <div className="mb-0">
                  <ul className="flex items-center max-2xl:block max-xl:mx-[-6px]">
                    <li className="inline-block relative text-[13px] mr-3">
                      <Link to={"#"} className="text-[13px] font-medium text-bodycolor">
                        <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" />{" "}31 Mar,2024</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="widget-post clearfix flex items-center p-[10px] rounded-[10px] border border-[#2222221a] mb-[15px]">
              <div className="dz-media h-[80px] w-[100px] min-w-[100px] max-xl:w-[80px] max-xl:min-w-[80px] mr-[15px] rounded-md overflow-hidden">
                <img src={IMAGES.recent_blog_pic3} alt="/" />
              </div>
              <div className="dz-info relative">
                <h6 className="text-base mb-2">
                  <Link to="/blog-standard"> Inspiration for Food</Link>
                </h6>
                <div className="mb-0">
                  <ul className="flex items-center max-2xl:block max-xl:mx-[-6px]">
                    <li className="inline-block relative text-[13px] mr-3">
                      <Link to={"#"} className="text-[13px] font-medium text-bodycolor">
                        <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" /> 28 Mar,2024
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mb-[sm:50px] mb- mb-4[30px] widget_categories">
          <div className="widget-title xl:mb-[25px] mb-5 pb-3 text-lg relative">
            <h5>Categories</h5>
          </div>
          <ul>
            <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
              <Link to="/blog-standard" className="text-bodycolor text-[15px] font-medium float-left text-left">Pepperoni Pizza</Link>
            </li>
            <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
              <Link to="/blog-standard" className="text-bodycolor text-[15px] font-medium float-left text-left">Apricot Chicken</Link>
            </li>
            <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
              <Link to="/blog-standard" className="text-bodycolor text-[15px] font-medium float-left text-left">Pizza Veronese</Link>
            </li>
            <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
              <Link to="/blog-standard" className="text-bodycolor text-[15px] font-medium float-left text-left">Summer Pizza</Link>
            </li>
            <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
              <Link to="/blog-standard" className="text-bodycolor text-[15px] font-medium float-left text-left">Italian Tuna</Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default BlogBothContent;

export function BlogBothRightContent() {
  return (
    <>
      <div className="xl:w-1/4 lg:w-5/12 md:w-1/2 w-full px-[15px] mb-[30px] lg:order-3 order-1 xl:block hidden">
        <aside className="lg:sticky pl-5 max-xl:pl-0 pb-[1px] top-[100px]">
          <div className="md:mb-[50px] sm:mb-[30px] mb-4">
            <div className="widget-title xl:mb-[25px] mb-5 pb-3 text-lg relative">
              <h5>Search</h5>
            </div>
            <div className="search-bx">
              <form className="mb-[10px]">
                <div className="input-group flex flex-wrap relative items-stretch w-full">
                  <div className="input-side bg-primary rounded-md flex m-0 p-[5px] items-center w-full h-[60px]">
                    <input
                      name="text"
                      className="bg-white border-0 rounded-md z-0 h-[50px] py-[6px] pl-5 w-full outline-none"
                      placeholder="Search"
                      type="text"
                    />
                    <div className="input-group-btn">
                      <button type="reset" className="btn ml-[5px] w-[50px] min-w-[50px] h-[50px] p-0 justify-center">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.58366 17.5001C13.9559 17.5001 17.5003 13.9557 17.5003 9.58342C17.5003 5.21116 13.9559 1.66675 9.58366 1.66675C5.21141 1.66675 1.66699 5.21116 1.66699 9.58342C1.66699 13.9557 5.21141 17.5001 9.58366 17.5001Z"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.3337 18.3334L16.667 16.6667"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="mb-[50px] widget_categories">
            <div className="widget-title xl:mb-[25px] mb-5 pb-3 text-lg relative">
              <h5>Categories</h5>
            </div>
            <ul>
              <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                <Link to="/blog-standard" className="text-bodycolor text-[15px] font-medium float-left text-left">Pepperoni Pizza</Link>
              </li>
              <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                <Link to="/blog-standard" className="text-bodycolor text-[15px] font-medium float-left text-left">Apricot Chicken</Link>
              </li>
              <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                <Link to="/blog-standard" className="text-bodycolor text-[15px] font-medium float-left text-left">Pizza Veronese</Link>
              </li>
              <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                <Link to="/blog-standard" className="text-bodycolor text-[15px] font-medium float-left text-left">Summer Pizza</Link>
              </li>
              <li className="cat-item text-right table w-full py-[10px] pl-5 leading-[1.3] relative">
                <Link to="/blog-standard" className="text-bodycolor text-[15px] font-medium float-left text-left">Italian Tuna</Link>
              </li>
            </ul>
          </div>

          <div className="widget md:mb-[50px] sm:mb-[30px] mb-4 widget_tag_cloud">
            <div className="flex justify-between">
              <div className="widget-title xl:mb-[25px] mb-5 pb-3 relative">
                <h5 className="text-xl">Popular Tags</h5>
              </div>
            </div>
            <div className="tagcloud table">
              <Link to="/product-detail" className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]">Pizza</Link>
              <Link to="/product-detail" className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]">Chicken</Link>
              <Link to="/product-detail" className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]">Pizza Veronese</Link>
              <Link to="/product-detail" className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]">Burger</Link>
              <Link to="/product-detail" className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]">Sandwich</Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
