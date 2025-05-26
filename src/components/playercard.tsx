import Image from "next/image";
import {ArrowUp} from "lucide-react";

interface Props {
    direction: string
}

function PlayerCardSlider({direction}: Props) {
    const cards = [...Array(6)].map((_, index) => (
        <div key={index}
            className={'flex justify-between py-3.5 px-4 items-center w-[26rem] bg-[#262F3B] border border-[#2F3843] rounded-lg'}>
            <div className={'flex gap-x-1 justify-center'}>
                <div>
                    <Image
                        src={'/assets/png/halland.png'}
                        alt={'halland '}
                        className={'w-full !relative'}
                        width={500}
                        height={500}
                    />
                </div>
                <div className={'flex flex-col gap-y-1'}>
                    <h1 className={'text-white font-[600]'}>Erling Halland</h1>
                    <p className={'text-[#8F949A] text-xs'}>Manchester City- Forward</p>
                    <p className={'text-[#D2D4D7] text-xs'}> vs. Arsenal on<br/> 3rd Mar 11:20 PM</p>
                </div>
            </div>
            <div className={'flex gap-x-2 items-center justify-center'}>
                <div
                    className={'bg-[#20262E] border-[#2F3843] h-full min-h-[8vh] py-2 px-3 text-center flex flex-col justify-center items-center border rounded-lg'}>
                    <p className={'text-white text-sm font-[600]'}>
                        25
                    </p>
                    <p className={'text-[10px] text-center text-wrap'}>
                        Shots on<br/> Target
                    </p>
                </div>
                <div className={'flex flex-col gap-y-2'}>
                    <div className={'flex gap-x-2 h-full items-center bg-[#1F2935] py-2 px-3 rounded-md'}>
                    <span className={'text-white text-xs font-[600]'}>
                      More
                    </span>
                        <ArrowUp size={18} color="white"/>
                    </div>
                    <div className={'flex gap-x-2 h-full items-center bg-[#1F2935] py-2 px-3 rounded-md '}>
                    <span className={'text-white text-xs font-[600]'}>
                      More
                    </span>
                        <ArrowUp size={18} color="white"/>
                    </div>
                </div>
            </div>

        </div>
    ));

    return (
        <div className="overflow-hidden relative w-full">
            <div className={`${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'} flex  gap-4`}>
                {cards.map((card, index) => (
                    <div key={index}>{card}</div>
                ))}
                {cards.map((card, index) => (
                    <div key={`dup-${index}`}>{card}</div>
                ))}
                {cards.map((card, index) => (
                    <div key={`dup-${index}`}>{card}</div>
                ))}
            </div>
        </div>
    );
}

export default PlayerCardSlider;
