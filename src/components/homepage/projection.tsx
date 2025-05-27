"use client"

import Image from "next/image";
import React, {useEffect, useState} from "react";
import {fetchPlayerShotsOnTarget} from "@/services/api/playeronTarget";
import {PlayerPropItem} from "@/services/api/constant/type";
import {PlayerCardSlider} from "@/components/playercard";

export const Projection = () => {
    const [shotsData, setShotsData] = useState<PlayerPropItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetchPlayerShotsOnTarget(30);
                console.log(response);
                setShotsData(response.props);
                setIsLoading(false);
            } catch (err) {
                setError("Failed to load data. Please try again later.");
                setIsLoading(false);
            }
        }

        loadData();
    }, []);

    return (
        <>
            <section className={'relative flex flex-col gap-10 '}>
                <div className={'bg-custom-pattern bg-bottom -mt-16 py-20'}>
                    <div className={'flex flex-col gap-y-4 w-10/12 mx-auto  '}>
                        <h1 className={'text-[#D2D4D7] uppercase font-[900] text-[50px] xl:text-[70px] font-anek leading-[2.5rem] md:leading-[2rem] xl:leading-[3rem]'}>Numerours <br/> pLAYER <span
                            className={'text-secondary lowercase font-gloria'}>projections</span></h1>
                        <p className={'text-[#D2D4D7] font-[500] text-sm xl:text-lg'}>Available player stats categories
                            for you to pick
                            from:<br/> Shots, goals, assists, saves, passes, and more.</p>
                    </div>
                    <Image
                        src={'/assets/svg/benefits/purple_flower.svg'}
                        alt={'steps '}
                        className={'absolute -top-[12%] left-[10%] z-[99]'}
                        width={60}
                        height={60}
                    />
                </div>


                {
                    isLoading ? <div className="text-center py-4 text-white">Loading player data...</div> :
                        <div className={'flex flex-col gap-y-4 py-10'}>

                            <PlayerCardSlider data={shotsData} direction={"left"} error={error}/>
                            <PlayerCardSlider data={shotsData} direction={"right"} error={error}/>
                            <PlayerCardSlider data={shotsData} direction={"left"} error={error}/>
                            <PlayerCardSlider data={shotsData} direction={"right"} error={error}/>

                        </div>
                }

            </section>

        </>
    );
};
