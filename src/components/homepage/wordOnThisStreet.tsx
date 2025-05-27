import Image from "next/image";
import {TwitterFeed, TwitterFeeds} from "@/components/twitterFeeds";

export const WordOnTheStreet = () => {
    const twitterFeeds: TwitterFeed[] = [
        {
            id: 0,
            username: 'ViktohLeo',
            message: 'First time playing on squad. First of many🤛 #Squadgame',
            userImage: '/assets/png/xusers/izu.png',
            imagePost: '/assets/png/post/vikthorleepost.png',
            hashtag: ['Squadgame'],
            textOverlay: true,
        },
        {
            id: 1,
            username: 'Izu__Official',
            message: 'Broooo i just noticed squads used the picture of GOAT for Lionel Messi in their platform and it’s bursting my brain 😂',
            userImage: '/assets/png/xusers/izu.png',
            imagePost: null,
            hashtag: ['Squadgame'],
            textOverlay: false,
        },
        {
            id: 2,
            username: 'UTDTrey',
            message: 'Stay humble haaland after 0:4 defeat against spurs 😭 #MCITOT ',
            userImage: '/assets/png/xusers/izu.png',
            imagePost: '/assets/png/post/halland.png',
            hashtag: ['Squadgame'],
            textOverlay: true,
        },
        {
            id: 3,
            username: 'Jujuboi___',
            message: 'Vandijk & Gravenberch just 4 pass each make make i collect my daily 2k from #Squadgame',
            userImage: '/assets/png/xusers/izu.png',
            imagePost: '/assets/png/post/vandijk.png',
            hashtag: ['Squadgame'],
            textOverlay: true,
        },
        {
            id: 4,
            username: 'Jujuboi___',
            message: '3 Ws in a row for my picks jhor,🔥 Weekend go soft again 😎 #Squadgame',
            userImage: '/assets/png/xusers/izu.png',
            imagePost: '/assets/png/post/money.png',
            hashtag: ['Squadgame'],
            textOverlay: true,
        },
        {
            id: 5,
            username: 'Jujuboi___',
            message: '@SquadsDFS is real gee is here 🥰🥰🥰🥰🥰🥰🔥🔥🔥🔥🔥🔥🔥🔥🔥 #Squadgame',
            userImage: '/assets/png/xusers/izu.png',
            imagePost: null,
            hashtag: ['Squadgame'],
            textOverlay: true,
        },
        {
            id: 6,
            username: 'Jujuboi___',
            message: 'Remaining fixtures for the Premier League’s top two… #TheRunIn',
            userImage: '/assets/png/xusers/izu.png',
            imagePost: '/assets/png/post/premier.png',
            hashtag: ['Squadgame'],
            textOverlay: false,
        }
    ]
    const animationClass = 'left' === 'left' ? 'animate-marquee-twitter' : 'animate-marquee-reverse-twitter';

    return (
        <>
            <section className={'pb-0 py-16 xl:py-0'}>
                <div className={'w-fit mx-auto relative'}>
                    <h1 className={'text-[30px] md:text-[45px] font-[900] text-white font-anek text-center uppercase m-0 p-0'}>
                        Words on the street
                    </h1>
                    <Image
                        src={'/assets/svg/wordofthestreet/line.svg'}
                        alt={'line '}
                        className={'absolute bottom-0 right-0'}
                        width={200}
                        height={100}
                    />
                </div>

                <div className={'flex flex-col justify-center gap-y-7 xl:gap-y-10 pb-0 py-10 xl:py-20'}>

                    <div className="overflow-hidden relative w-full">
                        <div
                            className={`${animationClass} flex gap-4`}
                            style={{animationDuration: `25s`}}
                        >
                            {/* Original items */}
                            {twitterFeeds.map((post) => (
                                <div key={`original-${post.id}`}
                                     className="flex-shrink-0 w-[25%] sm:w-[15%] md:w-[12%] 2xl:w-[8%] h-auto">
                                    <TwitterFeeds post={post}/>
                                </div>
                            ))}

                            {/* Duplicated items for seamless looping */}
                            {twitterFeeds.map((post) => (
                                <div key={`duplicate-${post.id}`}
                                     className="flex-shrink-0 w-[25%] sm:w-[15%] md:w-[12%] 2xl:w-[8%] h-auto">
                                    <TwitterFeeds post={post}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="overflow-hidden relative w-full">
                        <div
                            className={`${animationClass} flex gap-4`}
                            style={{animationDuration: `25s`}}
                        >
                            {/* Original items */}
                            {twitterFeeds.map((post) => (
                                <div key={`original-${post.id}`}
                                     className="flex-shrink-0 w-[25%] sm:w-[15%] md:w-[12%] 2xl:w-[8%] h-auto">
                                    <TwitterFeeds post={post}/>
                                </div>
                            ))}

                            {/* Duplicated items for seamless looping */}
                            {twitterFeeds.map((post) => (
                                <div key={`duplicate-${post.id}`}
                                     className="flex-shrink-0 w-[25%] sm:w-[15%] md:w-[12%] 2xl:w-[8%] h-auto">
                                    <TwitterFeeds post={post}/>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
};
