import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";

const Home2OurBlog = () => {
  return (
    <section className="content-inner lg:pb-[70px] pb-10 overflow-hidden relative">
      <div className="container">
        <div className="row">
          <div className="xl:w-7/12 px-[15px] w-full">
            <div className="mb-[50px] max-xl:mb-[30px] relative mx-auto text-center">
              <h2 className="font-lobster text-left">Recent News & Updates</h2>
            </div>
            <div className="dz-card style-2 blog-half rounded-lg overflow-hidden duration-500 bg-[#2222220d] md:flex relative mb-[30px]">
              <div className="dz-media overflow-hidden relative md:w-[270px] md:min-w-[270px] w-full md:h-auto h-[250px]">
                <Link to="/blog-standard" className="block h-full">
                  <img src={IMAGES.blog_grid2_pic1} alt="/"  className="min-w-auto w-full"/>
                </Link>
                <div className="dz-date">12 April 2024</div>
              </div>
              <div className="dz-info flex flex-col relative p-[25px] ">
                <h4 className="dz-title mb-[10px]"><Link to="/blog-standard">Chill Out with These Refreshing</Link></h4>
                <div className="dz-meta mb-[15px]">
                  <ul>
                    <li className="dz-user">
                      <Link to="#" className="text-black2">
                        <i className="fa-solid fa-user text-xs text-primary mr-[5px] relative top-0 scale-[1.2]"></i>
                        By <span className="text-primary">RK Gupta</span>
                      </Link>
                    </li>
                    <li className="dz-comment">
                      <Link to="#" className="text-black2"><i className="fa-solid fa-message text-xs text-primary mr-[5px] relative top-0 scale-[1.2]" />10 Comments</Link>
                    </li>
                  </ul>
                </div>
                <div className="btn-wrapper mt-auto">
                  <Link
                    to="/blog-standard"
                    className="btn btn-primary btn-hover-2"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="dz-card style-2 blog-half rounded-lg overflow-hidden duration-500 bg-[#2222220d] md:flex relative mb-[30px]">
              <div className="dz-media overflow-hidden relative md:w-[270px] md:min-w-[270px] w-full md:h-auto h-[250px]">
                <Link to="/blog-standard" className="block h-full">
                  <img src={IMAGES.blog_grid2_pic2} alt="/"  className="min-w-auto w-full"/>
                </Link>
                <div className="dz-date">24 Feb 2023</div>
              </div>
              <div className="dz-info flex flex-col relative p-[25px]">
                <h4 className="dz-title mb-[10px]">
                  <Link to="/blog-standard">
                    Taste Excitement: A Sneak Peek into the
                  </Link>
                </h4>
                <div className="dz-meta mb-[15px]">
                  <ul>
                    <li className="dz-user">
                      <Link to="#" className="text-black2">
                        <i className="fa-solid fa-user text-xs text-primary mr-[5px] relative top-0 scale-[1.2]"></i>
                        By <span>KK Sharma</span>
                      </Link>
                    </li>
                    <li className="dz-comment">
                      <Link to="#" className="text-black2">
                        <i className="fa-solid fa-message text-xs text-primary mr-[5px] relative top-0 scale-[1.2]"></i>
                        24 Comments
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="btn-wrapper mt-auto">
                  <Link
                    to="/blog-standard"
                    className="btn btn-primary btn-hover-2"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-5/12 w-full px-[15px] mb-[30px]">
            <div
              className="dz-card style-3 dz-card-large blog-half relative sm:min-h-[570px] min-h-[450px] h-full overflow-hidden rounded-lg flex flex-col"
              style={{ backgroundImage: `url(${IMAGES.blog_large_pic1})` }}
            >
              <video autoPlay loop muted className="absolute top-0 left-0 object-cover w-full h-full">
                <source src={IMAGES.video} type="video/mp4" />
              </video>
              <div className="dz-info p-[35px] z-[1] mt-auto">
                <h3 className="dz-title mb-[15px]">
                  <Link to="/blog-standard" className="text-white">
                    Exploring the World of Pizza
                  </Link>
                </h3>
                <div className="dz-meta mb-[15px]">
                  <ul>
                    <li className="dz-date absolute top-[35px] left-[35px] after:hidden py-[10px] px-[15px] block">14 Feb 2023</li>
                    <li className="dz-user">
                      <Link to="#" className="text-white">
                        <i className="fa-solid fa-user text-xs text-primary mr-[5px] relative top-0 scale-[1.2]"/>
                        By <span className="text-primary">KK Sharma</span>
                      </Link>
                    </li>
                    <li className="dz-comment">
                      <Link to="#" className="text-white">
                        <i className="fa-solid fa-message text-xs text-primary mr-[5px] relative top-0 scale-[1.2]"/>
                        15 Comments
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2OurBlog;
