import { Icon } from "@iconify/react";
import React from "react";

type ResourcesData = {
    title: string;
    icon: string;
    number: number;
    sideColor: string;
    bgImg: string;
    onClick: () => void;
};


export const Publications: React.FC = () => {
    const resourcesData: ResourcesData[] = [
        {
            title: 'Reports',
            icon: "lsicon:report-outline",
            number: 20,
            sideColor: '#D1E39B',
            bgImg: 'report.png',
            onClick: () => { },
        },
        {
            title: 'Reports',
            icon: "ic:outline-library-books",
            number: 26,
            sideColor: '#F15A31',
            bgImg: 'report.png',
            onClick: () => { },
        },
        {
            title: 'Reports',
            icon: "lsicon:report-outline",
            number: 20,
            sideColor: '#D9B6F6',
            bgImg: 'report.png',
            onClick: () => { },
        },
        {
            title: 'Reports',
            icon: "lsicon:report-outline",
            number: 20,
            sideColor: '#BBC9E7',
            bgImg: 'report.png',
            onClick: () => { },
        },
        {
            title: 'Reports',
            icon: "lsicon:report-outline",
            number: 20,
            sideColor: '#FFC786',
            bgImg: 'report.png',
            onClick: () => { },
        },
    ]
    return (
        <div className="w-full py-2 grid grid-cols-[2fr,1fr]">
            <div className="w-full">
                <div className="flex flex-row items-center gap-4 px-4">
                    <Icon icon="material-symbols-light:square" style={{ height: '24px', width: '24px', }} />
                    <p className="text-heading-l">Publications</p>
                    <Icon icon="teenyicons:right-outline" style={{ height: '24px', width: '24px', strokeWidth: '2px' }} />
                </div>
                <hr className="m-4" />
            </div>
            <div className="p-4 border-2 border-inherit flex flex-col gap-4">
                <div className="text-heading-l">Resources</div>
                {resourcesData.map((item, index) => {
                    const { number, title, icon, sideColor, bgImg } = item;
                    return (
                        <div key={index} className="flex flex-row justify-between items-center h-[60px]"
                            style={{
                                borderLeft: `10px solid ${sideColor}`,
                                opacity: 0.8,
                                backgroundImage: `url('/assets/publication/${bgImg}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}                        >
                            <div className="px-4">{`(${number})`}</div>
                            <div>{title}</div>
                            <Icon icon={icon}
                                style={{ height: '24px', width: '24px' }} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

