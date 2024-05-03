import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { TeamDetailArr } from "../elements/JsonData";
import { Link } from "react-router-dom";

const TeamDetail = () => {
  return (
    <>
      <CommonBanner
        img={IMAGES.images_bnr4}
        title="Team Detail"
        subtitle="Team Detail"
      />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[80px] sm:pb-10 pb-5">
        <div className="container">
          <div className="row">
            <div className="w-full px-[15px]">
              <div className="team-detail relative md:flex block items-center overflow-hidden xl:mb-[55px] lg:mb-10 mb-5">
                <div className="dz-media rounded-[10px] lg:w-[500px] md:w-[250px] w-full lg:min-w-[500px] md:min-w-[250px] min-w-full relative overflow-hidden">
                  <img src={IMAGES.team_detail_pic1} alt="/" className="lg:h-auto md:h-[350px] h-full rounded-[10px]"/>
                </div>
                <div className="dz-info w-full lg:ml-[50px] md:ml-[30px] mb-0 md:mt-0 mt-[30px]">
                  <div className="head pb-[18px] mb-[15px] border-b-2 border-[#C6C6C6]">
                      <h2 className="lg:mb-2 mb-0 xl:text-[50px] lg:text-[35px] text-[25px] font-semibold">John Doe</h2>
                      <span className="sub-title text-primary text-lg font-normal">Restaurant Chef</span>
                  </div>
                  <p className="xl:text-lg lg:text-[15px] text-sm xl:w-[580px] w-full mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <ul className="team-info mb-[18px]">
                    <li className="xl:text-lg text-base mb-2.5 font-normal text-bodycolor"><strong className="mr-[15px] font-normal text-black2">Responsibility:</strong>Senior Chef</li>
                    <li className="xl:text-lg text-base mb-2.5 font-normal text-bodycolor"><strong className="mr-[15px] font-normal text-black2">Experience:</strong>10 Year</li>
                    <li className="xl:text-lg text-base mb-2.5 font-normal text-bodycolor"><strong className="mr-[15px] font-normal text-black2">Email:</strong>Example@gmail.com</li>
                    <li className="xl:text-lg text-base mb-2.5 font-normal text-bodycolor"><strong className="mr-[15px] font-normal text-black2">Phone:</strong>+22 33 56 7675 8939</li>
                  </ul>
                  <div className="social-icon">
                    <ul className="mr-[-20px] ml-[-5px]">
                      <li className="inline-block px-[5px] mr-5">
                        <Link target="_blank" className="text-bodycolor lg:text-xl text-base" to="https://www.facebook.com/"><i className="fab fa-facebook-f" /></Link></li>
                      <li className="inline-block px-[5px] mr-5">
                        <Link target="_blank" className="text-bodycolor lg:text-xl text-base" to="https://twitter.com/"><i className="fab fa-twitter" /></Link></li>
                      <li className="inline-block px-[5px] mr-5">
                        <Link target="_blank" className="text-bodycolor lg:text-xl text-base" to="https://www.youtube.com/"><i className="fa-brands fa-youtube" /></Link></li>
                      <li className="inline-block px-[5px] mr-5">
                        <Link target="_blank" className="text-bodycolor lg:text-xl text-base" to="https://www.instagram.com/"><i className="fab fa-instagram" /></Link></li>
                      <li className="inline-block px-[5px] mr-5">
                        <Link target="_blank" className="text-bodycolor lg:text-xl text-base" to="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin" /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-bio mb-[55px]">
                <h4 className="mb-2.5">Biography</h4>
                <p className="mb-4 lg:text-base text-[15px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry dummy text ever since the 1500s, when an unknown
                  printer took Link galley of type and scrambled it to make Link type specimen book. It has survived not only five centuries.
                </p>
              </div>
              <div className="row">
                <div className="xl:w-5/12 lg:w-1/2 mb-2.5 px-[15px]">
                  <h4 className="mb-[15px]">Signature Dish</h4>
                  <ul className="dish-gallery flex flex-wrap pl-0 mx-[-10px]">
                    {TeamDetailArr.map(({ img, title }, ind) => (
                      <li key={ind} className="w-1/2 px-[10px] mb-5">
                        <Link to="/product-detail">
                          <div className="gallery-box-1 relative overflow-hidden rounded-[5px]">
                            <img src={img} alt="/" className="w-full min-w-full md:h-[150px] h-[120px]"/>
                            <span className="absolute bottom-[5px] left-3 text-lg font-medium text-white z-[1]">{title}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="xl:w-7/12 lg:w-1/2 w-full mb-[30px] px-[15px]">
                  <div className="team-skills">
                    <h4 className="mb-2.5">Professional Skills</h4>
                    <p className="mb-[15px] xl:w-[480px] w-full text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    {TeamDetailArr.map(({ progress, position }, index) => (
                      <div className="progress-bx style-1 relative overflow-hidden" key={index}>
                        <h6 className="progress-label mb-[15px] font-medium tracking-[0.02em]">
                          {position}
                          <span className="pull-end absolute right-0">{progress}</span>
                        </h6>
                        <div className="progress primary rounded-md m-b20 h-[3px] bg-[#D0D0D0] mb-[30px] overflow-visible">
                          <div className="progress-bar rounded-md bg-primary flex flex-col justify-center overflow-hidden h-full" style={{ width: progress }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetail;
