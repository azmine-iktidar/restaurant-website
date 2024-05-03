import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import Particls from "../components/Particls";

const Error404 = () => {
 

  return (
    <>
      <div className="page-content bg-white">
        <div
          className="lg:pb-[70px] sm:pb-10 pb-5 overflow-hidden relative h-[100vh] flex items-center min-h[700px] pt-6 error-page" id="app-banner"
          style={{backgroundImage: `url(${IMAGES.background_bg1})`,backgroundRepeat: "no-repeat",backgroundSize: "cover" }}
        >
          <div className="container">
            <div className="inner-content text-center relative z-10 lg:pt-[150px] pt-[80px]">
              <h1 className="error-head font-lobster mx-auto mr-5 font-normal md:text-[140px] mb-5 text-[120px] leading-[1] text-white">404</h1>
              <h3 className="error-para text-[#EFEFEF] mb-[10px] xl:text-[30px] text-[22px] font-semibold">Opps! Page not Found</h3>
              <p className="text-lg xl:mb-10 mb-[25px] text-[#ffffff80]">Sorry. The page you are looking for is not found</p>
              <Link to="/" className="btn btn-md btn-primary btn-hover-1"><span>Back to Home</span></Link>
            </div>
            
          </div>
        </div>
      </div>
      <Particls />
    </>
  );
};

export default Error404;
