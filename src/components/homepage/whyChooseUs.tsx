import Image from "next/image";

export const WhyChooseUs = () => {
    return (
        <>
            <section
                className={'relative  bg-no-repeat w-full  bg-contain min-h-[100rem] lg:min-h-[100%] h-full flex flex-col justify-center lg:h-full  py-10'}>
                <Image
                    src={'/assets/svg/background_line.svg'}
                    alt={'background_line '}
                    className={'!relative w-full'}
                    fill
                />
                <div
                    className={'flex flex-col py-24  lg:py-0 gap-y-14 lg:gap-y-28 items-center justify-center absolute top-0 h-full'}>
                    <div>
                        <h1 className={' font-anek uppercase text-center text-[30px] sm:text-[50px] xl:text-[70px] font-[900] tracking-tighter leading-[1] xl:leading-tight'}>
                            Why the street <span className={'text-secondary font-gloria'}>F**K</span> <br/> with Squads
                        </h1>
                        <p className={'text-white text-center font-[500] text-xs sm:text-sm xl:text-lg'}>Enjoy the swift
                            and sweet benefits squads have for you.
                            We<br/> are here for you 100% any day anytime!</p>

                    </div>
                    <div className={'grid grid-cols-1 lg:grid-cols-4 w-10/12 md:w-9/12 2xl:w-6/12 mx-auto'}>
                        <div
                            className={'flex flex-col mx-auto w-10/12 sm:w-1/2 lg:w-full h-[20rem] lg:h-auto items-center relative justify-center gap-y-8 bg-numerous-gradient rounded-2xl py-4 xl:py-6 px-5 transform lg:-rotate-3 rotate-12'}>
                            <Image
                                src={'/assets/svg/benefits/numerousO.svg'}
                                alt={'numerousO '}
                                width={100}
                                height={100}
                            />
                            <div>
                                <p className={'text-secondary font-[700] text-sm xl:text-lg'}>Numerous Options</p>
                                <p className={'text-[10px] xl:text-xs font-[500] text-white'}>Bet Your Way with Endless
                                    Options! No matter your
                                    game, we’ve got the odds, the excitement, and the
                                    options just for you! </p>

                            </div>
                            <Image
                                src={'/assets/svg/benefits/abstractItem.svg'}
                                alt={'abstractItem '}
                                className={'absolute -left-5 -top-5 z-50 pt-5'}
                                width={30}
                                height={30}
                            />
                        </div>
                        <div
                            className={'lg:-ml-1 flex flex-col mx-auto w-10/12 sm:w-1/2 lg:w-full h-[20rem] lg:h-auto items-center justify-center gap-y-8 bg-instant-gradient rounded-2xl py-4 xl:py-6 px-3 transform lg:rotate-6 rotate-1'}>
                            <Image
                                src={'/assets/svg/benefits/instantC.svg'}
                                alt={'instantC '}
                                width={100}
                                height={100}
                            />
                            <div>
                                <p className={'text-secondary font-[700] text-sm xl:text-lg'}>Instant Cashout</p>
                                <p className={'text-[10px] xl:text-xs font-[500] text-white'}>Say goodbye to waiting!
                                    With Squads, you can cash
                                    out
                                    your funds instantly—any time, any day. Whether it&#34;s a weekend or midnight, your
                                    money is just a tap
                                    away. 🚀 </p>

                            </div>
                        </div>
                        <div
                            className={'-mt-8 lg:mt-0 lg:-ml-3 flex flex-col mx-auto w-10/12 sm:w-1/2 lg:w-full h-[20rem] lg:h-auto items-center justify-center border border-black z-10 gap-y-8 bg-white rounded-2xl py-4 xl:py-6 px-3 translate-y-[50px] transform rotate-[10deg]'}>
                            <Image
                                src={'/assets/svg/benefits/fastDeposit.svg'}
                                alt={'fastD '}
                                width={100}
                                height={100}
                            />
                            <div>
                                <p className={'text-black font-[700] text-sm xl:text-lg'}>Fast Deposit</p>
                                <p className={'text-[10px] xl:text-xs font-[300] text-black'}>Don’t let slow
                                    transactions hold you back. With Squads,
                                    you can deposit funds instantly and stay in the game. Your winning streak starts
                                    here! 🚀 </p>

                            </div>
                        </div>
                        <div
                            className={'lg:-ml-4 flex flex-col mx-auto w-10/12 sm:w-1/2 lg:w-full h-[20rem] lg:h-auto items-center justify-center gap-y-8 bg-bonus-gradient rounded-2xl py-4 xl:py-6 px-3 translate-y-[35px] transform -rotate-6'}>
                            <Image
                                src={'/assets/svg/benefits/bonusR.svg'}
                                alt={'bonusR '}
                                width={100}
                                height={100}
                            />
                            <div>
                                <p className={'text-black font-[700]  text-sm xl:text-lg'}>Bonuses & Rewards</p>
                                <p className={'text-[10px] xl:text-xs font-[300] text-black'}>No dey hide updates!!!!
                                    Invite your friends and family
                                    to
                                    join squads and get paid <span className={'font-[700]'}>N1000</span> when they use
                                    your referral
                                    link</p>

                            </div>
                            <Image
                                src={'/assets/svg/benefits/abstractItem2.svg'}
                                alt={'abstractItem '}
                                className={'absolute -right-4 bottom-5 z-50 pt-5'}
                                width={30}
                                height={30}
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
