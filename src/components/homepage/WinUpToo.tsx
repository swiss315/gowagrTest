import {IconBox} from "@/components/iconbox";
import Image from "next/image";
import Slider from "@/components/Slider";

export const WinUpToo = () => {
    return (
        <>
            <section className={'relative'}>
                <div
                    className={'clip-slant lg:custom-lg xl:custom-xl 2xl:custom-2xl bg-custom-spiral  bg-no-repeat bg-cover z-50 min-h-[120vh] h-[150vh] relative justify-center flex flex-col'}>
                    <div className={'flex flex-col gap-y-14'}>
                        <div className={'flex flex-col gap-y-4'}>
                            <div className={'flex gap-x-5 w-fit justify-center mx-auto'}>
                                <IconBox type={'square'} image={"/assets/svg/ball.svg"} color={'bg-[#FD89ED]'}/>
                                <IconBox type={'circle'} image={"/assets/svg/gloves.svg"} color={'bg-[#6DE0E7]'}/>
                                <IconBox type={'square'} image={"/assets/svg/boot.svg"} color={'bg-[#88C80C]'}/>
                                <IconBox type={'circle'} image={"/assets/svg/target.svg"} color={'bg-[#F9CC00]'}/>
                            </div>
                            <h1 className={'font-[900] font-anek text-[50px] xl:text-[70px] 2xl:text-[80px] text-center text-primary leading-[2.5rem] xl:leading-[4rem] tracking-tighter'}>
                                WIN UPTO 100X<br/>YOUR CASH. JUST PICK<br/>MORE OR LESS
                            </h1>
                        </div>
                        <div className={'w-[50%] hidden md:hidden lg:block mx-auto'}>
                            <Image
                                src={'/assets/png/steps.png'}
                                alt={'steps '}
                                className={'w-full !relative'}
                                fill
                            />
                        </div>
                        <div className={'w-[50%] lg:hidden mx-auto'}>
                            <Image
                                src={'/assets/png/mobilesteps.png'}
                                alt={'steps '}
                                className={'!w-[80%] !relative'}
                                fill
                            />
                        </div>
                    </div>


                    <div className="absolute bg-primary bottom-8 lg:bottom-12 left-0 right-0 transform rotate-[2.3deg]">
                        <Slider/>
                    </div>

                </div>
                <Image
                    src={'/assets/svg/abstractitem_donut.svg'}
                    alt={'donut '}
                    className={'absolute h-24 sm:h-20 lg:h-24 xl:h-24 2xl:h-auto right-[14%] md:right-[14%] lg:right-[11%] xl:right-[18%] 2xl:right-[15%] -top-5  xl:-top-10 md:-top-10 lg:-top-10 z-50 pt-5'}
                    width={100}
                    height={100}
                />
            </section>
        </>
    );
};
