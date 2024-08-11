import React from 'react';
import Sileder from '../container/Sileder';
import Img7 from '../assets/img/img (7).png';
import ImgIcon from '../assets/img/gift.png';
import icons from '../utils/Icons';
import { MenuInfo } from '../utils/Menu';
const { MdOutlineStar } = icons;
const Body = () => {
    return (
        <div className="w-[1920px] bg-customBgBody flex flex-col gap-60px pb-[60px]">
            <div className="h-[614px]">
                <Sileder />
            </div>
            <div className="mx-[255px] font-bai flex gap-5px">
                <div className="w-[33.3333%] flex flex-wrap gap-5px ">
                    {MenuInfo.filter((item) => item.id < 5)?.map((item, index) => (
                        <div key={index} className="w-[230px] h-[373px] bg-customWhite relative rounded-5px">
                            {item.id === 1 && (
                                <span className=" w-[55px] h-[25px] flex items-center justify-center absolute text-xs font-semibold bg-customTextActive text-customWhite top-[20px] left-[20px]">
                                    {item.f}
                                </span>
                            )}
                            {item.id === 4 && (
                                <span className=" w-[55px] h-[25px] flex items-center justify-center absolute text-xs font-semibold bg-customTextGreen text-customWhite top-[20px] left-[20px]">
                                    {item.f}
                                </span>
                            )}
                            <img src={item.img} alt="img" className="object-cover m-[20px]" />
                            <div className="mx-[20px]">
                                <span className="text-sm font-semibold">{item.title1}</span>
                                <br />
                                <span className="text-sm font-semibold">{item.title2}</span>
                                <span className="flex text-customStart mt-[16px] items-center">
                                    <span>{item.icon1}</span>
                                    <span>{item.icon1}</span>
                                    <span>{item.icon1}</span>
                                    <span>{item.icon1}</span>
                                    <span>{item.icon1}</span>
                                    <span className="text-xs font-medium text-customText4 ml-[2px]">{item.title3}</span>
                                </span>
                                <div className="mt-[6px]">
                                    <span
                                        className={`font-semibold text-18px ${
                                            item.id === 1 || item.id === 3
                                                ? 'text-customTextActive'
                                                : 'text-customTextBlue'
                                        }`}
                                    >
                                        {item.money1}
                                    </span>
                                    <span className="text-sm font-normal text-customText4 ml-[2px] line-through">
                                        {item.money2}
                                    </span>
                                </div>
                                <div className="flex items-center mt-[10px] ">
                                    <span
                                        className={`${
                                            item.id === 1 || item.id === 3
                                                ? 'text-customTextGreen'
                                                : 'text-customTextActive'
                                        }`}
                                    >
                                        {item.icon2}
                                    </span>
                                    <span className="text-xs font-medium mx-[4px] text-customTextGreen">
                                        {item.p1}{' '}
                                    </span>
                                    <span className="text-xs font-medium">{item.p2}</span>
                                    <span className="text-xs font-medium text-customTextActive">{item.p}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-[33.3333%] bg-customWhite rounded-5px border-2px border-customTextActive">
                    <div className="mx-[40px] mt-[35px] border-b-2 h-[31px] border-customBlack relative ">
                        <span className="text-base font-bold text-customText1">Today’s Offer</span>
                        <div className="">
                            <img src={ImgIcon} alt="img" className="absolute object-cover right-[0px]" />

                            <img src={Img7} alt="img" className="mt-[31px] object-cover" />
                            <span className=" w-[55px] h-[25px] flex items-center justify-center absolute text-xs font-semibold bg-customTextActive text-customWhite top-[60px]">
                                -20%
                            </span>
                        </div>
                        <div className="mt-[15px] ">
                            <span className="text-sm font-semibold ">
                                Apple iPhone 13 Pro Max 128GB Gold Fully Unlocked
                            </span>
                            <span className="flex text-customStart mt-[16px] mb-[6px] items-center">
                                <span>
                                    <MdOutlineStar size={12} />
                                </span>
                                <span>
                                    <MdOutlineStar size={12} />
                                </span>
                                <span>
                                    <MdOutlineStar size={12} />
                                </span>
                                <span>
                                    <MdOutlineStar size={12} />
                                </span>
                                <span>
                                    <MdOutlineStar size={12} />
                                </span>
                                <span className="text-xs font-medium text-customText4 ml-[2px]">29 reviews</span>
                            </span>
                            <span>
                                <span className="font-semibold text-18px text-customTextActive mt-[6px]">$128.00</span>
                                <span className="text-sm font-normal text-customText4 ml-[2px] line-through">
                                    $12.00
                                </span>
                            </span>
                            <div className="flex flex-col mt-[18px] mb-[20px]">
                                <span className="text-sm font-medium text-customText ">Hurry up! Offer ends in:</span>
                                <span className="mt-[11px] flex items-center gap-10px font-semibold text-20px w-[45px] h-[50px] ">
                                    <span className="text-customWhite bg-customTextActive px-[10px] py-[15px] text-sm font-bold rounded-3px">
                                        826
                                    </span>
                                    :
                                    <span className="text-customWhite bg-customTextActive px-[14.3px] py-[15px] text-sm font-bold rounded-3px">
                                        29
                                    </span>
                                    :
                                    <span className="text-customWhite bg-customTextActive px-[14.2px] py-[15px] text-sm font-bold rounded-3px">
                                        20
                                    </span>
                                    :
                                    <span className="text-customWhite bg-customTextActive px-[13.6px] py-[15px] text-sm font-bold rounded-3px">
                                        08
                                    </span>
                                </span>
                            </div>
                            <div className="text-xs font-medium pt-[4px] relative">
                                <span className="absolute border-0 bg-customBgBorder w-[386px] h-[6px] top-[-5px] rounded-10px "></span>
                                <span className="w-[330px]  h-[6px] z-10 bg-customTextActive border-0 absolute top-[-5px] rounded-tl-10px rounded-bl-10px"></span>
                                Sold:<span className="font-semibold"> 620/896 </span>products
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[33.3333%] flex flex-wrap gap-5px">
                    {MenuInfo.filter((item) => item.id > 5)?.map((item, index) => (
                        <div key={index} className="w-[230px] h-[373px] bg-customWhite relative rounded-5px">
                            {item.id === 7 || item.id === 8 ? (
                                <span className=" w-[55px] h-[25px] flex items-center justify-center absolute text-xs font-semibold bg-customTextActive text-customWhite top-[20px] left-[20px]">
                                    {item.f}
                                </span>
                            ) : (
                                ''
                            )}
                            <img src={item.img} alt="img" className="object-cover m-[20px] " />
                            <div className="mx-[20px]">
                                <span className="text-sm font-semibold">{item.title1}</span>
                                <br />
                                <span className="text-sm font-semibold">{item.title2}</span>
                                <span className="flex text-customStart mt-[16px] items-center">
                                    <span>{item.icon1}</span>
                                    <span>{item.icon1}</span>
                                    <span>{item.icon1}</span>
                                    <span>{item.icon1}</span>
                                    <span>{item.icon1}</span>
                                    <span className="text-xs font-medium text-customText4 ml-[2px]">{item.title3}</span>
                                </span>
                                <div className="mt-[6px]">
                                    <span
                                        className={`font-semibold text-18px ${
                                            item.id === 7 || item.id === 8
                                                ? 'text-customTextActive'
                                                : 'text-customTextBlue'
                                        }`}
                                    >
                                        {item.money1}
                                    </span>
                                    <span className="text-sm font-normal text-customText4 ml-[2px] line-through">
                                        {item.money2}
                                    </span>
                                </div>
                                <div className="flex items-center mt-[10px] ">
                                    <span
                                        className={`${
                                            item.id === 1 || item.id === 3
                                                ? 'text-customTextGreen'
                                                : 'text-customTextActive'
                                        }`}
                                    >
                                        {item.icon2}
                                    </span>
                                    <span className="text-xs font-medium mx-[4px] text-customTextGreen">
                                        {item.p1}{' '}
                                    </span>
                                    <span className="text-xs font-medium text-customText">{item.p2}</span>
                                    <span className="text-xs font-medium text-customTextActive">{item.p}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body;
