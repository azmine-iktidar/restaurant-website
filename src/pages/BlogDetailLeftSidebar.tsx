import BlogGridLeftContent from "../elements/BlogGridLeftContent";
import CommonBanner2 from "../elements/CommonBanner2";
import { OurBlog } from "./BlogDetail";

const BlogDetailLeftSidebar = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner2 pages="Blog Detail Left Sidebar" />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5">
        <div className="container">
          <div className="row">
            <div className="lg:w-1/3 w-full px-[15px] lg:order-1 order-2">
              <aside className="lg:sticky pr-5 max-xl:pr-0 pb-[1px] top-[100px]">
                <BlogGridLeftContent />
              </aside>
            </div>
            <div className="lg:w-4/6 w-full px-[15px] lg:order-2 order-1 mb-[30px]">
              <OurBlog />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailLeftSidebar;
