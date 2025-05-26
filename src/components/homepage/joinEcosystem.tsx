import Image from "next/image";

export const JoinEcosystem = () => {
    return (
        <>
            <section className={'w-full  relative  min-h-screen'}>
                <Image
                    src={'/assets/svg/joinecosystem/background_ecosystem.svg'}
                    alt={'background_ecosystem '}
                    className={'!relative w-full hidden lg:block h-[200rem] lg:!h-[30%]'}
                    fill
                />
                <Image
                    src={'/assets/svg/joinecosystem/background_ecosystem_mobile.svg'}
                    alt={'background_ecosystem '}
                    className={'!relative w-full lg:hidden !h-[150rem] md:!h-full lg:!h-[30%]'}
                    fill
                />
                <div
                    className={'absolute top-0 flex flex-col gap-y-8 sm:gap-y-28 justify-center w-full h-full items-center '}>
                    <div className={'w-fit mx-auto relative py-0 text-[#271437] text-center flex flex-col gap-y-5'}>
                        <h1 className={'text-[30px] sm:text-[45px] md:text-[65px] tracking-tight xl:text-[85px] font-[900]  font-anek text-center uppercase m-0 p-0 leading-[0.8]'}>
                            JOIN AN ECOSYSTEM <br/>
                            THAT KEEPS GIVING
                        </h1>
                        <p className={'text-xs sm:text-sm lg:text-lg text-center font-[600]'}>
                            Our values are more than just words—they are the guiding principles that shape our company
                            culture,<br/> help
                            us navigate challenges, and ensure we stay true to our purpose.
                        </p>
                        <button
                            className={'bg-secondary font-[700] text-black py-3.5 px-7 rounded-lg mx-auto w-fit text-center my-3'}>
                            Sign Up on Squads 💸
                        </button>
                    </div>
                    <div className={'grid grid-cols-1 lg:grid-cols-3 -gap-x-7 w-9/12 mx-auto translate-x-[3%]'}>
                        <Image
                            src={'/assets/png/signup_bonus.png'}
                            alt={'signup_bonus '}
                            className={'!relative sm:w-auto !w-[80%] mx-auto h-auto'}
                            width={500}
                            height={500}
                        />
                        <Image
                            src={'/assets/png/deposit_bonus.png'}
                            alt={'deposit_bonus '}
                            className={'!relative sm:w-auto !w-[80%] mx-auto h-auto lg:-ml-8'}
                            width={500}
                            height={500}
                        />
                        <Image
                            src={'/assets/png/sneaky_cash_popup.png'}
                            alt={'sneaky_cash_popup '}
                            className={'!relative  sm:w-auto !w-[80%] mx-auto h-auto lg:-ml-24'}
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <Image
                    src={'/assets/svg/joinecosystem/green_item.svg'}
                    alt={'green_item '}
                    className={'absolute h-32 md:h-auto top-20  sm:-top-3 left-[20%]'}
                    width={100}
                    height={100}
                />
            </section>

        </>
    );
};
