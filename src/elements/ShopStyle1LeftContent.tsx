import { Link } from "react-router-dom";

import Nouislider from "nouislider-react";


const ShopStyle1LeftContent = () => {
  return (
    <div className="lg:w-1/4 w-full px-[15px]">
      <aside className="lg:sticky top-[100px] lg:pr-5 pb-[1px]">
        <div className="shop-filter">
          <div className="widget mb-[50px] widget_tag_cloud ">
            <div className="flex justify-between">
              <div className="widget-title xl:mb-[30px] mb-5 pb-3 relative">
                <h4 className="text-xl">Current Search</h4>
              </div>
              <Link to="#" className="btn-close style-1 text-xl font-black text-primary p-0 lg:hidden block">
                <i className="fa-solid fa-xmark font-black"></i>
              </Link>
            </div>
            <div className="tagcloud table">
              <Link className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]" to="/product-detail">Burger</Link>
              <Link className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]" to="/product-detail">Restaurant</Link>
              <Link className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a]" to="/product-detail">Pizza</Link>
            </div>
          </div>
          <div className="widget dz-widget_services mb-[50px] dz-widget_services">
            <div className="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
              <h4 className="text-xl">Refine By Categories</h4>
            </div>
            <div className="form-check mb-[15px] block">
              <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none" type="checkbox" value="" id="productCheckBox-01" />
              <label className="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor" htmlFor="productCheckBox-01">Pizza</label>
            </div>
            <div className="form-check mb-[15px] block">
              <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none" type="checkbox" value="" id="productCheckBox-02" />
              <label className="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor" htmlFor="productCheckBox-02">Hamburger</label>
            </div>
            <div className="form-check mb-[15px] block">
              <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none" type="checkbox" value="" id="productCheckBox-03" />
              <label className="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor" htmlFor="productCheckBox-03">Cold Drink</label>
            </div>
            <div className="form-check mb-[15px] block">
              <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none" type="checkbox" value="" id="productCheckBox-04" />
              <label className="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor" htmlFor="productCheckBox-04">Sandwich</label>
            </div>
            <div className="form-check mb-[15px] block">
              <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none" type="checkbox" value="" id="productCheckBox-05" />
              <label className="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor" htmlFor="productCheckBox-05">Muffin</label>
            </div>
            <div className="form-check mb-[15px] block">
              <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none" type="checkbox" value="" id="productCheckBox-06" />
              <label className="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor" htmlFor="productCheckBox-06">Burrito</label>
            </div>
            <div className="form-check mb-[15px] block">
              <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none" type="checkbox" value="" id="productCheckBox-07" />
              <label className="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor" htmlFor="productCheckBox-07">Taco</label>
            </div>
            <div className="form-check mb-[15px] block">
              <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left appearance-none" type="checkbox" value="" id="productCheckBox-08" />
              <label className="form-check-label ml-[15px] text-[15px] inline-block text-bodycolor" htmlFor="productCheckBox-08">Hot Dog</label>
            </div>
          </div>
          <div className="widget">
            <div className="widget-title xl:mb-[30px] mb-5 pb-3 text-lg relative">
              <h4 className="text-xl">Price Range</h4>
            </div>
            
            <div className="range-slider style-1 pt-[45px]">              
                <Nouislider 
                  tooltips={true}
                   start={[20, 70]}
                  range={{ min: 0, max: 100 }}
				          connect
                />              
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ShopStyle1LeftContent;
 