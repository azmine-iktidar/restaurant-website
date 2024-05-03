import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import { useRef } from "react";

const CommentList = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  return (
    <>
      <div className="clear" id="max-w-full">
        <div className="comments-area" id="comments">
          <h4 className="widget-title text-[1.25rem] xl:mb-[30px] mb-5 pb-3 relative">Comments (03)</h4>
          <div className="clearfix">
            <ul className="comment-list md:mb-[60px] mb-10">
              <li className="comment">
                <div className="comment-body relative border-b border-[#2222221a] md:pb-[30px] pb-[15px] md:pl-[100px] pl-[75px] md:mb-[30px] mb-5 min-h-[95px]">
                  <div className="comment-author vcard">
                    <img
                      className="avatar photo absolute left-0 md:h-[80px] h-[60px] md:w-[80px] w-[60px] rounded-full"
                      src={IMAGES.testimonial_mini_pic1} alt="/"
                    />
                    <cite className="fn md:text-base text-lg mb-2 not-italic font-semibold">Monsur Rahman Lito</cite>
                  </div>
                  <p className="text-[15px] leading-[1.7]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took Link galley of type and scrambled it to make
                    Link type specimen book.
                  </p>
                  <div className="reply">
                    <Link to={"#"} className="comment-reply-link absolute text-sm top-[-3px] right-0 inline-block font-medium border-b-2 border-primary text-primary">Reply</Link>
                  </div>
                </div>
                <ol className="children md:pl-[120px] sm:pl-[75px] pl-[30px]">
                  <li className="comment odd parent">
                    <div className="comment-body relative border-b border-[#2222221a] md:pb-[30px] pb-[15px] md:pl-[100px] pl-[75px] md:mb-[30px] mb-5 min-h-[95px]">
                      <div className="comment-author vcard">
                        <img
                          className="avatar photo absolute left-0 md:h-[80px] h-[60px] md:w-[80px] w-[60px] rounded-full"
                          src={IMAGES.testimonial_mini_pic2}
                          alt="/"
                        />
                        <cite className="fn md:text-base text-lg mb-2 not-italic font-semibold">Jake Johnson</cite>
                      </div>
                      <p className="text-[15px] leading-[1.7]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took Link galley of type and
                        scrambled it to make Link type specimen book.
                      </p>
                      <div className="reply">
                        <Link to={"#"} className="comment-reply-link absolute text-sm top-[-3px] right-0 inline-block font-medium border-b-2 border-primary text-primary">
                          Reply
                        </Link>
                      </div>
                    </div>
                  </li>
                </ol>
              </li>
              <li className="comment">
                <div className="comment-body relative border-b border-[#2222221a] md:pb-[30px] pb-[15px] md:pl-[100px] pl-[75px] md:mb-[30px] mb-5 min-h-[95px]">
                  <div className="comment-author vcard">
                    <img
                      className="avatar photo absolute left-0 md:h-[80px] h-[60px] md:w-[80px] w-[60px] rounded-full"
                      src={IMAGES.testimonial_mini_pic3}
                      alt="/"
                    />
                    <cite className="fn md:text-base text-lg mb-2 not-italic font-semibold">John Doe</cite>
                  </div>
                  <p className="text-[15px] leading-[1.7]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <div className="reply">
                    <Link to={"#"} className="comment-reply-link absolute text-sm top-[-3px] right-0 inline-block font-medium border-b-2 border-primary text-primary">
                      Reply
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
            <div className="comment-respond style-1" id="respond">
              <h4 className="widget-title text-[1.25rem] xl:mb-[30px] mb-5 pb-3 relative" id="reply-title">
                Good Comments
                <small>
                  <Link to={"#"} className="hidden" id="cancel-comment-reply-link" rel="nofollow">
                    Cancel reply
                  </Link>
                </small>
              </h4>
              <form className="mx-[-10px] flex flex-wrap" id="commentform"  ref={formRef}
                onSubmit={(e) => {e.preventDefault();}}
              >
                <p className="px-[10px] mb-5 sm:w-[50%] w-full comment-form-author">                 
                  <input type="text" name="dzName" placeholder="Author" id="author"
                    className="h-[60px] py-[15px] bg-[#f3f4f6] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] border-2 border-[#f3f4f6] focus:border-primary focus:bg-white duration-500 outline-none"
                  />
                </p>
                <p className="px-[10px] mb-5 sm:w-[50%] w-full comment-form-email">                  
                  <input type="text" placeholder="Email" name="dzEmail" id="email"
                    className="h-[60px] py-[15px] bg-[#f3f4f6] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] border-2 border-[#f3f4f6] focus:border-primary focus:bg-white duration-500 outline-none"
                  />
                </p>
                <p className="px-[10px] mb-5 w-full comment-form-comment">                  
                  <textarea rows={8} name="comment" placeholder="Type Comment Here" id="comment"
                    className="resize-none h-[120px] py-[15px] bg-[#f3f4f6] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] border-2 border-[#f3f4f6] focus:border-primary focus:bg-white duration-500 outline-none"
                  ></textarea>
                </p>
                <p className="form-submit mb-5 px-[10px] w-[50%]">
                  <button type="reset" className="btn btn-primary btn-hover-1" id="submit"
                    onReset={() => {formRef.current?.reset();}}
                  >
                    <span>Submit Now</span>
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentList;
