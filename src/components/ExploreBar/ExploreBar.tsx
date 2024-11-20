import { Icon } from "@iconify/react";
import React from "react";

type ExploreBarData = {
    iconName: string;
    title: string;
    onClick: () => void;
}
export const ExploreBar: React.FC = () => {

    const exploreBarData: ExploreBarData[] = [
        {
            title: 'General Public',
            iconName: "entypo:globe",
            onClick: () => { },
        },
        {
            title: 'Educators & Students',
            iconName: "fa-solid:book-reader",
            onClick: () => { },


        },
        {
            title: 'T&C Bodies & Practitioners',
            iconName: "majesticons:test-tube-filled",
            onClick: () => { },
        },
        {
            title: 'T&C Service Users',
            iconName: "mdi:user",
            onClick: () => { },
        },
    ]

    return (
        <nav>
            <div className="bg-primary h-[50px] flex flex-row px-9 items-center text-white">
                <p className="font-bold text-md">
                    Explore as
                </p>
                <div className="flex flex-row px-8 gap-8">
                    {exploreBarData.map((item, index) => {
                        const { iconName, title, onClick } = item;
                        return (
                            <div
                                key={index}
                                className="flex flex-row items-center gap-1 cursor-pointer text-sm"
                                onClick={onClick}>
                                <Icon icon={iconName} width={20} height={20} />
                                <p>{title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
};
