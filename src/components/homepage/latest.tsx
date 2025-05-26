import Image from "next/image";

export const Latest = () => {
    return (
        <>
            <section className={'py-10 flex flex-col gap-y-14 xl:gap-y-28'}>
                <div>
                    <h1 className={'font-[900] text-[40px] sm:text-[60px] text-center font-anek leading-[0.8]'}>Latest
                        from the <span
                            className={'font-gloria text-secondary'}>Gang</span></h1>
                    <p className={'font-[600] sm:text-lg text-sm text-center mt-0 xl:-mt-1 2xl:-mt-2'}>
                        Subscribe to get latest yap from Wadmin
                    </p>
                </div>

                <div
                    className={'flex sm:flex-row flex-col gap-y-10 sm:gap-x-7 w-2/3 sm:w-10/12 xl:w-10/12 2xl:w-7/12 mx-auto'}>

                    <div className={' flex flex-col gap-y-4 '}>
                        <Image
                            src={'/assets/png/news.png'}
                            alt={'news '}
                            className={'!relative !h-[60%]'}
                            fill
                        />
                        <div className={'flex flex-col gap-y-2'}>
                            <span className={'font-[600] text-[#218208]'}>News</span>
                            <p className={'font-[600] text-white xl:text-lg text-sm'}>Introducing: The new way to win
                                money on sports .</p>
                            <p className={'font-[600] text-[#797F86] xl:text-lg text-sm'}>
                                Lorem ipsum dolor sit amet consectetur. Massa a nec leo arcu sed netus. Feugiat diam
                                aliquam sapien.
                            </p>
                        </div>
                    </div>
                    <div className="border-b border-[#797F86] sm:hidden w-full my-4"></div>

                    <div className={' flex flex-col gap-y-4'}>
                        <Image
                            src={'/assets/png/tip.png'}
                            alt={'news '}
                            className={'!relative !h-[60%]'}
                            fill
                        />
                        <div className={'flex flex-col gap-y-2'}>
                            <span className={'font-[600] text-[#FD89ED]'}>Tips</span>
                            <p className={'font-[600] text-white xl:text-lg text-sm'}>From signing up to enjoying our
                                sweet benefits, it only takes a
                                few..</p>
                            <p className={'font-[600] text-[#797F86] xl:text-lg text-sm'}>
                                Lorem ipsum dolor sit amet consectetur. Massa a nec leo arcu sed netus. Feugiat diam
                                aliquam sapien.
                            </p>
                        </div>
                    </div>
                    <div className="border-b border-[#797F86] sm:hidden w-full my-4"></div>

                    <div className={' flex flex-col gap-y-4'}>
                        <Image
                            src={'/assets/png/squad_news.png'}
                            alt={'news '}
                            className={'!relative !h-[60%]'}
                            fill
                        />
                        <div className={'flex flex-col gap-y-2'}>
                            <span className={'font-[600] text-[#6DE0E7]'}>News</span>
                            <p className={'font-[600] text-white xl:text-lg text-sm'}>Squads Game: Win real money with
                                your football knowledge </p>
                            <p className={'font-[600] text-[#797F86] xl:text-lg text-sm'}>
                                Lorem ipsum dolor sit amet consectetur. Massa a nec leo arcu sed netus. Feugiat diam
                                aliquam sapien. </p>
                        </div>
                    </div>

                </div>
                <button
                    className={'bg-secondary font-[700] text-black py-3.5 px-7 rounded-lg mx-auto w-fit text-center'}>
                    Read more on blog
                </button>
            </section>
        </>
    );
};
