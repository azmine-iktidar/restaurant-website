import { useState } from "react";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { Link } from "react-router-dom";
import ProductDetailTabs from "../elements/ProductDetailTabs";
import HomeSpacialMenu from "../elements/HomeSpacialMenu";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <>
      <CommonBanner img={IMAGES.banner_bnr1} title="Product Detail" subtitle="Product Detail"/>
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] pb-[50px] relative bg-white overflow-hidden">
        <div className="container">
          <div className="row product-detail">
              <div className="lg:w-1/3 md:w-5/12 w-full px-[15px]">
                <div className="detail-media rounded-[10px] overflow-hidden w-full mb-[30px]">
                  <img src={IMAGES.modal_pic1} alt="/" className="h-full w-full object-cover" />
                </div>
              </div>
            <div className="lg:w-8/12 md:w-7/12 w-full px-[15px]">
              <div className="detail-info relative">
                <span className="badge mb-[10px] p-[2px] font-medium text-sm leading-5 text-[#666666] flex items-center rounded-[10px]">
                  <svg
                    className="mr-2"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="16"
                      height="16"
                      stroke="#0F8A65"
                    />
                    <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                  </svg>
                  Pure veg
                </span>
                <div className="dz-head">
                  <h2 className="mb-2 lg:text-4xl sm:text-[2rem] text-[1.75rem] font-semibold">Double Patty Veg Burger</h2>
                  <div className="rating text-sm leading-[21px]">
                    <i className="fa-solid fa-star text-[var(--secondary-dark)]"></i>{" "}
                    <span className="text-bodycolor">
                      <strong className="font-medium">4.5</strong> - 20 Reviews
                    </span>
                  </div>
                </div>
                <p className="text-[15px] mt-5 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make a type specimen book.
                </p>
                <ul className="detail-list flex my-[25px]">
                  <li className="mr-[45px] text-[15px] font-medium leading-[22px] text-bodycolor">
                    Price <span className="text-primary flex text-xl font-semibold leading-[30px] mt-[5px]">$20.00</span>
                  </li>
                  <li className="mr-[45px] text-[15px] font-medium leading-[22px] text-bodycolor">Quantity
                      <div className="input-group mt-[5px] flex flex-wrap items-stretch h-[31px] relative w-[105px] min-w-[105px]">
                          <input type="number" step="1" defaultValue={quantity} key={quantity}  name="quantity" className="quantity-field" />
                          <span className="flex justify-between p-[2px] absolute w-full">
                            <input type="button" value="-" className="button-minus" data-field="quantity" 
                              onClick={() => { setQuantity( quantity > 0 ? quantity - 1 : quantity);}}
                            />								
                            <input type="button" value="+" onClick={() => {setQuantity(quantity + 1);}} className="button-plus" data-field="quantity" />
                          </span>
                      </div>                    
                  </li>
                </ul>
                <h6 className="mb-2">Add On</h6>
                <DetailList />
                <div className="lg:flex justify-between">
                  <ul className="modal-btn-group sm:flex block mx-[-7px]">
                    <li className="mx-[7px] lg:mb-0 mb-[10px]">
                      <Link to="/shop-cart" className="btn shadow-none btn-primary btn-hover-1">
                        <span>Add To Cart{" "} <i className="flaticon-shopping-bag-1 text-xl ml-[10px] inline-flex" /></span>
                      </Link>
                    </li>
                    <li className="mx-[7px] lg:mb-0 mb-[10px]">
                      <Link to="/shop-checkout" className="btn shadow-none btn-outline-secondary btn-hover-1 text-yellow">
                        <span>Buy Now{" "}<i className="flaticon-shopping-cart text-xl ml-[10px] inline-flex" /></span>
                      </Link>
                    </li>
                  </ul>
                  <Avatar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductDetailTabs />
      <section className="pt-0 lg:pb-[100px] pb-[70px] relative bg-white overflow-hidden">
        <div className="container">
          <div className="mb-[50px] max-xl:mb-[30px] relative mx-auto text-center">
            <h2 className="font-lobster">Special Menu</h2>
          </div>
          <HomeSpacialMenu />
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
export function DetailList() {
  return (
    <>
      <ul className="add-product flex flex-wrap mx-[-5px] mb-[30px] w-full">
        <li className="p-[5px] sm:w-[50%] w-full">
          <div className="mini-modal inline-flex p-[10px] w-full rounded-[10px] items-center border border-[#2222221a]">
            <div className="dz-media w-[45px] min-w-[45px] h-[45px] rounded-md relative overflow-hidden">
              <img src={IMAGES.modal_mini_pic1} alt="/" className="w-full h-auto"/>
            </div>
            <div className="dz-content ml-[15px] flex justify-between w-full">
              <p className="font-medium text-black2 text-base">French Frise</p>
              <div className="form-check search-content block">
                <input className="form-check-input appearance-none rounded-[0.5em] w-6 h-6 border-2 border-primary" type="checkbox" value="" />
              </div>
            </div>
          </div>
        </li>
        <li className="p-[5px] sm:w-[50%] w-full">
          <div className="mini-modal inline-flex p-[10px] w-full rounded-[10px] items-center border border-[#2222221a]">
            <div className="dz-media w-[45px] min-w-[45px] h-[45px] rounded-md relative overflow-hidden">
              <img src={IMAGES.modal_mini_pic2} alt="/" />
            </div>
            <div className="dz-content ml-[15px] flex justify-between w-full">
              <p className="font-medium text-black2 text-base">Extra Cheese</p>
              <div className="form-check search-content block">
                <input className="form-check-input appearance-none rounded-[0.5em] w-6 h-6 border-2 border-primary" type="checkbox" value="" />
              </div>
            </div>
          </div>
        </li>
        <li className="p-[5px] sm:w-[50%] w-full">
          <div className="mini-modal inline-flex p-[10px] w-full rounded-[10px] items-center border border-[#2222221a]">
            <div className="dz-media w-[45px] min-w-[45px] h-[45px] rounded-md relative overflow-hidden">
              <img src={IMAGES.modal_mini_pic3} alt="/" />
            </div>
            <div className="dz-content ml-[15px] flex justify-between w-full">
              <p className="font-medium text-black2 text-base">Coca Cola</p>
              <div className="form-check search-content block">
                <input className="form-check-input appearance-none rounded-[0.5em] w-6 h-6 border-2 border-primary" type="checkbox" value="" />
              </div>
            </div>
          </div>
        </li>
        <li className="p-[5px] sm:w-[50%] w-full">
          <div className="mini-modal inline-flex p-[10px] w-full rounded-[10px] items-center border border-[#2222221a]">
            <div className="dz-media w-[45px] min-w-[45px] h-[45px] rounded-md relative overflow-hidden">
              <img src={IMAGES.modal_mini_pic4} alt="/" />
            </div>
            <div className="dz-content ml-[15px] flex justify-between w-full">
              <p className="font-medium text-black2 text-base">Choco Lava</p>
              <div className="form-check search-content block">
                <input className="form-check-input appearance-none rounded-[0.5em] w-6 h-6 border-2 border-primary" type="checkbox" value="" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export function Avatar() {
  return (
    <>
      <ul className="avatar-list avatar-list-stacked flex">
        <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
          <img src={IMAGES.testiminial_small_pic1} alt="" className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"/>
        </li>
        <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
          <img src={IMAGES.testiminial_small_pic2} alt="" className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"/>
        </li>
        <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
          <img src={IMAGES.testiminial_small_pic3} alt="" className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"/>
        </li>
        <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
          <img src={IMAGES.testiminial_small_pic4} alt="" className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"/>
        </li>
        <li className="avatar inline-block relative duration-300 hover:z-[1] mr-[-17px]">
          <img src={IMAGES.testiminial_small_pic5} alt="" className="object-cover rounded-full h-[2.735rem] w-[2.735rem] border-2 border-white"/>
        </li>
        <li className="avatar inline-block relative duration-300 hover:z-[1]">
          <span className="bg-primary h-[2.735rem] w-[2.735rem] leading-[2.735rem] text-center inline-block text-xs rounded-full text-white">150+</span>
        </li>
      </ul>
    </>
  );
}
