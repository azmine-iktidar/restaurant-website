import { Link } from "react-router-dom";

interface propFile {
  img: string;
  title: string;
  subtitle: string;
}

const CommonBanner = ({ img, title, subtitle }: propFile) => {
  return (
    <div
      className="bg-fixed relative z-[1] after:content-[''] after:absolute after:z-[-1] after:bg-[#222222e6] after:opacity-100 after:w-full after:h-full after:top-0 after:left-0  pt-[50px] lg:h-[450px] sm:h-[400px] h-[300px] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center",}}
    >
      <div className="container table h-full relative z-[1] text-center">
        <div className="dz-bnr-inr-entry align-middle table-cell">
          <h2 className="font-lobster text-white mb-5 2xl:text-[70px] md:text-[60px] text-[40px] leading-[1.2]">{title}</h2>
          <nav aria-label="breadcrumb" className="breadcrumb-row">
            <ul className="breadcrumb bg-primary shadow-[0px_10px_20px_rgba(0,0,0,0.05)] rounded-[10px] inline-block lg:py-[13px] md:py-[10px] sm:py-[5px] py-[7px] lg:px-[30px] md:px-[18px] sm:px-5 px-3.5 m-0">
              <li className="breadcrumb-item p-0 inline-block text-[15px] font-normal">
                <Link to="/" className="text-white">Home</Link>
              </li>
              <li className="breadcrumb-item text-white p-0 inline-block text-[15px] font-normal active pl-2">{subtitle}</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
