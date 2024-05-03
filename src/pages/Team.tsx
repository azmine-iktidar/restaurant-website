import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { Link } from "react-router-dom";
import { teamArr } from "../elements/JsonData";

const Team = () => {
  return (
    <>
      <CommonBanner img={IMAGES.banner_bnr2} title="Team" subtitle="Team" />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] overflow-hidden lg:pb-[80px] sm:pb-10 pb-5">
        <div className="container">
          <div className="row">
            {teamArr.map(({ img, name }, ind) => (
              <div className="lg:w-1/4 sm:w-1/2 w-full px-[15px] mb-[30px]" key={ind}>
                <div className="shadow-lg rounded-[10px] bg-white overflow-hidden group">
                  <div className="relative  overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">
                    <img src={img} alt="/" className="group-hover:scale-110 duration-500 block w-full"/>
                  </div>
                  <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                    <div className="clearfix">
                      <h6><Link to="/team-detail">{name}</Link></h6>
                      <span className="font-normal text-sm leading-5 text-primary">Senior Chef</span>
                    </div>
                    <ul className="team-social">
                      <li className="relative">
                        <Link className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px]" to="#"><i className="flaticon-share" /></Link>
                        <ul className="sub-team-social absolute bottom-0 z-[1] w-10 rounded-lg opacity-0 duration-500 	hover:opacity-100 hover:pb-[80px]">
                          <li className="mb-2 relative">
                            <Link className="text-white duration-500 text-center text-lg bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg" to="https://www.facebook.com/"target="_blank"><i className="fab fa-facebook-f" /></Link></li>
                          <li className="mb-2 relative">
                            <Link className="text-white duration-500 text-center text-lg bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg" to="https://twitter.com/" target="_blank"><i className="fab fa-twitter" /></Link></li>
                          <li className="mb-2 relative">
                            <Link className="text-white duration-500 text-center text-lg bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg" to="https://www.instagram.com/" target="_blank" ><i className="fab fa-instagram" /></Link>
                          </li>
                          <li className="mb-2 relative">
                            <Link className="text-white duration-500 text-center text-lg bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg" to="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
