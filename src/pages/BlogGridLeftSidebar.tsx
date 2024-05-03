import { IMAGES } from "../constent/theme";
import BlogGridLeftContent from "../elements/BlogGridLeftContent";
import BlogGridRightContent from "../elements/BlogGridRightContent";
import CommonBanner from "../elements/CommonBanner";
import Pagination from "../elements/Pagination";

const BlogGridLeftSidebar = () => {
  return (
    <>
      <CommonBanner img={IMAGES.images_bnr3} title="Blog Grid Left Sidebar" subtitle="Blog Grid Left Sidebar"/>
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5">
        <div className="container">
          <div className="row">
            <div className="lg:w-1/3 w-full px-[15px] lg:order-1 order-2">
                <aside className="lg:sticky pr-5 max-xl:pr-0 pb-[1px] top-[100px]">
                  <BlogGridLeftContent />
                </aside>
            </div>
            <div className="lg:w-4/6 w-full px-[15px] lg:order-2 order-1 mb-[30px]">
              <BlogGridRightContent />
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridLeftSidebar;
