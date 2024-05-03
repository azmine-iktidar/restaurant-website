import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { BlogGrid2Arr } from "../elements/JsonData";
import { useState } from "react";

interface ArrType {
  img2: string;
  title: string;
}
const BlogList = () => {
  const [data, setData] = useState<ArrType[]>(BlogGrid2Arr);

  const loadMore = () => {
    const newData = [...data];

    for (let i = 0; i < 2; i++) {
      const key = Math.floor(Math.random() * BlogGrid2Arr.length);
      const newElement = {
        img2: BlogGrid2Arr[key].img2,
        title: BlogGrid2Arr[key].title,
      }; 

      newData.push(newElement); 
    }

    setData(newData); 
    console.log(newData); 
  };

  return (
    <>
      <CommonBanner img={IMAGES.images_bnr5} title="Blog List" subtitle="Blog List"/>
      <section className="content-inner-1 sm:pt-[100px] pt-[50px] lg:pb-[100px] pb-[50px]">
        <div className="container">
          <div className="row justify-center loadmore-content">
            {data.map(({ img2, title }, ind) => (
              <div className="xl:w-1/2 lg:w-2/3 w-full px-[15px]" key={ind}>
                <div className="overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] sm:flex bg-white group mb-[30px]">
                  <div className="dz-media sm:min-w-[240px] sm:w-[240px] w-full sm:h-auto h-[250px] mb-0 relative overflow-hidden">
                    <Link to="/blog-standard" className="block h-full">
                      <img src={img2} alt="/" className="h-full object-cover w-full group-hover:scale-110 duration-500"/>
                    </Link>
                  </div>
                  <div className="content flex-col flex py-[25px] px-[30px] relative">
                    <div className="mb-2.5">
                      <ul className="flex items-center">
                        <li className="inline-block relative text-[13px] mr-3">
                          <Link to="#" className="text-sm font-medium text-bodycolor">
                            <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" /> 31 March 2024
                          </Link>
                        </li>
                        <li className="dz-comment">
                          <Link to="#" className="text-sm font-medium text-bodycolor">
                            <i className="flaticon-chat-bubble text-base text-primary mr-[5px]" /> 1.5K
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h5 className="mb-2">{title}</h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have.
                    </p>
                    <div>
                      <Link to="/blog-standard"
                        className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center m-t10">
            <Link className="btn btn-primary dz-load-more btn-hover-2" to={"#"} onClick={loadMore}>Load More</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
