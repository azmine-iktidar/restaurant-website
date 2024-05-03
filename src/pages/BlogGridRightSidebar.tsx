
import Pagination from "../elements/Pagination";
import BlogGridLeftContent from "../elements/BlogGridLeftContent";
import BlogGridRightContent from "../elements/BlogGridRightContent";
import CommonBanner from "../elements/CommonBanner";
import { IMAGES } from "../constent/theme";

const BlogGridRightSidebar = () => {
  return (
    <>
      <CommonBanner img={IMAGES.images_bnr3} title="Blog Grid Right Sidebar" subtitle="Blog Grid Right Sidebar" />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5">
        <div className="container">
          <div className="row">
            <div className="lg:w-4/6 w-full px-[15px] lg:order-1 order-2 mb-[30px]">
              <BlogGridRightContent />
              <Pagination />
              
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

export default BlogGridRightSidebar;
