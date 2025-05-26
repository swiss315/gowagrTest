import React from 'react';
import Image from "next/image";

function Slider() {
    return (
        <div id="infinite" className="slider bg-lemonGreen">
            <div className="border-t border-b border-black bg-lemonGreen slider-container">
                <ul className="slider-track">
                    <li className="slider-item">
                        <div className={'font-[900] text-4xl text-black flex items-center gap-x-5 uppercase tracking-widest w-fit'}>
                            <span>
                                Dribble
                            </span>
                            <Image
                                src={'/assets/svg/dribble.svg'}
                                alt={'type'}
                                className={''}
                                width={30}
                                height={30}
                            />
                        </div>
                    </li>
                    <li className="slider-item">
                        <div className={'font-[900] text-4xl text-primary flex items-center gap-x-5 uppercase w-fit'}>
                            <span>
                                Shots
                            </span>
                            <Image
                                src={'/assets/svg/shot.svg'}
                                alt={'type'}
                                className={''}
                                width={30}
                                height={30}
                            />
                        </div></li>
                    <li className="slider-item">
                        <div className={'font-[900] text-4xl text-black flex items-center gap-x-5 uppercase w-fit'}>
                            <span>
                                Tackles
                            </span>
                            <Image
                                src={'/assets/svg/tackle.svg'}
                                alt={'type'}
                                className={''}
                                width={30}
                                height={30}
                            />
                        </div></li>
                    <li className="slider-item">
                        <div className={'font-[900] text-4xl text-black flex items-center gap-x-5 uppercase w-full'}>
                            <span className={'w-full whitespace-nowrap'}>
                                GOALIE-SAVES
                            </span>
                            <Image
                                src={'/assets/svg/goalie.svg'}
                                alt={'type'}
                                className={''}
                                width={30}
                                height={30}
                            />
                        </div></li>
                    <li className="slider-item">
                        <div className={'font-[900] text-4xl text-black flex items-center gap-x-5 uppercase w-fit'}>
                            <span>
                                Dribble
                            </span>
                            <Image
                                src={'/assets/svg/dribble.svg'}
                                alt={'type'}
                                className={''}
                                width={30}
                                height={30}
                            />
                        </div>
                    </li>
                    <li className="slider-item">
                        <div className={'font-[900] text-4xl text-black flex items-center gap-x-5 uppercase w-fit'}>
                            <span>
                                Shots
                            </span>
                            <Image
                                src={'/assets/svg/shot.svg'}
                                alt={'type'}
                                className={''}
                                width={30}
                                height={30}
                            />
                        </div>
                    </li>
                    <li className="slider-item">
                        <div className={'font-[900] text-4xl text-black flex items-center gap-x-5 uppercase w-fit'}>
                            <span>
                                Tackles
                            </span>
                            <Image
                                src={'/assets/svg/tackle.svg'}
                                alt={'type'}
                                className={''}
                                width={30}
                                height={30}
                            />
                        </div>
                    </li>
                    <li className="slider-item">
                        <div className={'font-[900] text-4xl text-black flex items-center gap-x-5 uppercase w-full'}>
                            <span className={'w-full whitespace-nowrap'}>
                                GOALIE-SAVES
                            </span>
                            <Image
                                src={'/assets/svg/goalie.svg'}
                                alt={'type'}
                                className={''}
                                width={30}
                                height={30}
                            />
                        </div>
                    </li>
                    <li className="slider-item">
                        <div className={'font-[900] text-4xl text-black flex items-center gap-x-5 uppercase w-fit'}>
                            <span>
                                Dribble
                            </span>
                            <Image
                                src={'/assets/svg/dribble.svg'}
                                alt={'type'}
                                className={''}
                                width={30}
                                height={30}
                            />
                        </div>
                    </li>
                    <li className="slider-item">
                        <div className={'font-[900] text-4xl text-black flex items-center gap-x-5 uppercase w-fit'}>
                            <span>
                                Shots
                            </span>
                            <Image
                                src={'/assets/svg/shot.svg'}
                                alt={'type'}
                                className={''}
                                width={30}
                                height={30}
                            />
                        </div>
                    </li>
                    <li className="slider-item">
                        <div className={'font-[900] text-4xl text-black flex items-center gap-x-5 uppercase w-fit'}>
                            <span>
                                Tackles
                            </span>
                            <Image
                                src={'/assets/svg/tackle.svg'}
                                alt={'type'}
                                className={''}
                                width={30}
                                height={30}
                            />
                        </div>
                    </li>
                    <li className="slider-item">
                        <div className={'font-[900] text-4xl text-black flex items-center gap-x-5 uppercase w-full'}>
                            <span className={'w-full whitespace-nowrap'}>
                                GOALIE-SAVES
                            </span>
                            <Image
                                src={'/assets/svg/goalie.svg'}
                                alt={'type'}
                                className={''}
                                width={30}
                                height={30}
                            />
                        </div>
                    </li>
                    <li className="slider-item">
                        <div className={'font-[900] text-4xl text-black flex items-center gap-x-5 uppercase w-fit'}>
                            <span>
                                Dribble
                            </span>
                            <Image
                                src={'/assets/svg/dribble.svg'}
                                alt={'type'}
                                className={''}
                                width={30}
                                height={30}
                            />
                        </div>
                    </li>
                    <li className="slider-item">
                        <div className={'font-[900] text-4xl text-black flex items-center gap-x-5 uppercase w-fit'}>
                            <span>
                                Shots
                            </span>
                            <Image
                                src={'/assets/svg/shot.svg'}
                                alt={'type'}
                                className={''}
                                width={30}
                                height={30}
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Slider
