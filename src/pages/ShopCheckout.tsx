import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { useState } from "react";
import Select from 'react-select';

const options = [
  { value: "Åland Islands", label: "Åland Islands" },
  { value: "Afghanistan", label: "Afghanistan" },
  { value: "Albania", label: "Albania" },
  { value: "Algeria", label: "Algeria" },
  { value: "Andorra", label: "Andorra" },
  { value: "Angola", label: "Angola" },
  { value: "Anguilla", label: "Anguilla" },
  { value: "Antarctica", label: "Antarctica" },
  { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
  { value: "Argentina", label: "Argentina" },
  { value: "Armenia", label: "Armenia" },
  { value: "Aruba", label: "Aruba" },
  { value: "Australia", label: "Australia" },
];


const ShopCheckout = () => {
  const [open, setOpen] = useState(false);
  const [colleps, setColleps] = useState(false);

  function DropMenu(){
    setOpen(!open)    
  }
  return (
    <>
      <CommonBanner
        img={IMAGES.images_bnr3}
        title="Shop Checkout"
        subtitle="Shop Checkout"
      />

      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 relative bg-white">
        <div className="container">
          <form className="shop-form">
            <div className="row">
              <div className="lg:w-1/2 w-full px-[15px]">
                <div className="widget mb-[50px]">
                  <h4 className="widget-title xl:mb-[30px] mb-5 pb-3 relative">Billing & Shipping Address</h4>
                  <FormGroup />
                  <button  onClick={DropMenu} className="btn bg-[#F3F3F3] gap-[10px] mb-4 shadow-none duration-700 hover:text-white hover:bg-primary create-an-account" type="button">
                    Create an account <i className="fa fa-angle-down text-xl" />
                  </button>
                  <div id="create-an-account"                      
                      className={`transition-all duration-300 ease-in-out ${
                      open ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    >
                      <p className="text-base mb-4">Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                      <div className="form-group">
                          <input name="Password" type="password" className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500" placeholder="Password" />
                      </div>
                  </div>                 
                </div>
              </div>

              <div className="lg:w-1/2 w-full px-[15px]">
                <button onClick={() => setColleps(!colleps)}  className="btn bg-[#F3F3F3] gap-[10px] mb-4 shadow-none duration-700 hover:text-white hover:bg-primary different-address" type="button">Ship to a different address 
                  <i className="fa fa-angle-down text-xl" />
                </button>
                <div>                  
                   <div id="different-address" className="widget"  style={{display: colleps ? '' : "none"}}>
                      <div id="example-collapse-text">
                        <p className="text-base mb-4">
                          If you have shopped with us before, please enter your
                          details in the boxes below. If you are a new customer
                          please proceed to the Billing & Shipping section.
                        </p>

                        <FormGroup />
                        <p className="text-base mb-4">
                          Create an account by entering the information below. If
                          you are a returning customer please login at the top of
                          the page.
                        </p>
                      </div>
                   </div>                  
                </div>
                <div className="form-group">
                  <textarea rows={5} placeholder="Notes about your order, e.g. special notes for delivery"
                    className="resize-none py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
          <MenuList />
        </div>
      </section>
    </>
  );
};

export default ShopCheckout;

export function FormGroup() {
  return (
    <>
      <div className="form-group mb-5 inline-block w-full">
        <Select          
          className="custom-react-select-2"
          classNamePrefix="select"
          defaultValue={options[3]}
          isClearable={false}
          options={options}
          isSearchable={false}
        />
      </div>
      <div className="row">
        <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
          <input name="dzFirstName" required type="text"
            className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
            placeholder="First Name"
          />
        </div>
        <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
          <input name="dzLastName" required type="text"
            className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="form-group mb-5">
        <input name="dzOther[CompanyType]" required type="text" className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
          placeholder="Company Name"
        />
      </div>
      <div className="form-group mb-5">
        <input name="dzOther[Address]" required type="text" className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500" placeholder="Address"  />
      </div>
      <div className="row">
        <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
          <input name="dzOther[Other]" required type="text" className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500" placeholder="Apartment, suite, unit etc."/>
        </div>
        <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
          <input name="dzOther[Town/City]" required type="text" className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500" placeholder="Town / City"/>
        </div>
      </div>
      <div className="row">
        <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
          <input name="dzOther[State/County]" required type="text" className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500" placeholder="State / County" />
        </div>
        <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
          <input name="Postcode/Zip" required type="text" className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500" placeholder="Postcode / Zip"/>
        </div>
      </div>
      <div className="row">
        <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
          <input name="dzEmail" required type="email" className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500" placeholder="Email"/>
        </div>
        <div className="form-group md:w-1/2 w-full px-[15px] mb-5">
          <input name="dzPhoneNumber" required type="text" className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500 dz-number" placeholder="Phone"/>
        </div>
      </div>
    </>
  );
}

const opetion2 = [
  { value: "Credit Card Type", label: "Credit Card Type" },
  { value: "Another option", label: "Another option" },
  { value: "A option", label: "A option" },
  { value: "Potato", label: "Potato" },
];
export function MenuList() {
  return (
    <>
      <div className="dz-divider bg-gray-dark icon-center my-12 relative h-[1px] bg-[#d3d3d3]">
        <i className="fa fa-circle bg-white text-primary absolute left-[50%] text-center top-[-8px] block"></i>
      </div>
      <div className="row">
        <div className="lg:w-1/2 w-full px-[15px]">
          <div className="widget">
            <h4 className="widget-title xl:mb-[30px] mb-5 pb-3 relative">Your Order</h4>
            <table className="mb-5 border border-[#00000020] align-middle w-full">
                <thead className="text-center">
                    <tr className="border-b border-[#00000020]">
                        <th className="bg-[#222] p-[15px] text-base font-semibold text-white">IMAGE</th>
                        <th className="bg-[#222] p-[15px] text-base font-semibold text-white">PRODUCT NAME</th>
                        <th className="bg-[#222] p-[15px] text-base font-semibold text-white">TOTAL</th>
                    </tr>
                </thead>
              <tbody>
                <tr>
                  <td className="p-[15px] font-medium border border-[#00000020] product-item-img"><img src={IMAGES.gallery_small_pic4} alt="/" className="w-[100px] rounded-md"/></td>
                  <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">Prduct Item 4</td>
                  <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">$36.00</td>
                </tr>
                <tr>
                  <td className="p-[15px] font-medium product-item-img"><img src={IMAGES.gallery_small_pic3} alt="/" className="w-[100px] rounded-md"/></td>
                  <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">Prduct Item 3</td>
                  <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">$25.00</td>
                </tr>
                <tr>
                  <td className="p-[15px] font-medium border border-[#00000020] product-item-img"><img src={IMAGES.gallery_small_pic2} alt="/" className="w-[100px] rounded-md"/></td>
                  <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">Prduct Item 2</td>
                  <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">$22.00</td>
                </tr>
                <tr>
                  <td className="p-[15px] font-medium border border-[#00000020] product-item-img"><img src={IMAGES.gallery_small_pic1} alt="/" className="w-[100px] rounded-md"/></td>
                  <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">Prduct Item 1</td>
                  <td className="p-[15px] font-medium border border-[#00000020] text-bodycolor">$28.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:w-1/2 w-full px-[15px]">
          <form className="shop-form widget">
            <h4 className="widget-title xl:mb-[30px] mb-5 pb-3 relative">Order Total</h4>
            <table className="mb-5 border border-[#00000020] align-middle w-full">
              <tbody>
                  <tr>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020] ">Order Subtotal</td>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">$125.96</td>
                  </tr>
                  <tr>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">Shipping</td>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">Free Shipping</td>
                  </tr>
                  <tr>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">Coupon</td>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">$28.00</td>
                  </tr>
                  <tr>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">Total</td>
                      <td className="p-[15px] font-medium text-bodycolor border border-[#00000020]">$506.00</td>
                  </tr>
              </tbody>
            </table>
            <h4 className="widget-title xl:mb-[30px] mb-5 pb-3 relative">Payment Method</h4>
            <div className="mb-5">
              <input
                type="text"
                className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
                placeholder="Name on Card"
              />
            </div>
            <div className="form-group mb-5 inline-block w-full">              
               <Select          
                  className="custom-react-select-2"
                  classNamePrefix="select"
                  defaultValue={opetion2[0]}
                  isClearable={false}
                  options={opetion2}
                  isSearchable={false}
                />
            </div>
            <div className="form-group mb-5">
              <input name="dzOther[CreditCardNumber]" type="text" placeholder="Credit Card Number"
                className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
              />
            </div>
            <div className="form-group mb-5">
              <input name="dzOther[CardVerificationNumber]" type="text" placeholder="Card Verification Number"
                className="h-[50px] py-[10px] px-5 w-full text-[15px] rounded-[6px] placeholder:text-[#666666] focus:border-primary duration-500"
              />
            </div>
            <div className="form-group">
              <button className="btn bg-[#F3F3F3] gap-[10px] mb-4 shadow-none duration-700 btn-hover-2 btn-gray hover:bg-primary" type="submit" value="submit" name="submit">
                Place Order Now{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
