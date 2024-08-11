import React from 'react';
import { BoxTitleFooter } from '../container/BoxTitleFooter';
import I1 from '../assets/img/1 (1).png';
import I2 from '../assets/img/2.png';
import I3 from '../assets/img/3.png';
import I4 from '../assets/img/4.png';
import I5 from '../assets/img/5.png';
import I6 from '../assets/img/6.png';
import I7 from '../assets/img/7.png';

const Footer = () => {
    const listNotificationAbout = [
        {
            text: 'Got Question? Call us 24/7',
        },
        {
            text3: '+222-1800-2628',
            styleText: '',
        },
        {
            text: '268 St, South New York/NY 98944, United States',
            text1: 'Customersupport@example.com',
            text2: 'Info@example.com,',
        },
    ];
    const listNotificationNotification = [
        {
            text: 'Blog Us',
        },
        {
            text4: 'About Us',
        },
        {
            text: 'Delivery Information',
        },
        {
            text: 'Delivery Information',
        },
        {
            text: 'Privacy Policy',
        },
        {
            text: 'FeedBack',
        },
    ];
    const listNotificationQuick = [
        {
            text: 'Store Location',
        },
        {
            text: 'Orders Tracking',
        },
        {
            text: 'FAQs',
        },
    ];
    return (
        <div className="w-[1920px]">
            <div className="w-[1410px] mx-[255px] font-bai">
                <div className="flex flex-row flex-auto ">
                    <div className="w-[33.3333%]">
                        <BoxTitleFooter
                            styleBox=" pr-5 py-10"
                            title="About The Store"
                            listNotification={listNotificationAbout}
                        />
                    </div>
                    <div className="flex w-[33.3333%]">
                        <BoxTitleFooter
                            styleBox="w-[50%] px-5 py-10"
                            title="Infomation"
                            listNotification={listNotificationNotification}
                        />
                        <BoxTitleFooter
                            styleBox="w-[50%] px-5 py-10"
                            title="Quick Links"
                            listNotification={listNotificationQuick}
                        />
                    </div>
                    <div className=" pl-5 py-10 w-[33.3333%]">
                        <h2 className="text-sm font-bold uppercase mb-[22px] ">Sign up to Newsletter</h2>
                        <span className="flex flex-col w-full gap-1 text-sm font-medium ">
                            <span>Join 20.000+ subscribers and get a nepxw discount coupon on every</span>
                            <span> Saturday. Updates information on Sales and Offers.</span>
                        </span>
                        <div className="mt-[24px] flex gap-10px mb-[16px]">
                            <input
                                type="text"
                                placeholder="Your email address..."
                                className="w-[300px] h-[50px] border rounded-50px pl-[20px] outline-none font-medium text-13px"
                            />
                            <button className="text-xs font-bold text-customWhite bg-customBlue w-[140px] h-[50px] rounded-30px">
                                Subscribe
                            </button>
                        </div>
                        <span className="text-sm font-medium text-customText ">
                            Subscribe for Uminex and get 20% off your first purchase.
                        </span>
                    </div>
                </div>
            </div>
            <div className=" mt-[20px] py-[42px] border-t flex font-bai text-customText ">
                <span className="ml-[255px] font-medium text-sm flex-1">
                    Copyright ©<span className="text-customTextBlue">Uminex</span>all rights reserved. Powered by
                    <span className="text-customTextBlue"> Blueskytechco.</span>
                </span>
                <span className="mx-[255px] font-medium text-sm flex items-center gap-20px">
                    <span>Payment Method:</span>
                    <div className="flex gap-5px">
                        <img className="w-[51px] h-[30px] " src={I1} alt="img" />
                        <img className="w-[51px] h-[30px]" src={I2} alt="img" />
                        <img className="w-[51px] h-[30px]" src={I3} alt="img" />
                        <img className="w-[51px] h-[30px]" src={I4} alt="img" />
                        <img className="w-[51px] h-[30px]" src={I5} alt="img" />
                        <img className="w-[51px] h-[30px]" src={I6} alt="img" />
                        <img className="w-[51px] h-[30px]" src={I7} alt="img" />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Footer;
