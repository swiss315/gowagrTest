"use client"

import Image from "next/image";
import {ArrowDown, ArrowUp} from "lucide-react";
import {PlayerPropItem} from "@/services/api/constant/type";
import React from "react";

interface Props {
    direction: string;
    data: PlayerPropItem[];
}

export function PlayerCardSlider({direction, data}: Props) {
    if (!data || data.length === 0) {
        return <div className="text-center py-4 text-white">Loading player data...</div>;
    }

    // Format date function
    const formatGameDate = (dateString: string) => {
        const date = new Date(dateString);
        return `${date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short'
        })} ${date.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})}`;
    };


    const cards = data.map((item, index) => (
        <div key={index}
            className={'flex justify-between py-3.5 px-4 items-center w-[27rem] bg-[#262F3B] border border-[#2F3843] rounded-lg h-full'}>
            <div className={'flex gap-x-1 justify-center'}>
                <div>
                    <Image
                        src={item.player.imageUrl || '/assets/png/halland.png'}
                        alt={'halland '}
                        className={'!w-16 !relative !h-16 rounded-full'}
                        fill
                    />
                </div>
                <div className={'flex flex-col gap-y-1'}>
                    <h1 className={'text-white font-[600]'}>{item.player.name}</h1>
                    <p className={'text-[#8F949A] text-xs'}>{item.player.team.id === item.game.homeTeam.id
                        ? item.game.homeTeam.name
                        : item.game.awayTeam.name} - {item.player.position}
                    </p>
                    <p className={'text-[#D2D4D7] text-xs'}> vs. {item.player.team.id === item.game.homeTeam.id
                        ? item.game.awayTeam.name
                        : item.game.homeTeam.name}
                        on<br/> {formatGameDate(item.game.startDate)}
                    </p>
                </div>
            </div>
            <div className={'flex gap-x-2 items-center justify-center'}>
                <div
                    className={'bg-[#20262E] border-[#2F3843] h-full min-h-[8vh] py-2 px-3 text-center flex flex-col justify-center items-center border rounded-lg'}>
                    <p className={'text-white text-sm font-[600]'}>
                        {item.props[0]?.line || 0}
                    </p>
                    <p className={'text-[10px] text-center text-wrap'}>
                        Shots on<br/> Target
                    </p>

                </div>
                <div className={'flex flex-col gap-y-2'}>
                    <div className={'flex gap-x-2 h-full items-center bg-[#1F2935] py-2 px-3 rounded-md'}>
                    <span className={'text-white text-xs font-[600]'}>
                      More
                    </span>
                        <ArrowUp size={18} color="white"/>
                    </div>
                    <div className={'flex gap-x-2 h-full items-center bg-[#1F2935] py-2 px-3 rounded-md '}>
                    <span className={'text-white text-xs font-[600]'}>
                      Less
                    </span>
                        <ArrowDown size={18} color="white"/>
                    </div>
                </div>
            </div>

        </div>
    ));

    return (
        <div className="overflow-hidden relative w-full">
            <div className={`${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'} flex  gap-4`}>
                {cards.map((card, index) => (
                    <div key={index}>{card}</div>
                ))}

            </div>
        </div>
    );
}
