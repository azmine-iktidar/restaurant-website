import { Link } from "react-router-dom";

interface propType {
  img: string;
  title: string;
}
const BlogGridCard = ({ img, title }: propType) => {
  return (
    <div className="card-container">
      <div className="overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] bg-white group">
        <div className="dz-media w-full h-full mb-0 relative overflow-hidden">
          <Link to="/blog-standard" className="block">
            <img src={img} alt="/" className="block w-full group-hover:scale-110 duration-500" />
          </Link>
        </div>
        <div className="content flex-col flex p-[30px] max-xl:p-5 relative">
          <div className="mb-2.5">
            <ul className="flex items-center">
              <li className="inline-block relative text-[13px] mr-3">
                <Link to={"#"} className="text-sm font-medium text-bodycolor">
                  <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" /> 26 Jan 2023
                </Link>
              </li>
              <li className="dz-comment">
                <Link to={"#"} className="text-sm font-medium text-bodycolor">
                  <i className="flaticon-chat-bubble text-base text-primary mr-[5px]" /> 2.5K{" "}
                </Link>
              </li>
            </ul>
          </div>
          <h5 className="mb-2">{title}</h5>
          <p className="text-base">There are many variations of passages of Lorem Ipsum available, but the majority have.</p>
          <div>
            <Link to="/blog-standard" className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGridCard;
