import CommonBanner from "../elements/CommonBanner";
import { FaqArr } from "../elements/JsonData";
import { IMAGES } from "../constent/theme";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent, useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface arrItem {
   title: string;
  // content: string;
  isOpen: boolean;
}

type Action = { type: 'TOGGLE'; payload: number };

const accordionReducer = (state :  arrItem[], action : Action) => {
  switch (action.type) {
    case 'TOGGLE':
      return state.map((item, index : number) => {
        if (index === action.payload) {
          return { ...item, isOpen: !item.isOpen };
        } else {
          return { ...item, isOpen: false };
        }
      });
    default:
      return state;
  }
};


const Faq = () => {

  const [input, setInput] = useState<string>("");
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setInput("");
    if (form.current) {
      emailjs
        .sendForm(
          "emailId",
          "template_0byuv32",
          form.current,
          "qUDIPykc776NYHv4m"
        )
        .then(
          () => {
            toast.success("Successfully send!");
          },
          (error) => {
            toast.error(error.text);
          }
        );
    }
  };

 

 const [state, dispatch] = useReducer(accordionReducer, FaqArr);

  const toggleAccordion = (index : number) => {
    dispatch({ type: 'TOGGLE', payload: index });
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={true} />
      <>
        <CommonBanner img={IMAGES.banner_bnr2} title="Faq" subtitle="Faq" />
        <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[80px] sm:pb-10 pb-5">
          <div className="min-container max-w-[53.125rem] px-[0.938rem] mx-auto">
            <div className="row search-wraper style-1 text-center lg:mt-[-135px] sm:mt-[-100px] mt-[-90px] xl:mb-[80px] lg:mb-[60px] sm:mb-[50px] mb-[40px]">
              <div className="lg:w-5/6 w-full px-[15px] m-auto">
                <form>
                  <div className="input-group relative flex flex-wrap items-stretch z-[1] w-full">
                    <div className="input-group-prepand absolute left-0 top-[50%] translate-y-[-50%]">
                      <button name="submit" value="submit" type="reset" className="p-[30px]"><i className="icon-search text-2xl" /></button>
                    </div>
                    <input required type="text" className="form-control bg-white py-[27px] pr-5 pl-[77px] border-none rounded-[10px] lg:h-[80px] h-[60px] w-full shadow-[0px_15px_55px_rgba(34,34,34,0.15)] text-[#666666] text-[15px] outline-none" placeholder="Why Should I Use Swigo ?"/>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="w-full px-[15px]">                
                  <div className="accordion dz-accordion mb-[60px]" id="accordionFaq2">
                    {state.map(({ title,isOpen }, ind) => (
                      <div className={`accordion-item border-b border-[#B1B1B1] ${ind === 0 ? 'border-t' : ''}`} key={ind}>
                        <h2 className="accordion-header mb-0" id={`headingOne${ind}`}
                            onClick={() => toggleAccordion(ind)}                          
                        >
                          <Link to={"#"} className={`accordion-button lg:text-lg md:text-base text-sm relative flex items-center md:py-7 py-5 lg:pr-[30px] md:pr-[25px] pr-[30px] ${isOpen ? '' : 'collapsed'}`}>
                            {title}
                            <span className="toggle-close"></span>
                          </Link>
                        </h2>
                          <div id={`collapseOne${ind}`} className={`accordion-collapse ${isOpen ? 'block' : 'hidden'}`}>
                            <div className="accordion-body py-[25px] mt-[-9px]">
                              <p className="text-[15px] max-w-[515px] tracking-[0.02em]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                          </div>
                        
                        </div>
                    ))}
                  </div>                  
              </div>
            </div>

            <div className="row items-center">
              <div className="lg:w-5/12 w-full px-[15px] mb-5">
                <div className="dz-media faq-media move-2 lg:w-full md:w-[450px] w-[300px] lg:h-full md:h-[450px] h-[300px] mx-auto">
                  <img src={IMAGES.faq_pic1} alt="/" />
                </div>
              </div>
              <div className="lg:w-7/12 w-full px-[15px] mb-5">
                <div className="faq-info">
                  <h2 className="lg:text-[50px] text-[35px] font-semibold mb-2">Newsletter</h2>
                  <p className="mb-[30px] text-base">
                    We hope this newsletter finds you well. We are excited to
                    announce some new additions to our menu that we think you'll
                    love. Our culinary team has been
                  </p>
                  <form className="dzSubscribe text-white" ref={form} onSubmit={sendEmail}>
                    <div className="dzSubscribeMsg text-white"></div>
                    <div className="input-group flex flex-wrap relative items-stretch w-full">
                      <input name="dzEmail" required type="text" value={input} placeholder="Enter Your Email"
                        onChange={(e) => {
                          setInput(e.target.value);
                        }}
                        className="form-control outline-none lg:h-[65px] h-[55px] w-full bg-[#F8F8F8] border border-[#B1B1B1] sm:pr-[150px] pr-20"
                      />
                      <div className="input-group-addon absolute top-[50%] right-[12px] translate-y-[-50%] z-[9]">
                        <button name="submit" value="submit" type="submit" className="btn btn-primary btn-hover-2 lg:py-3 xl:px-6 sm:py-[10px] py-[6px] px-3">
                          <span className="sm:block hidden">Submit</span>{" "}
                          <i className="fa-solid fa-paper-plane sm:hidden block text-xl" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Faq;
