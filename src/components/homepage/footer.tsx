import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <>
            <section className="py-10">
                <div className={'w-10/12 xl:w-10/12 mx-auto flex xl:flex-row flex-col gap-y-4 xl:gap-x-4'}>
                    <div
                        className={'rounded-3xl border w-full xl:w-[55%] border-[#2A343F] px-8 py-3 flex flex-col justify-center  gap-y-4'}>
                        <Image
                            src={'/assets/svg/footer/footer_logo.svg'}
                            alt={'footer_advert '}
                            className={'!relative'}
                            width={150}
                            height={150}
                        />
                        <p className={'text-[#797F86] font-[500] xl:text-sm text-[8px] sm:text-xs'}>
                            Squads Daily Fantasy uses official league statistics provided by reputable partners and only
                            includes
                            statistics from sporting events the relevant league deems to be official.Squads is not
                            affiliated or
                            connected with sports teams, and/or players displayed on its platform.
                        </p>
                        <p className={'text-white font-[600] xl:text-lg text-xs sm:text-sm'}>
                            Want to reach us? <span className={'text-secondary'}>sup@squads.game</span>
                        </p>
                    </div>
                    <div
                        className={'flex xl:flex-col flex-col  sm:flex-row gap-y-4 sm:gap-x-4 xl:gap-y-4 w-full xl:w-[45%]'}>
                        <div
                            className={'rounded-3xl border w-full border-[#2A343F] px-5 sm:px-10 py-10 flex flex-col justify-center  gap-y-4'}>
                            <ul className={'flex xl:text-[11px] sm:text-[10px] text-[8px] gap-x-2 lg:gap-x-3.5 xl:gap-x-5 font-[700] text-[#D2D4D7]'}>
                                <li><Link href="/public">How To Play</Link></li>
                                <li><Link href="/public">FAQs</Link></li>
                                <li><Link href="/public">Terms</Link></li>
                                <li><Link href="/public">Privacy Policy</Link></li>
                                <li><Link href="/public">Responsible Gaming</Link></li>

                            </ul>
                            <div className={'flex justify-between'}>
                                <ul className={'flex gap-x-7  w-[45%] items-center'}>
                                    <li>
                                        <Link href="/public">
                                            <Image
                                                src={'/assets/svg/socials/x.svg'}
                                                alt={'x'}
                                                width={20}
                                                height={20}
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/public">
                                            <Image
                                                src={'/assets/svg/socials/tiktok.svg'}
                                                alt={'tiktok'}
                                                width={20}
                                                height={20}
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/public">
                                            <Image
                                                src={'/assets/svg/socials/youtube.svg'}
                                                alt={'youtube'}
                                                width={20}
                                                height={20}
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/public">
                                            <Image
                                                src={'/assets/svg/socials/instagram.svg'}
                                                alt={'instagram'}
                                                width={20}
                                                height={20}
                                            />
                                        </Link>
                                    </li>
                                </ul>
                                <Image
                                    src={'/assets/svg/footer/18+.svg'}
                                    alt={'18+'}
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                        <div
                            className={'rounded-3xl border w-full border-[#2A343F] px-10 py-10 flex flex-col justify-center  gap-y-4'}>

                            <p className={'text-[#797F86] font-[500] sm:text-[10px] text-[8px] xl:text-xs text-center'}>
                                Copyright © 2025 SquadsDFS. All Rights Reserved.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
