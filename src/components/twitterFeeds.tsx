"use client"
import Image from "next/image";
import {renderMessageWithColoredHashtags} from "@/utilities/getHashTagFromSentence";

export interface TwitterFeed {
    id: number;
    username: string;
    message: string;
    userImage: string;
    imagePost: string | null;
    hashtag: string[];
    textOverlay: boolean;
}

export interface Feed {
    post: TwitterFeed;
}

export const TwitterFeeds = ({post}: Feed) => {
    return (
        <>
            <div className={'bg-[#262F3B] w-full p-3 rounded-xl flex flex-col gap-y-4 '}>
                <div className={'text-xl font-[900] font-anek text-white leading-tight'}>

                    { post.imagePost ?
                        <div className={'relative'}>
                            <Image
                                src={post.imagePost}
                                alt={'logo'}
                                className={'!relative text-black bg-blend-luminosity mix-blend-luminosity'}
                                fill
                            />
                            <p className={`${post.textOverlay ? 'absolute' : ''} bottom-0 md:bottom-5 leading-[1] ${post.textOverlay ? 'md:px-4 px-2' : ' pt-4'} xl:text-lg text-sm `}>
                                {renderMessageWithColoredHashtags(post.message, post)}
                            </p>
                        </div> :
                        <div>
                            <p className={' xl:text-lg text-sm '}>
                                {post.message}
                            </p>
                            <div>
                                {post.hashtag.map((hashtag) => {
                                    return (
                                        <span key={hashtag} className={'text-secondary  xl:text-lg text-sm '}>
                                    #{hashtag}
                                </span>
                                    )
                                })}
                            </div>
                        </div>
                    }

                </div>
                <div className={'flex justify-between w-full'}>
                    <div className={'flex items-center text-xs md:text-xs font-[600] gap-x-1'}>
                        <Image
                            src={'/assets/png/xusers/izu.png'}
                            alt={'logo'}
                            className={'!relative !w-1/2 text-black '}
                            fill
                        />
                        <p className={'text-[8px] xl:text-xs font-[700]'}>@{post.username}</p>
                    </div>
                    <Image
                        src={'/assets/svg/logo.svg'}
                        alt={'logo'}
                        className={'!relative !w-1/3  text-black '}
                        fill
                    />
                </div>
            </div>
        </>
    )
}
