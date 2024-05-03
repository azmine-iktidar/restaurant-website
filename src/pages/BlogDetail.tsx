import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommentList from "../elements/CommentList";
import CommonBanner2 from "../elements/CommonBanner2";

const BlogDetail = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner2 pages="Blog Standard" />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5 relative">
        <div className="min-container max-w-[53.125rem] px-[0.938rem] mx-auto">
          <div className="row">
            <div className="w-full px-[15px]">
              <OurBlog />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;

export function OurBlog() {
  return (
    <>
      <div className="dz-card blog-half blog-single max-w-full w-full relative mb-[3.75rem]">
        <div className="dz-media text-center relative overflow-hidden rounded-[10px]">
          <img src={IMAGES.blog_detail_pic1} alt="/" className="w-full h-auto" />
        </div>
        <div className="dz-info pt-[25px]">
          <h1 className="lg:text-[2.625rem] sm:text-4xl text-[2rem] font-semibold mb-2 leading-[1.3]">Restaurant Has The Answer</h1>
          <div className="dz-meta mb-5">
            <ul>
              <li className="mb-[5px] mr-[30px] text-[15px] font-medium relative inline-block dz-user">
                <Link to={"#"} className="text-sm font-medium text-bodycolor">
                  <i className="flaticon-user text-xs text-primary mr-[5px] translate-y-[1px] scale-150" /> By <span className="text-primary">KK Sharma</span>
                </Link>
              </li>
              <li className="mb-[5px] mr-[30px] text-[15px] font-medium relative inline-block">
                <Link to={"#"} className="text-sm font-medium text-bodycolor">
                  <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" /> 26 Jan 2023
                </Link>
              </li>
              <li className="mb-[5px] mr-[30px] text-[15px] font-medium relative inline-block dz-comment">
                <Link to={"#"} className="text-sm font-medium text-bodycolor">
                  <i className="flaticon-chat-bubble text-xs text-primary mr-[5px] translate-y-[1px] scale-150" /> 2.5K{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="dz-post-text pb-[5px]">
              <p className="text-base mb-4 leading-[1.7]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <blockquote className="wp-block-quote style-1 text-primary xl:pt-5 md:pt-[25px] md:pr-[2rem] md:pb-5 md:pl-7 p-5 shadow-[0px_15px_50px_rgba(34,34,34,0.15)] my-[2.5rem] rounded-[10px] relative">
                <i className="flaticon-right-quote quotes absolute right-5 left-auto bottom-[17px] top-auto text-[64px] text-primary md:inline-flex hidden"></i>
                <p className="xl:text-[22px] md:text-lg text-base xl:leading-[35px] leading-[22px] text-black2 mb-4">Create An Information Architecture That’s Easy To Use Way Precise Usability Considerations For Partially,</p>
                <cite className="relative font-semibold text-primary not-italic	text-base">Ronald M. Spino</cite>
              </blockquote>
              <p className="text-base mb-4 leading-[1.7]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <ul className="pl-[1.5rem] mb-[1.5rem] list-disc text-bodycolor">
                <li className="text-base p-2">A wonderful serenity has taken possession.</li>
                <li className="text-base p-2">Of my entire soul, like these sweet mornings of spring which.</li>
                <li className="text-base p-2">I enjoy with my whole heart.</li>
                <li className="text-base p-2">This spot, which was created For the bliss of souls like mine.</li>
              </ul>
              <p className="text-base mb-4 leading-[1.7]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>	
        </div>

        <div className="dz-share-post flex flex-wrap items-center justify-between py-[10px] border-y border-[#2222221a]">
          <div className="post-tags mx-[-3px]">
            <h6 className="text-sm mb-0 mr-[10px] inline">Tags:</h6>
            <Link to="/product-detail" className="inline-block p-[3px] text-sm relative m-[3px] text-bodycolor duration-500 hover:text-primary">Pizza Veronese</Link>
            <Link to="/product-detail" className="inline-block p-[3px] text-sm relative m-[3px] text-bodycolor duration-500 hover:text-primary">Chicken</Link>
            <Link to="/product-detail" className="inline-block p-[3px] text-sm relative m-[3px] text-bodycolor duration-500 hover:text-primary">Pizza</Link>
            <Link to="/product-detail" className="inline-block p-[3px] text-sm relative m-[3px] text-bodycolor duration-500 hover:text-primary">Burger</Link>
            <Link to="/product-detail" className="inline-block p-[3px] text-sm relative m-[3px] text-bodycolor duration-500 hover:text-primary">Sandwich</Link>
          </div>
          <div className="dz-social-icon flex items-center">
            <ul className="mx-[-5px]">
              <li className="inline-block px-[5px]">
                <Link
                  target="_blank"
                  className="btn-social btn-sm text-primary border-0 text-sm"
                  to="https://www.facebook.com/"
                >
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li className="inline-block px-[5px]">
                <Link
                  target="_blank"
                  className="btn-social btn-sm text-primary border-0 text-sm"
                  to="https://twitter.com/"
                >
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li className="inline-block px-[5px]">
                <Link
                  target="_blank"
                  className="btn-social btn-sm text-primary border-0 text-sm"
                  to="https://www.instagram.com/"
                >
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li className="inline-block px-[5px]">
                <Link
                  target="_blank"
                  className="btn-social btn-sm text-primary border-0 text-sm"
                  to="https://www.linkedin.com/"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CommentList />
    </>
  );
}
