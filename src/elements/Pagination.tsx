import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="text-center mx-auto mt-[10px]">
      <ul className="pagination flex justify-center mb-[15px]">
        <li className="page-item mx-2">
          <Link className="page-link w-[45px] min-w-[45px] leading-[45px] text-center rounded-lg bg-white text-primary shadow-[0px_5px_25px_rgba(0,0,0,0.1)] block relative duration-500 hover:bg-primary hover:text-white prev" to={"#"}>
            <i className="fas fa-chevron-left"></i>
          </Link>
        </li>
        <li className="page-item mx-2">
          <Link className="page-link w-[45px] min-w-[45px] leading-[45px] text-center rounded-lg bg-primary text-white shadow-[0px_5px_25px_rgba(0,0,0,0.1)] block relative duration-500  active" to={"#"}>
            <span>1</span>
          </Link>
        </li>
        <li className="page-item mx-2">
          <Link className="page-link w-[45px] min-w-[45px] leading-[45px] text-center rounded-lg bg-white text-primary shadow-[0px_5px_25px_rgba(0,0,0,0.1)] block relative duration-500 hover:bg-primary hover:text-white" to={"#"}>
            <span>2</span>
          </Link>
        </li>
        <li className="page-item mx-2">
          <Link className="page-link w-[45px] min-w-[45px] leading-[45px] text-center rounded-lg bg-white text-primary shadow-[0px_5px_25px_rgba(0,0,0,0.1)] block relative duration-500 hover:bg-primary hover:text-white" to={"#"}>
            <span>3</span>
          </Link>
        </li>
        <li className="page-item mx-2">
          <Link className="page-link w-[45px] min-w-[45px] leading-[45px] text-center rounded-lg bg-white text-primary shadow-[0px_5px_25px_rgba(0,0,0,0.1)] block relative duration-500 hover:bg-primary hover:text-white next" to={"#"}>
            <i className="fas fa-chevron-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
