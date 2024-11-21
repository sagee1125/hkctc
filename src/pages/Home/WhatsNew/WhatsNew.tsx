import { Icon } from "@iconify/react";
import React from "react";

type WhatsNewData = {
    title: string;
    date: string;
    imagePath: string;
    onClick: () => void;
};

export const WhatsNew: React.FC = () => {
    const whatsNewData: WhatsNewData[] = [
        {
            title: "Trade show open for application",
            date: "28 Aug 2024",
            imagePath: "Trade_Show.png",
            onClick: () => { }
        },
        {
            title: "Mid-Autumn Festival brings family reunion and joy",
            date: "28 Aug 2024",
            imagePath: "Mid_Autumn.png",
            onClick: () => { }
        },
        {
            title: "The Testing And Certification Industry Has Always Played An...",
            date: "28 Aug 2024",
            imagePath: "Testing.png",
            onClick: () => { }
        },
        {
            title: "Belt and Road Summit Forum",
            date: "28 Aug 2024",
            imagePath: "Belt.png",
            onClick: () => { }
        }

    ]
    return (
        <div className="w-full pt-8">
            <div className="flex flex-row items-center gap-4 px-4">
                <Icon icon="material-symbols-light:square" style={{ height: '24px', width: '24px', }} />
                <p className="text-heading-l">What's New</p>
                <Icon icon="teenyicons:right-outline" style={{ height: '24px', width: '24px', strokeWidth: '2px' }} />
            </div>
            <div className="px-2 py-6">
                <div className='grid w-full gap-2'
                    style={{
                        gridTemplateColumns: `repeat(${whatsNewData.length}, minmax(0, 1fr))`,
                    }}>
                    {whatsNewData.map((item, index) => {
                        const { title, imagePath, date } = item;
                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div className="flex justify-center items-center w-fit overflow-hidden">
                                    <img
                                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/assets/whatsNew/" +
                                            imagePath
                                        }
                                        alt={title}
                                    />
                                </div>
                                <div className="text-heading-s text-left w-full mt-4 px-2">
                                    {title}
                                </div>
                                <div className="flex flex-row w-full px-2 mt-4 gap-2">
                                    <Icon icon="material-symbols:date-range-rounded" />
                                    <h2 className="text-body-m text-grey">{date}</h2>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
