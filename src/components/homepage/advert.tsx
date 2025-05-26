import Image from "next/image";

export const Advert = () => {
    return (
        <>
            <section className="py-10">
                <div className="w-10/12 xl:w-10/12 mx-auto relative h-full rounded-xl border border-[#1F2935]">
                    <div className="absolute inset-0 bg-gradient-pattern bg-cover rounded-xl"></div>
                    <div className="relative z-10 bg-custom-pattern-modified bg-cover">
                        <Image
                            src={'/assets/svg/footer/footer_advert.svg'}
                            alt={'footer_advert '}
                            className={'!relative'}
                            fill
                        />
                        <div className={'absolute bottom-[10%] left-1/2 -translate-x-2/3'}>
                            <button
                                className={'bg-secondary font-[700] xl:text-lg text-black py-1 lg:py-2.5 xl:py-3.5 px-1 lg:px-4 xl:px-7 rounded sm:rounded-lg text-[6px] sm:text-sm mx-auto w-fit text-center'}>
                                Sign Up on Squads 💸
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
