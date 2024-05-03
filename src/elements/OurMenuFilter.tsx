import { useContext } from "react";
import { Context } from "../context/AppContext";
const OurMenuFilter = () => {
  const { showCategeryFilter, setShowCategeryFilter } = useContext(Context);

  return (
    <>
      <div
        className={`offcanvas offcanvas-end filter-category-sidebar fixed top-0 translate-x-full z-[999] h-screen overflow-y-auto bg-white dark:bg-gray-800 xl:w-[510px] sm:w-[400px] w-[325px] pt-[50px] px-[30px] pb-5 max-md:p-5 max-md:pt-[50px] duration-500 ${
          showCategeryFilter ? "drawer-show" : ""
        }`}
        tabIndex={1}
        id="offcanvasFilter"
      >
        <button type="button"
          className="btn-close style-1 text-2xl leading-7 absolute left-[10px] top-[10px] p-0"
          onClick={() => {setShowCategeryFilter(false);}}
        >
          <i className="la la-close" />
        </button>
        <div className="offcanvas-body">
          <div className="widget mb-[30px]">
            <div className="widget-title xl:mb-[30px] mb-5 pb-3 relative">
              <h4 className="text-xl">Refine By Categories</h4>
            </div>
            <div className="category-check-list flex flex-wrap mb-[10px] w-full">
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-01"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-01">Pizza</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-02"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-02">Hamburger</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-03"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-03">Cold Drink</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-04"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-04">Sandwich</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-05"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-05">Muffin</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-06"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-06">Burrito</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-07"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-07">Taco</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-08"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-08">Hot Dog</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-09"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-09">Noodles</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-10"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-10">Macrony</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-11"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-11">Cheese Pasta</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-12"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-12">Fish Fry</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-13"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-13">Cold Coffee</label>
              </div>
              <div className="fform-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-14"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-14">Manchurian</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-15"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-15">Dosa</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-16"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-16">Momos</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-17"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-17">Soup</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-18"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-18">Chicken Burger</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-19"/>
                <label  className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-19">Beverages</label>
              </div>
              <div className="form-check mb-[10px] block w-[50%] min-h-[1.5rem]">
                <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-20"/>
                <label className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-20">Lemon Lime Soda</label>
              </div>
            </div>
          </div>
          <div className="widget mb-[30px]">
            <div className="widget-title xl:mb-[30px] mb-5 pb-3 relative">
              <h4 className="text-xl">Near Me</h4>
            </div>
            <div className="form-check mb-[10px] block min-h-[1.5rem]">
              <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-21"/>
              <label className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-21"> Ortus Restaurant</label>
            </div>
            <div className="form-check mb-[10px] block min-h-[1.5rem]">
              <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox"
                value="" id="productCheckBox-22"
              />
              <label className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-22">
                Amar Punjabi Restaurant
              </label>
            </div>
            <div className="form-check mb-[10px] block min-h-[1.5rem]">
              <input className="form-check-input w-[15px] h-[15px] rounded border border-[#2222224d] float-left appearance-none p-[6px]" type="checkbox" value="" id="productCheckBox-23"/>
              <label className="form-check-label ml-[15px] sm:text-[15px] text-[13px] inline-block text-bodycolor" htmlFor="productCheckBox-23">Other</label>
            </div>
          </div>
          <div className="widget rating-filter mb-[30px]">
            <div className="widget-title xl:mb-[30px] mb-5 pb-3 relative"><h4 className="text-xl">Rating</h4></div>
            <ul>
              <li className="inline-block mr-2"><span className="font-medium">5 Star</span></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>
            </ul>
            <ul>
              <li className="inline-block mr-2"><span className="font-medium">4 Star</span></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>
            </ul>
            <ul>
              <li className="inline-block mr-2"><span className="font-medium">3 Star</span></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>
            </ul>
            <ul>
              <li className="inline-block mr-2"><span className="font-medium">2 Star</span></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>
            </ul>
            <ul>
              <li className="inline-block mr-2"><span className="font-medium">1 Star</span></li>{" "}
                <li className="inline-block"><i className="icon-star-on text-[var(--secondary-dark)]" /></li>
            </ul>
          </div>
          <div className="widget mb-[30px]">
            <div className="widget-title xl:mb-[30px] mb-5 pb-3 relative">
              <h4 className="text-xl">Price Range</h4>
            </div> 
          </div>
        </div>
      </div>
      <div
        className={`menu-backdrop ${ showCategeryFilter ? "show" : ""}`}
        onClick={() => {setShowCategeryFilter(false);}}
      ></div>
    </>
  );
};

export default OurMenuFilter;
