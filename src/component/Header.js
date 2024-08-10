import React from 'react';
import icons from '../utils/Icons';
import logo from '../assets/img/Logo.svg';
import { Menu } from '../utils/Menu';
const { IoIosArrowDown, CiUser, PiShoppingCartSimpleLight, VscHeart } = icons;

const Header = () => {
    return (
        <div className="w-[1920px] h-[176px] bg-customWhite ">
            <div className="border-b h-[40px] pt-[14px] ">
                <div className="ml-[255px] mr-[255px] flex items-center font-medium text-13px font-bai ">
                    <span className="flex flex-1">
                        <span>You are a student and students get 20% discount. </span>
                        <span className="font-semibold underline">Learn More</span>
                    </span>
                    <div className="flex gap-[20px] mr-[20px]">
                        <span>Store Locator</span>
                        <span>Order Tracking</span>
                        <span>FAQs</span>
                    </div>
                    <div className="border h-[14px] border-customBlack"></div>
                    <div className="ml-[20px] flex  gap-[20px]">
                        <span className="flex items-center gap-1">
                            <span>English</span>
                            <IoIosArrowDown size={12} />
                        </span>
                        <span className="flex items-center gap-1">
                            <span>USD</span>
                            <IoIosArrowDown size={12} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="border-b h-[66px]">
                <div className="ml-[255px] mr-[255px] flex items-center font-medium text-13px font-bai mt-[20px]  ">
                    <div>
                        <img src={logo} alt="avatar" />
                    </div>
                    <div className="flex flex-auto border-2 py-[14px] pl-[25px] items-center rounded-5px w-[782px] h-[45px] ml-[129px]">
                        <span className="text-sm font-semibold mr-[26px]">All Categories</span>
                        <span>
                            <IoIosArrowDown size={12} />
                        </span>
                        <div className="border h-[15px] border-customBlack ml-[22px] mr-[25px]"></div>
                        <input
                            className="flex-1 font-normal outline-none"
                            type="text"
                            placeholder="Search in 200+ products..."
                        />
                        <button className="text-sm w-[110px] h-[45px] rounded-tr-5px rounded-br-5px font-semibold text-customWhite bg-customBlue">
                            Search
                        </button>
                    </div>
                    <div className="ml-[80px] flex items-center">
                        <span className="flex items-center gap-1">
                            <span>
                                <CiUser size={23} />
                            </span>
                            <span className="flex flex-col">
                                <span className="text-11px text-customText">Login</span>
                                <span className="text-sm font-semibold">Account</span>
                            </span>
                        </span>
                        <span className="ml-[24px]">
                            <VscHeart className="w-[28px] h-[23px] relative " />
                        </span>
                        <span className="bg-red-700 rounded-full w-[18px] h-[18px] absolute  text-customWhite text-10px flex items-center justify-center right-[-10px] top-[66px] ">
                            2
                        </span>
                        <span className="flex items-center gap-4 ">
                            <span className="ml-[27px] relative">
                                <PiShoppingCartSimpleLight className="w-[28px] h-[23px]" />
                            </span>
                            <span className="bg-red-700 rounded-full w-[18px] h-[18px] absolute  text-customWhite text-10px flex items-center justify-center right-[-62px] top-[66px] ">
                                2
                            </span>
                            <span className="flex flex-col">
                                <span className="text-11px text-customText">your cart</span>
                                <span className="text-sm font-semibold">$280.00</span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex ">
                <div className="ml-[255px] mr-[255px] flex font-bai gap-[30px] my-[16px] flex-auto ">
                    {Menu.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-5px ${
                                index === Menu.length - 1 ? 'text-customTextActive' : 'text-customText1'
                            }`}
                        >
                            <span className="text-sm font-semibold leading-none">{item.title}</span>
                            {item.icon && <span className="font-normal ">{item.icon}</span>}
                        </div>
                    ))}
                </div>
                <div className="flex items-center ml-[255px] mr-[255px] font-bai my-[16px]">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.08737 14.2867L1.48898 12.6883C0.837006 12.0363 0.837006 10.9637 1.48898 10.3117L3.08737 8.71331C3.36078 8.4399 3.58161 7.90359 3.58161 7.52502V5.26411C3.58161 4.33872 4.33875 3.58161 5.26414 3.58161H7.52502C7.90359 3.58161 8.4399 3.36081 8.71331 3.0874L10.3117 1.48898C10.9637 0.837006 12.0363 0.837006 12.6883 1.48898L14.2867 3.0874C14.5601 3.36081 15.0964 3.58161 15.4749 3.58161H17.7359C18.6612 3.58161 19.4184 4.33872 19.4184 5.26411V7.52502C19.4184 7.90359 19.6392 8.4399 19.9126 8.71331L21.511 10.3117C22.163 10.9637 22.163 12.0363 21.511 12.6883L19.9126 14.2867C19.6392 14.5601 19.4184 15.0964 19.4184 15.475V17.7358C19.4184 18.6612 18.6612 19.4184 17.7359 19.4184H15.4749C15.0964 19.4184 14.5601 19.6392 14.2867 19.9126L12.6883 21.511C12.0363 22.163 10.9637 22.163 10.3117 21.511L8.71331 19.9126C8.4399 19.6392 7.90359 19.4184 7.52502 19.4184H5.26414C4.33875 19.4184 3.58161 18.6612 3.58161 17.7358V15.475C3.58161 15.0859 3.36078 14.5496 3.08737 14.2867Z"
                            fill="#DC323C"
                        />
                        <path
                            d="M3.08737 14.2867L1.48898 12.6883C0.837006 12.0363 0.837006 10.9637 1.48898 10.3117L3.08737 8.71331C3.36078 8.4399 3.58161 7.90359 3.58161 7.52503V5.26411C3.58161 4.33872 4.33875 3.58161 5.26414 3.58161H7.52502C7.90359 3.58161 8.4399 3.36081 8.71331 3.0874L10.3117 1.48898C10.9637 0.837006 12.0363 0.837006 12.6883 1.48898L14.2867 3.0874C14.5601 3.36081 15.0964 3.58161 15.4749 3.58161H17.7359C18.6612 3.58161 19.4184 4.33872 19.4184 5.26411V7.52503C19.4184 7.90359 19.6392 8.4399 19.9126 8.71331L21.511 10.3117C22.163 10.9637 22.163 12.0363 21.511 12.6883L19.9126 14.2867C19.6392 14.5601 19.4184 15.0964 19.4184 15.475V17.7358C19.4184 18.6612 18.6612 19.4184 17.7359 19.4184H15.4749C15.0964 19.4184 14.5601 19.6392 14.2867 19.9126L12.6883 21.5111C12.0363 22.163 10.9637 22.163 10.3117 21.5111L8.71331 19.9126C8.4399 19.6392 7.90359 19.4184 7.52502 19.4184H5.26414C4.33875 19.4184 3.58161 18.6612 3.58161 17.7358V15.475C3.58161 15.0859 3.36078 14.5496 3.08737 14.2867Z"
                            stroke="#DC323C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M8 15.0909L15.0909 8"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M14.4936 14.5H14.5042"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M8.58442 8.59091H8.59503"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <span className="text-sm font-semibold ml-[9px0] ">Sale $20 Off Your First Order.</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
