import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { BlogGrid2Arr } from "../elements/JsonData";
import { useState } from "react";

interface ArrType {
  img: string;
  title: string;
}
const BlogGrid2 = () => {
  const [data, setData] = useState<ArrType[]>(BlogGrid2Arr);

  const loadMore = () => {
    const newData = [...data]; 

    for (let i = 0; i < 2; i++) {
      const key = Math.floor(Math.random() * BlogGrid2Arr.length);
      const newElement = {
        img: BlogGrid2Arr[key].img,
        title: BlogGrid2Arr[key].title,
      }; // Create a new element object

      newData.push(newElement);
    }

    setData(newData); 
    console.log(newData); // Log the updated data
  };

  return (
    <>
      <CommonBanner img={IMAGES.banner_bnr1} title="Blog Grid 2" subtitle="Blog Grid 2" />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[100px] pb-[70px] relative bg-white">
        <div className="min-container max-w-[53.125rem] mx-auto relative px-[0.938rem]">
          <div className="row loadmore-content">
            {data.map(({ img, title }, ind) => (
              <div className="md:w-1/2 w-full px-[15px]" key={ind}>
                <div className="overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] bg-white group mb-[30px]">
                  <div className="dz-media w-full h-full mb-0 relative overflow-hidden">
                    <Link to="/blog-standard" className="block"><img src={img} alt="/" className="block w-full group-hover:scale-110 duration-500" /></Link>
                  </div>
                  <div className="content flex-col flex p-[30px] max-xl:p-5 relative">
                    <div className="mb-2.5">
                      <ul className="flex">
                        <li className="inline-block relative text-[13px] mr-3">
                          <Link to="#" className="text-sm font-medium text-bodycolor">
                            <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" /> 26 Jan
                            2023
                          </Link>
                        </li>
                        <li className="inline-block relative text-[13px] mr-3">
                          <Link to="#" className="text-sm font-medium text-bodycolor">
                            <i className="flaticon-chat-bubble text-base text-primary mr-[5px]" /> 2.5K{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h5 className="mb-2"><Link to="/blog-standard">{title}</Link></h5>
                    <p>There are many variations of passages of Lorem Ipsum available have.</p>
                    <div>
                      <Link to="/blog-standard" className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px] bg-primary border-primary text-white btn-hover-2">
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

export default BlogGrid2;
