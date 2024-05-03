import { Link } from "react-router-dom";

interface propType {
  pages: string;
}

const CommonBanner2 = ({ pages }: propType) => {
  return (
    <div className="dz-breadcrumb-bnr py-5 bg-[#f9f9f9]">
      <div className="container">
        <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
          <ul className="breadcrumb inline-block">
            <li className="breadcrumb-item inline-block text-[15px] font-normal text-primary"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item inline-block text-[15px] font-normal pl-2">Blog</li>
            <li className="breadcrumb-item inline-block text-[15px] font-normal pl-2 active" >{pages}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CommonBanner2;
