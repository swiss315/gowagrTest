import Image from "next/image";
import PlayerCardSlider from "@/components/playercard";

export const Projection = () => {
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


                <div className={'flex flex-col gap-y-4 py-10'}>
                    <PlayerCardSlider direction={"left"}/>
                    <PlayerCardSlider direction={"right"}/>
                    <PlayerCardSlider direction={"left"}/>
                    <PlayerCardSlider direction={"right"}/>

                </div>


            </section>

        </>
    );
};
