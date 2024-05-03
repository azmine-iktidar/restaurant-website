import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";

const ModalVideoBox = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 1 }}
        isOpen={open}
        videoId="D6QnqsNtgAM"
        onClose={() => setOpen(false)}
      />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] overflow-hidden pb-0">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[35px] relative mx-auto text-center">
            <h2 className="font-lobster max-xl:leading-[50px]">We Invite you to Visit Our Restaurant</h2>
            <p className="max-w-[815px] m-auto lg:text-base text-sm lg:leading-[1.6rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="row">
            <div className="w-full px-[15px]">
              <div className="about-media dz-media relative overflow-hidden rounded-[10px]">
                <img src={IMAGES.background_pic11} alt="/" className="lg:h-[430px] sm:h-[380px] h-[300px]" />
                <Link to={"#"}
                  className="video video-btn popup-youtube absolute top-[50%] left-[50%] 2xl:w-[87px] md:w-[70px] w-[55px] 2xl:h-[87px] md:h-[70px] h-[55px] bg-primary text-white rounded-full 2xl:text-2xl md:text-lg text-base flex items-center justify-center translate-x-[-50%]  translate-y-[-50%] duration-500 hover:scale-125"
                  onClick={() => {setOpen(true);}}
                >
                  <i className="fa-solid fa-play" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ModalVideoBox;
