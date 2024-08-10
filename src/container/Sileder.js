import React from 'react';
import img from '../assets/img/img.png';
import icons from '../utils/Icons';
import { MenuImg } from '../utils/Menu';
const { IoIosArrowBack, IoIosArrowForward } = icons;
const Sileder = () => {
    return (
        <div className="flex flex-col gap-5px">
            <div className="mx-[255px] relative font-bai ">
                <img className=" w-full pt-[30px] h-[409px]" src={img} alt="img" />
                <div className=" mt-[30px] absolute top-0 bottom-0 left-0 right-0 flex flex-col">
                    <div className="flex items-center flex-auto">
                        <button className="ml-[30px] font-normal text-customWhite bg-customBgbutton h-[50px] w-[50px] rounded-full flex items-center justify-center">
                            <IoIosArrowBack size={18} />
                        </button>
                        <div className="flex flex-col gap-20px ml-[101px] flex-auto">
                            <span className="text-xs font-bold text-customText2">Gamepad console</span>
                            <span className=" text-46px text-customWhite">
                                <span className="">Today’s Offer</span>
                                <br></br>
                                Skin<span className="text-customText3"> Gamepad </span>2022
                            </span>
                            <button className="text-xs font-bold text-customText1 bg-customWhite p-[10px] rounded-30px h-[45px] w-[152px]">
                                Shop Now
                            </button>
                        </div>
                        <button className=" mr-[30px] font-normal h-[50px] w-[50px] rounded-full flex items-center justify-center text-customText1 bg-customWhite">
                            <IoIosArrowForward size={18} />
                        </button>
                    </div>
                    <div className="flex justify-center gap-5px pb-[20px]">
                        <span className="w-[6px] h-[6px] bg-customBgbutton rounded-full"></span>
                        <span className="w-[6px] h-[6px] bg-customBgbutton rounded-full"></span>
                        <span className="w-[6px] h-[6px] bg-customWhite rounded-full"></span>
                        <span className="w-[6px] h-[6px] bg-customBgbutton rounded-full"></span>
                        <span className="w-[6px] h-[6px] bg-customBgbutton rounded-full"></span>
                    </div>
                </div>
            </div>
            <div className="mx-[255px] relative font-bai flex gap-5px">
                {MenuImg.map((item, index) => (
                    <div className="relative">
                        <img key={index} src={item.img} alt="img" />
                        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col text-customText1 ml-[30px] mt-[35px] mb-[75px]">
                            <span className="font-semibold text-18px ">{item.title1}</span>

                            <span className="font-semibold text-18px ">{item.title2}</span>
                            <span className="text-sm font-medium mt-[26px]">{item.p}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sileder;
