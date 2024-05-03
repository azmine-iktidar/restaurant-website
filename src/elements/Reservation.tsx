
import Select from 'react-select';

const data = [
  "Number of People",
  "Member 1",
  "Member 2",
  "Member 3",
  "Member 4",
  "Member 5",
].map((item) => ({ label: item, value: item }));

const Reservation = () => {
  return (
    <form >
      <div className="row">
        <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
          <div className="relative flex gap-5 items-center w-full border-b border-white">
            <div className="w-[35px] h-[50px] leading-10">
              <i className="flaticon-user text-white text-2xl align-middle inline-flex" />
            </div>
            <input name="dzName" required type="text" placeholder="Your Name"
              className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full"
            />
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
          <div className="relative flex gap-5 items-center w-full border-b border-white">
            <div className="w-[35px] h-[50px] leading-10">
              <i className="flaticon-phone-call text-white text-2xl align-middle inline-flex" />
            </div>
            <input name="dzPhoneNumber" required type="number" placeholder="Phone Number"
              className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full"
            />
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
          <div className="relative flex gap-5 items-center w-full border-b border-white">
            <div className="w-[35px] h-[50px] leading-10">
              <i className="flaticon-email-1 text-white text-2xl align-middle inline-flex" />
            </div>
            <input name="dzEmail" required type="text" placeholder="Your Email"
              className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full"
            />
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
          <div className="relative flex gap-3 items-center w-full border-b border-white">
            <div className="w-[35px] h-[50px] leading-10">
              <i className="flaticon-two-people text-white text-2xl align-middle inline-flex" />
            </div>            
            <Select 
              options={data} 
              isSearchable={false}
              defaultValue={data[0]}
              className="custom-react-select  style-1 text-white flex-1" 
            /> 
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
          <div className="relative flex gap-5 items-center w-full border-b border-white">
            <div className="w-[35px] h-[50px] leading-10">
              <i className="flaticon-calendar-date text-white text-2xl align-middle inline-flex" />
            </div>
            <input required type="text" id="datePickerOnly" placeholder="Date"
              className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full form-control filled"
            />
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full sm:mb-[50px] mb-[30px] pl-[15px] pr-[15px]">
          <div className="relative flex gap-5 items-center w-full border-b border-white">
            <div className="w-[35px] h-[50px] leading-10">
              <i className="flaticon-clock text-white text-2xl align-middle inline-flex" />
            </div>
            <input required type="text"
              className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 w-full"
              id="timePickerOnly" placeholder="Time"
            />
          </div>
        </div>
        <div className="w-full text-center">
          <button type="button"  name="submit"  value="submit"
            className="btn btn-lg btn-white btn-hover-1 py-[18px] px-[50px] font-medium text-base leading-2xl overflow-hidden z-[1] text-black2 rounded-[6px] relative inline-flex items-center justify-center duration-500 focus:ring-0"
          >
            <span>Book a Table</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Reservation;
