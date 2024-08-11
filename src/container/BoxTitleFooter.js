import React from 'react';

export const BoxTitleFooter = ({ styleBox, title, listNotification = [], styleText = {} }) => {
    return (
        <div className={styleBox}>
            <h2 className="text-sm font-bold uppercase mb-[12px]">{title}</h2>
            <ul className="flex flex-col text-sm font-medium text-customText">
                {listNotification?.map((notification) => {
                    return (
                        <ul>
                            <li className={`my-2 ${styleText} `}>{notification?.text}</li>
                            {notification?.text3 && (
                                <li className={`mt-2 ${styleText} text-30px text-customTextBlue mb-[20px]`}>
                                    {notification?.text3}
                                </li>
                            )}
                            <li className={`my-2 ${styleText} `}>{notification?.text1}</li>
                            <li className={`my-2 ${styleText} `}>{notification?.text2}</li>
                            {notification?.text4 && (
                                <li className={`my-2 ${styleText} underline font-semibold`}>{notification?.text4}</li>
                            )}
                        </ul>
                    );
                })}
            </ul>
        </div>
    );
};
