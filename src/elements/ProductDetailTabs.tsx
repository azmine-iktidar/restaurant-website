import { useState } from "react";
import { Rating } from 'react-simple-star-rating'
import { IMAGES } from "../constent/theme";


const navItems = [
  { icon: "icon-globe", title: "Description" },
  { icon: "icon-image", title: "Additional Information" },
  { icon: "icon-settings", title: "Product Review" },
];

const ProductDetailTabs = () => {
  const [tabActive, setTabActive] = useState<number>(0);
  return (
    <div className="pt-0 lg:pb-[100px] sm:pb-10 pb-5 relative bg-white">
      <div className="container">
        <div className="row">
          <div className="w-full px-[15px]">
            <ul className="nav nav-tabs tabs-style-1 flex flex-wrap mb-[30px] border-b-2 border-[#EAEAEA]">
              {navItems.map(({ icon, title }, ind) => (
                <li className="nav-item mr-[3px] mb-[-1px] rounded-ss-md rounded-se-md overflow-hidden" key={ind}>
                  <button
                    onClick={() => {
                      setTabActive(ind);
                    }}
                    className={`nav-link border-2 border-transparent px-4 py-2 block web-design-1 ${tabActive === ind ? "active" : ""}`}
                  >
                    <i className={icon}></i>
                    <span className="hidden md:inline-block ml-[10px]">
                      {title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="tab-content">
              {tabActive === 0 && <TabOne />}
              {tabActive === 1 && <TabTwo />}
              {tabActive === 2 && <TabThree />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailTabs;

export function TabOne() {
  return (
    <>
      <div id="web-design-1" className="tab-pane duration-500 active">
        <p className="mb-[10px] lg:text-base text-[15px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't hidden in the middle of text.
        </p>
        <p className="lg:text-base text-[15px] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <ul className="list-check primary">
          <li className="relative lg:text-base text-[15px] py-[6px] pr-[5px] pl-[30px] text-bodycolor">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and{" "}
          </li>
          <li className="relative lg:text-base text-[15px] py-[6px] pr-[5px] pl-[30px] text-bodycolor">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </li>
        </ul>
      </div>
    </>
  );
}
export function TabTwo() {
  return (
    <>
      <div id="graphic-design-1" className="tab-pane duration-500 " role="tabpanel">
        <table className="mb-5 border border-[#00000020] align-middle w-full">
          <tbody>
            <tr>
              <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">Cheese Burger</td>
              <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">Small, Medium &amp; Large</td>
            </tr>
            <tr>
              <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">Toppings</td>
              <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">Onion, Tomato, Olives</td>
            </tr>
            <tr>
              <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">Rating</td>
              <td className="p-[15px] font-medium text-yellow border border-[#00000020]">
                <span className="rating-bx">
                  <i className="fas fa-star text-yellow" />{" "}
                  <i className="fas fa-star text-yellow" />{" "}
                  <i className="fas fa-star text-yellow" />{" "}
                  <i className="fas fa-star text-yellow" />{" "}
                  <i className="far fa-star text-yellow" />
                </span>
              </td>
            </tr>
            <tr>
              <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">Shipping Charges</td>
              <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">Free Shipping</td>
            </tr>
            <tr>
              <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">Add More</td>
              <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">Coke, Cheese, Choco lava</td>
            </tr>
            <tr>
              <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">Delivery Time</td>
              <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">30 mins</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export function TabThree() {

  const [rating, setRating] = useState(2)
  const handleRating = (rate: number) => {
    setRating(rate)
    alert(`Thanks! You rated this ${rate} stars.`)
  }
    return (
    <>
      <div id="developement-1" className="tab-pane duration-500">
        <div className="comments-area" id="comments">
          <ul className="comment-list md:mb-[60px] mb-10">
            <li className="comment">
              <div className="comment-body relative min-h-[95px] border-b border-[#2222221a] md:pl-[100px] pl-[75px] md:pb-[30px] pb-[15px] md:mb-[30px] mb-5">
                <div className="comment-author vcard">
                  <img className="md:h-[80px] h-[60px] md:w-[80px] w-[60px] rounded-full left-0 absolute" src={IMAGES.testimonial_mini_pic1} alt="/" />
                  <cite className="not-italic text-base font-semibold mb-2 block">Monsur Rahman Lito</cite>
                </div>
                <div className="star-rating mb-[10px] text-sm">
                  <i className="fas fa-star text-yellow" />{" "}
                  <i className="fas fa-star text-yellow" />{" "}
                  <i className="far fa-star text-yellow" />{" "}
                  <i className="far fa-star text-yellow" />{" "}
                  <i className="far fa-star text-yellow" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </li>
            <li className="comment">
              <div className="comment-body relative min-h-[95px] border-b border-[#2222221a] md:pl-[100px] pl-[75px] md:pb-[30px] pb-[15px] md:mb-[30px] mb-5">
                <div className="comment-author vcard">
                  <img className="md:h-[80px] h-[60px] md:w-[80px] w-[60px] rounded-full left-0 absolute" src={IMAGES.testimonial_mini_pic2} alt="/"/>
                  <cite className="not-italic text-base font-semibold mb-2 block">Jake Johnson</cite>
                </div>
                <div className="star-rating mb-[10px] text-sm" data-rating="3">
                  <i className="fas fa-star text-yellow" />{" "}
                  <i className="fas fa-star text-yellow" />{" "}
                  <i className="fas fa-star text-yellow" />{" "}
                  <i className="far fa-star text-yellow" />{" "}
                  <i className="far fa-star text-yellow" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </li>
            <li className="comment">
              <div className="comment-body relative min-h-[95px] border-b border-[#2222221a] md:pl-[100px] pl-[75px] md:pb-[30px] pb-[15px] md:mb-[30px] mb-5">
                <div className="comment-author vcard">
                  <img className="md:h-[80px] h-[60px] md:w-[80px] w-[60px] rounded-full left-0 absolute" src={IMAGES.testimonial_mini_pic3} alt="/" />
                  <cite className="not-italic text-base font-semibold mb-2 block">John Doe</cite>
                </div>
                <div className="star-rating mb-[10px] text-sm" data-rating="4">
                  <i className="fas fa-star text-yellow" />{' '}
                  <i className="fas fa-star text-yellow" />{' '}
                  <i className="fas fa-star text-yellow" />{' '}
                  <i className="fas fa-star text-yellow" />{' '}
                  <i className="far fa-star text-yellow" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="comment-respond style-1" id="respond">
          <h3 className="widget-title xl:mb-[30px] mb-5 pb-3 relative text-2xl" id="reply-title">Add a review</h3>
          <form className="flex flex-wrap mx-[-10px]" id="commentform" method="post">
            <p className="mb-[30px] px-[10px] sm:w-[50%] w-full comment-form-author">
              <label htmlFor="author" className="hidden">Name <span className="required">*</span></label>
              <input type="text" name="dzName" placeholder="Author" id="author"
                className="h-[60px] py-[15px] bg-[#f3f4f6] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] border-2 border-[#f3f4f6] focus:border-primary focus:bg-white duration-500"
              />
            </p>
            <p className="mb-[30px] px-[10px] sm:w-[50%] w-full comment-form-email">
              <label htmlFor="email" className="hidden">Email <span className="required">*</span></label>
              <input type="text" placeholder="Email" name="dzEmail" id="email"
                className="h-[60px] py-[15px] bg-[#f3f4f6] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] border-2 border-[#f3f4f6] focus:border-primary focus:bg-white duration-500"
              />
            </p>
            <div className="comment-form-rating flex text-bodycolor px-[10px]">
              <label className="pull-left mr-[10px] mb-5">Your Rating</label>
              <div className="rating-widget">
                <div className="rating-stars">                     
                  <Rating
                    className="rating-element"
                    onClick={handleRating}
                    transition
                    initialValue={rating}
                    size={22}
                  />
                </div>
              </div>
            </div>
            <p className="comment-form-comment mb-5 px-[10px] w-full">
              <label htmlFor="comment" className="hidden" >Comment</label>
              <textarea rows={4} name="comment" placeholder="Type Review Here" id="comment"
                className="resize-none h-[120px] py-[15px] bg-[#f3f4f6] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] border-2 border-[#f3f4f6] focus:border-primary focus:bg-white duration-500"
              ></textarea>
            </p>
            <p className="form-submit mb-5 px-[10px] w-full">
              <button type="reset" className="btn btn-primary btn-hover-2" id="submit">
                Submit Now
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
