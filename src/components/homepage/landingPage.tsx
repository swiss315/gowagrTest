import Image from "next/image";

export const LandingPage = () => {
    return (
        <>
            <section
                className={' bg-custom-pattern bg-no-repeat w-full  bg-cover p-0 min-h-[85vh] justify-center flex flex-col items-center relative mt-0 sm:mt-16 xl:mt-24'}>
                <div
                    className={'w-11/12 lg:w-3/5 mx-auto flex flex-col justify-center items-center lg:-translate-y-[30%] xl:-translate-y-[20%] 2xl:-translate-y-[40%] sm:-translate-y-[40%] -translate-y-[5%] '}>
                    <div
                        className={' w-[80%] xl:w-[80%] 2xl:w-[70%] text-center tracking-wider text-[30px] sm:text-[45px] lg:text-[40px] xl:text-[60px] 2xl:text-[70px] font-[900] py-6 lg:py-4 xl:py-6 border-2 border-lemonGreenBorder text-greenText bg-lemonGreen rounded-[35.65px]  transform rotate-3'}>
                        <h1>The New way to</h1>
                    </div>
                    <div
                        className={'w-[100%] tracking-tight sm:tracking-wider relative text-center text-[30px] sm:text-[45px] lg:text-[40px] xl:text-[60px] 2xl:text-[70px] font-[900] py-5 lg:py-4 xl:py-6 border-2 border-lightPinkBorder  text-wineText bg-lightPink rounded-[35.65px]  transform -rotate-3'}>
                        <h1>Win Money on Sports</h1>
                        <Image
                            src={'/assets/svg/blueflower.svg'}
                            alt={'tiktok'}
                            className={'sm:h-auto h-14 absolute -left-10 -bottom-5 sm:-bottom-10'}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <div
                    className={'sm:-translate-y-[0%] xl:-translate-y-[20%] 2xl:-translate-y-[80%] translate-y-[20%]  flex flex-col gap-y-7'}>
                    <p className={'w-fit text-center mx-auto text-sm lg:text-lg font-[500]'}>
                        Just pick <b>More</b> or <b>Less</b> on player stats and <br/> win up to <span
                        className={'text-secondary'}>100X your cash!</span>
                    </p>
                    <button
                        className={'bg-secondary font-[700] text-black py-3.5 px-7 rounded-lg mx-auto w-fit text-center'}>
                        Wanna play? Tap in 💸
                    </button>
                </div>
                <Image
                    src={'/assets/svg/spiral.svg'}
                    alt={'spiral'}
                    className={'absolute h-6 sm:h-auto left-[15%] top-[10%]'}
                    width={70}
                    height={70}
                />
                <Image
                    src={'/assets/svg/abstractitem.svg'}
                    alt={'abstractitem'}
                    className={'absolute h-6 sm:h-auto right-[25%] top-[15%] sm:top-[0%]'}
                    width={30}
                    height={30}
                />
                <Image
                    src={'/assets/svg/spark.svg'}
                    alt={'spark'}
                    className={'absolute h-16 sm:h-auto right-[1%] sm:right-[5%] bottom-[15%] sm:top-[3%]'}
                    width={200}
                    height={200}
                />
                <Image
                    src={'/assets/svg/fire.svg'}
                    alt={'fire'}
                    className={'absolute h-16 sm:h-auto left-[7%] bottom-[20%] 2xl:bottom-[35%]'}
                    width={100}
                    height={100}
                />
                <Image
                    src={'/assets/svg/redspiral.svg'}
                    alt={'redspiral'}
                    className={'absolute h-8 sm:h-auto right-[25%] bottom-[10%] sm:bottom-[35%] 2xl:bottom-[45%]'}
                    width={50}
                    height={50}
                />
            </section>
        </>
    );
};
