import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import ShopStyle1RightContent from "../elements/ShopStyle1RightContent";
import { shopArr } from "../elements/JsonData";
import { useState } from "react";

interface newType {
  img: string;
  num: number;
  title: string;
}
const ShopCart = () => {
  const [data, setData] = useState<newType[]>(shopArr);
  const [filterSidebar, setFilterSidebar] = useState<boolean>(false);

  const qtyButton = (index: number, value: string) => {
    switch (value) {
      case "increament":
        setData(
          data.map((item, ind) => {
            if (index == ind) {
              return { ...item, num: item.num + 1 };
            }
            return item;
          })
        );
        break;
      case "decreament":
        setData(
          data.map((item, ind) => {
            if (index == ind) {
              return { ...item, num: item.num > 0 ? item.num - 1 : item.num };
            }
            return item;
          })
        );
        break;
      case "delet":
        setData(
          data.filter((el, i) => {
            if (el) {
              return i !== index;
            }
            return el;
          })
        );
        break;
      default:
        break;
    }
  };
  return (
    <div className="page-content bg-white">
      <CommonBanner
        img={IMAGES.images_bnr4}
        title="Shop Cart"
        subtitle="Shop Cart"
      />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 relative bg-white">
        <div className="container">
          <div className="row">
            <div className="lg:w-2/3 w-full px-[15px]">
              <div className="flex justify-between items-center">
                <h5 className="lg:mb-[15px] mb-5">Related Products</h5>
                <Link to="#" className="btn btn-primary filter-btn lg:hidden block mb-[15px] py-[5px] px-[18px] text-white"
                  onClick={() => {setFilterSidebar(true);}}
                >
                  Filter
                </Link>
              </div>
              <ShopStyle1RightContent />
            </div>
            <div className="lg:w-1/3 w-full px-[15px] mb-[30px]">
              <aside className="lg:sticky pl-5 max-xl:pl-0 pb-[1px] top-[100px]">
                <div className={`shop-filter style-1 ${filterSidebar ? "show" : ""}`}>
                  <div className="flex justify-between">
                    <div className="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
                      <h5>Cart <span className="text-primary">(03)</span></h5>
                    </div>
                    <Link to={"#"} className="btn-close style-1 text-xl font-black text-primary p-0 lg:hidden block"
                      onClick={() => {setFilterSidebar(false);}}
                    >
                      <i className="la la-close font-black"></i>
                    </Link>
                  </div>
                  {data.map(({ img, num, title }, ind) => (
                    <div className="cart-item flex items-center border-b border-[#2222221a] pb-[15px] mb-[15px]" key={ind}>
                      <div className="dz-media w-[80px] min-w-[80px] h-[80px] overflow-hidden rounded-[10px] relative">
                        <img src={img} alt="/" />
                      </div>
                      <div className="dz-content ml-[15px] w-full">
                        <div className="dz-head mb-[10px] flex items-center justify-between">
                          <h6 className="text-base">{title}</h6>
                          <Link to={"#"} className="text-black2" onClick={() => {qtyButton(ind, "delet");}}>
                            <i className="fa-solid fa-xmark text-danger" />
                          </Link>
                        </div>
                        <div className="dz-body flex items-center justify-between">
                            <div className="input-group mt-[5px] flex flex-wrap items-stretch h-[31px] relative w-[105px] min-w-[105px]">
                              <input type="number" step="1" defaultValue={num} key={num}  name="quantity" className="quantity-field" />
                              <span className="flex justify-between p-[2px] absolute w-full">
                                <input type="button" value="-" onClick={() => { qtyButton(ind, "decreament");}} className="button-minus" data-field="quantity" />	
                                <input type="button" value="+" onClick={() => { qtyButton(ind, "increament");}} className="button-plus" data-field="quantity" />
                              </span>
                            </div>
                            <h5 className="price text-primary mb-0">$14.20</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="order-detail mt-10">
                    <h6 className="mb-2">Bill Details</h6>
                    <table className="mb-[25px] w-full border-collapse">
                      <tbody>
                          <tr>
                            <td className="py-[6px] font-medium text-sm leading-[21px] text-bodycolor">Item Total</td>
                            <td className="price text-primary font-semibold text-base leading-6 text-right">$55.00</td>
                          </tr>
                          <tr className="charges border-b border-dashed border-[#22222233]">
                            <td className="pt-[6px] pb-[15px] font-medium text-sm leading-[21px] text-bodycolor">Delivery Charges</td>
                            <td className="price pt-[6px] pb-[15px] text-primary font-semibold text-base leading-6 text-right">$5.00</td>
                          </tr>
                          <tr className="tax border-b-2 border-[#22222233]">
                            <td className="pt-[6px] pb-[15px] font-medium text-sm leading-[21px] text-bodycolor">Govt Taxes & Other Charges</td>
                            <td className="price pt-[6px] pb-[15px] text-primary font-semibold text-base leading-6 text-right">$3.50</td>
                          </tr>
                          <tr className="total">
                            <td className="py-[6px] font-medium text-sm leading-[21px] text-black mt-10 pt-5"><h6>Total</h6></td>
                            <td className="price text-primary font-semibold text-base leading-6 text-right">$63.50</td>
                          </tr>
                    </tbody>
                    </table>
                    <Link to="/shop-checkout"
                      className="btn btn-primary block text-center btn-md w-full btn-hover-1"
                    >
                      <span className="z-[2] relative block">
                        Order Now <i className="fa-solid fa-arrow-right ml-[10px]" />
                      </span>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopCart;
