import { IMAGES } from "../constent/theme";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { useState,  } from "react";

const options = [
  "Number of People",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
].map((item) => ({ label: item, value: item }));

const Home3BookTable = () => {
	const [startDate, setStartDate] = useState<Date | null>(null);
	const handleChange = (date: Date | null) => {
		setStartDate(date);
	};

	const [selectedTime, setSelectedTime] = useState<Date | null>(null);

	const handleChangeTime = (time: Date | null) => {
		setSelectedTime(time);
	};

	// const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (		
	// 	<input className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0 form-control filled picker__input picker__input--active picker__input--target" 
	// 		onClick={onClick} 
	// 		ref={ref}
	// 		value = {value}
	// 		placeholder="Date"
	// 	/>
	// ));

	
  return (
    <div className="container sm:rounded-[10px] rounded-none bg-black2 z-[1] contact-area bg-parallax"
      style={{
        backgroundImage: `url(${IMAGES.images_background_pic13})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="row items-center">
        <div className="lg:w-8/12 md:w-full mb-[30px] px-[15px]">
          <div className="contact-head mb-[30px]">
            <h4 className="title mb-2 text-white">Book a Table</h4>
            <p className="text-white mb-4 opacity-75 sm:text-base text-sm">
              Lorem Ipsum is that it has a more-or-less normal distribution
              <br /> of letters, to using making it look like readable English.
            </p>
          </div>
          <form>
            <div className="row">
              <div className="md:w-1/2 w-full mb-[30px] px-[15px]">
				<div className="relative flex gap-1 items-center w-full border-b border-white">
					<div className="w-[35px] h-[50px] leading-10">
						<i className="flaticon-user text-white text-2xl align-middle inline-flex"></i>
					</div>
					<input name="dzName" required type="text" className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0" placeholder="Your Name" />
				</div>
			</div>
			<div className="md:w-1/2 w-full mb-[30px] px-[15px]">
				<div className="relative flex gap-1 items-center w-full border-b border-white">
					<div className="w-[35px] h-[50px] leading-10">
						<i className="flaticon-phone-call text-white text-2xl align-middle inline-flex"></i>
					</div>
					<input name="dzName" required type="text" className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0" placeholder="Phone Number" />
				</div>
			</div>
              <div className="md:w-1/2 w-full mb-[30px] px-[15px]">
                <div className="relative flex gap-3 items-center w-full border-b border-white">
                  <div className="w-[35px] h-[50px] leading-10">
                    <i className="flaticon-two-people text-white text-2xl align-middle inline-flex" />
                  </div>
				  	<Select          
						className="custom-react-select"
						classNamePrefix="select"
						defaultValue={options[0]}
						isClearable={false}
						options={options}
						isSearchable={false}
					/>	
                </div>
              </div>
              	<div className="md:w-1/2 w-full mb-[30px] px-[15px]">
					<div className="relative flex gap-1 items-center w-full border-b border-white">
						<div className="w-[35px] h-[50px] leading-10">
							<i className="flaticon-email-1 text-white text-2xl align-middle inline-flex"></i>
						</div>
						<input name="dzName" required type="text" className="placeholder:text-white bg-transparent p-0 leading-2xl pb-0.5 text-lg border-0 text-white font-medium h-[48px] outline-none relative top-[-5px] focus:ring-0" placeholder="Your Email" />
					</div>
				</div>
				<div className="md:w-1/2 w-full mb-[30px] px-[15px]">
					<div className="relative flex gap-1 items-center w-full border-b border-white date-picker-inp">
						<div className="w-[35px] h-[50px] leading-10">
							<i className="flaticon-clock text-white text-2xl align-middle inline-flex"></i>
						</div>						
						<DatePicker
							selected={selectedTime}
							onChange={handleChangeTime}
							showTimeSelect
							showTimeSelectOnly
							timeIntervals={15}
							timeCaption="Time"
							dateFormat="h:mm aa"
							placeholderText="Time"
						/>
					</div>
				</div>
				<div className="md:w-1/2 w-full mb-[30px] px-[15px]">
					<div className="relative flex gap-1 items-center w-full border-b border-white date-picker-inp">
						<div className="w-[35px] h-[50px] leading-10">
							<i className="flaticon-calendar-date text-white text-2xl align-middle inline-flex"></i>
						</div>
	  					<DatePicker 
							selected={startDate} 
							onChange={handleChange} 
							placeholderText="Date" 
							// customInput={<ExampleCustomInput />}
						/>
						
					</div>
				</div>
				<div className="w-full px-[15px]">
					<button type="submit" name="submit" value="submit" className="md:py-[15px] z-0 py-[10px] md:px-[30px] px-5 mt-4 font-medium md:text-base text-sm leading-2xl overflow-hidden  bg-primary text-white rounded-[6px] relative inline-flex items-center justify-start duration-500 focus:ring-0 btn-hover-1">
						<span>Book a Table</span>
					</button>
				</div>
            </div>
          </form>
        </div>
       <div className="lg:w-1/3 w-full px-[15px]">
			<div className="widget widget_getintuch sm:p-[30px] p-[15px] lg:mb-0 mb-[30px] bg-primary rounded-[10px]">
				<div className="head mb-10">
					<h5 className="title text-white text-2xl mb-2">Contact Info</h5>
					<p className="text-white opacity-75 text-[15px]">Lorem Ipsum is simply dummy text of the printing typesetting industry.</p>
				</div>
				<ul>
					<li>
						<i className="flaticon-placeholder text-[var(--secondary)]" />
						<p className="sm:text-base text-[15px] sm:tracking-[0.02em] tracking-[0] text-white">1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad</p>
					</li>
					<li>
						<i className="flaticon-telephone text-[var(--secondary)]" />
						<p className="sm:text-base text-[15px] sm:tracking-[0.02em] tracking-[0] text-white">+91 987-654-3210<br/> +91 123-456-7890</p>
					</li>
					<li className="mb-0">
						<i className="flaticon-email-1 text-[var(--secondary)]" />
						<p className="sm:text-base text-[15px] sm:tracking-[0.02em] tracking-[0] text-white">info@example.com<br/> info@example.com</p>
					</li>
				</ul>
			</div>
		</div>
      </div>
    </div>
  );
};

export default Home3BookTable;
