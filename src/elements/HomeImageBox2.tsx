import { useState } from 'react';
import { HomeImageBoxArr } from "./JsonData";

const HomeImageBox2 = () => {
    const [activebox, setActivebox] = useState<number>(1);
    return (
        <>
            <div className="2xl:mb-[50px] mb-[25px] relative mx-auto text-center">
                <h2 className="font-lobster">Quality Services</h2>
            </div>

            <div className="icon-wrapper1 bg-white rounded-[15px] relative z-[1]">
                <div className="row">
                    {HomeImageBoxArr.map(({ img2, icon, title }, ind) => (
                        <div className="lg:w-1/4 sm:w-1/2 w-full px-[15px]" key={ind}>
                            <div onMouseEnter={() => { setActivebox(ind);}}
                                className={` icon-box-wrapper group text-center ${ activebox === ind ? "active" : ""}`}
                                style={{ backgroundImage: `url(${img2})` }}
                            >
                                <div className="inner-content relative z-[1]">
                                    <div className="mb-[10px]">                                        
                                        <i className={` text-7xl text-yellow ${icon}`} />                                        
                                    </div>
                                    <div className="icon-content overflow-hidden text-center">
                                        <h5 className="mb-2">{title}</h5>
                                        <p className='sm:text-base text-[15px] group-hover:text-white'>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>   
        </>
    );
};

export default HomeImageBox2;