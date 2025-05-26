import Image from "next/image";

interface IconBoxProps {
    type: string;
    color?: string;
    image: string;
}

export const IconBox = ({type, color, image} : IconBoxProps) => {
    return(
        <div className={`${type === 'circle' ? 'rounded-full' : 'rounded-lg'} border-[0.5px] w-fit border-black p-2 rounded-lg  ${color}`}>
            <Image
                src={image}
                alt={'type'}
                className={''}
                width={30}
                height={30}
            />
        </div>
    )
}
