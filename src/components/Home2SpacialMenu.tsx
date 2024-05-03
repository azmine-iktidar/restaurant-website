import { Link } from "react-router-dom";
import { Home2SpacialMenuArr } from "../elements/JsonData";

const Home2SpacialMenu = () => {
  return (
    <div className="row">
      {Home2SpacialMenuArr.map(({ img, name, price }, ind) => (
        <div className="lg:w-1/4 sm:w-2/4 w-full px-[15px]" key={ind}>
          <div className="dz-img-box4 bg-white rounded-[10px] xl:p-[15px] p-2.5 mb-[30px] flex flex-col relative overflow-hidden z-[1] style-5">
            <div className="dz-content mb-[15px]">
              <div className="weight mb-[5px] flex justify-between items-center text-xs text-bodycolor">
                <span>{name}</span>
                <span>756g</span>
              </div>
              <div className="price mb-[5px] flex justify-between items-center">
                <h6 className="text-[#000]">{name}</h6>
                <h6 className="text-primary">{price}</h6>
              </div>
            </div>
            <div className="dz-media rounded-[10px] mt-auto w-full h-full overflow-hidden relative">
              <img src={img} alt="/" className="block w-full h-full"/>
              <Link className="detail-btn top-[-50px] z-[2] left-[50%] translate-x-[-50%] opacity-0 rounded-xl" to="/our-menu-1">
                  <i className="fa-solid fa-plus text-white" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home2SpacialMenu;
