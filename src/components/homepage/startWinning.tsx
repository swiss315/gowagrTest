import Image from "next/image";

export const StartWinning = () => {
    return (
        <>
            <section>
                <div className={'text-[#D2D4D7] py-24 xl:py-40 flex flex-col items-center justify-center relative'}>
                    <h1 className={'font-anek font-[900] text-center text-[50px] md:text-[75px] xl:text-[85px] leading-[0.8]'}>START
                        WINNING<br/>
                        WITH THE SQUAD</h1>
                    <p className={'font-[500] text-center sm:text-lg text-sm'}>
                        From signing up to winning your first entry, it only takes a few steps
                    </p>
                    <button
                        className={'bg-secondary font-[700] text-black py-3.5 px-7 rounded-lg mx-auto w-fit text-center my-3'}>
                        Join the community
                    </button>
                    <Image
                        src={'/assets/svg/abstractitem.svg'}
                        alt={'abstractitem'}
                        className={'absolute left-[15%] bottom-[40%]'}
                        width={30}
                        height={30}
                    />
                </div>
                <div className={'bg-[#232D39]  w-10/12 2xl:w-9/12 mx-auto rounded-2xl py-16 xl:py-24 relative'}>
                    <div className={'w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto flex flex-col gap-y-4 xl:gap-y-8'}>
                        <div className={' mx-auto flex lg:flex-row flex-col gap-y-4 sm:gap-x-4'}>
                            <div
                                className={'bg-[#1F2935] bg-custom-pattern-modified bg-cover w-full lg:w-[40%] sm:py-0 py-5 flex flex-col gap-y-6 rounded-2xl px-5'}>
                                <Image
                                    src={'/assets/svg/startwinning/joinsquad.svg'}
                                    alt={'background_ecosystem '}
                                    className={'!relative'}
                                    width={100}
                                    height={100}
                                />
                                <div className={'flex flex-col gap-y-2'}>
                                    <button
                                        className={' font-[600] shadow-custom-shadow bg-[#2F3843] text-sm py-1.5 px-2.5 w-fit rounded'}>
                                        Register
                                    </button>
                                    <p className={'font-[700] text-[#D2D4D7] text-2xl sm:text-lg'}>
                                        Join the Squads<br/> Community
                                    </p>
                                    <p className={'text-sm font-[500] text-[#D2D4D7]'}>
                                        Create your account in seconds with just your name and email address
                                    </p>
                                </div>
                            </div>
                            <div
                                className={'bg-[#1F2935] pt-10 px-10 sm:px-0 sm:pt-0 bg-custom-pattern-modified bg-cover w-full lg:w-[60%] rounded-2xl flex flex-col-reverse sm:flex-row gap-x-4 items-center'}>
                                <Image
                                    src={'/assets/svg/startwinning/fundaccount.svg'}
                                    alt={'fundaccount '}
                                    className={'!relative hidden sm:block'}
                                    width={200}
                                    height={200}
                                />
                                <Image
                                    src={'/assets/svg/startwinning/fundaccount_mobile.svg'}
                                    alt={'fundaccount_mobile '}
                                    className={'!relative sm:hidden'}
                                    width={200}
                                    height={200}
                                />
                                <div className={'flex flex-col gap-y-2'}>
                                    <button
                                        className={'w-fit font-[600] text-sm shadow-custom-shadow bg-[#2F3843] py-1.5 px-2.5 rounded'}>
                                        Fund Wallet
                                    </button>
                                    <p className={'font-[700]'}>
                                        Fund Your Account
                                    </p>
                                    <p className={'text-sm font-[500] w-11/12'}>
                                        Deposit funds instantly using your preferred payment method to create an entry.
                                        All our payment
                                        methods are fast & secure.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={' mx-auto flex lg:flex-row flex-col gap-y-4 sm:gap-x-4'}>
                            <div
                                className={'bg-[#1F2935] bg-custom-pattern-modified bg-cover w-full lg:w-[60%] py-8 sm:pt-10 rounded-2xl flex flex-col gap-y-4'}>
                                <Image
                                    src={'/assets/png/create_your_entry.png'}
                                    alt={'create_your_entry '}
                                    className={'!relative !w-[80%] !h-[40%] hidden sm:block'}
                                    fill
                                />
                                <Image
                                    src={'/assets/png/create_your_entry_mobile.png'}
                                    alt={'create_your_entry '}
                                    className={'!relative !w-[80%] sm:hidden mx-auto !h-[40%]'}
                                    fill
                                />
                                <div className={'flex flex-col justify-center gap-y-2 px-10 flex-1'}>
                                    <button
                                        className={'w-fit font-[600] text-sm shadow-custom-shadow bg-[#2F3843] py-1.5 px-2.5 rounded'}>
                                        Picks
                                    </button>
                                    <p className={'font-[700]'}>
                                        Create your entry
                                    </p>
                                    <p className={'text-sm font-[500] w-11/12'}>
                                        Browse the players market, pick more or less on available players and create
                                        your entry.
                                    </p>
                                </div>
                            </div>
                            <div
                                className={'bg-[#1F2935] bg-custom-pattern-modified bg-cover w-full lg:w-[40%] flex flex-col gap-y-6 rounded-2xl px-6 pt-7'}>

                                <div className={'flex flex-col gap-y-2'}>
                                    <button
                                        className={' font-[600] shadow-custom-shadow bg-[#2F3843] text-sm py-1.5 px-2.5 w-fit rounded'}>
                                        Cash out
                                    </button>
                                    <p className={'font-[700] text-[#D2D4D7]'}>
                                        Withdraw your <br/>
                                        winning
                                    </p>
                                    <p className={'text-sm font-[500] text-[#D2D4D7]'}>
                                        Your entry is looking green? Withdraw straight to your bank account with ease

                                    </p>
                                </div>
                                <Image
                                    src={'/assets/svg/startwinning/cashout.svg'}
                                    alt={'background_ecosystem '}
                                    className={'!relative'}
                                    fill
                                />
                            </div>

                        </div>
                    </div>
                    <Image
                        src={'/assets/svg/joinecosystem/green_item.svg'}
                        alt={'line '}
                        className={'absolute bottom-[10%] -left-[2%]'}
                        width={50}
                        height={50}
                    />
                    <Image
                        src={'/assets/svg/startwinning/double_donut.svg'}
                        alt={'double_donut '}
                        className={'absolute bottom-[50%] -right-[2%]'}
                        width={50}
                        height={50}
                    />
                </div>
            </section>
        </>
    );
};
