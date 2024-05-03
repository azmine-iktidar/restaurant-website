import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { HomeSpacialMenunArr } from "../elements/JsonData";

const ShopWishlist = () => {
  return (
    <>
      <CommonBanner
        img={IMAGES.images_bnr5}
        title="Shop Wishlist"
        subtitle="Shop Wishlist "
      />
      <div className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 relative bg-white overflow-x-auto">
        <div className="container">
          <div className="row">
            <div className="w-full px-[15px] mb-[30px]">
              <div className="table-responsive rounded-md overflow-x-auto min-w-[60rem]">
                <table className="border border-[#00000020] overflow-x-auto align-middle w-full">
                  <thead className="align-bottom">
                    <tr className="border-b border-[#00000020]">
                      <th className="text-left bg-[#222] p-[15px] text-base font-semibold text-white">Product</th>
                      <th className="text-left bg-[#222] p-[15px] text-base font-semibold text-white">Product Name</th>
                      <th className="text-left bg-[#222] p-[15px] text-base font-semibold text-white">Unit Price</th>
                      <th className="text-left bg-[#222] p-[15px] text-base font-semibold text-white">Add to cart </th>
                      <th className="text-right bg-[#222] p-[15px] text-base font-semibold text-white">Close</th>
                    </tr>
                  </thead>
                  <tbody>
                    {HomeSpacialMenunArr.map(({ img, title }, ind) => (
                      <tr key={ind} className="border-b border-[#00000020]">
                        <td className="p-[15px] font-medium product-item-img"><img src={img} alt="/" className="w-[100px] rounded-md"/></td>
                        <td className="p-[15px] font-medium text-bodycolor">{title}</td>
                        <td className="p-[15px] font-medium text-bodycolor">$35.00</td>
                        <td className="p-[15px] font-medium product-item-totle">
                          <Link to="/shop-cart" className="btn bg-[#f3f3f3] shadow-none btn-hover-2 btn-gray hover:bg-primary">
                            Add To Cart
                          </Link>
                        </td>
                        <td className="p-[15px] font-medium text-right">
                          <Link to="#" className="bg-danger text-white w-[40px] h-[40px] leading-[40px] rounded-md inline-block text-center">
                            <i className="fa fa-close" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopWishlist;
