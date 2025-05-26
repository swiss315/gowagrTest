"use client"

// Function to convert message text with hashtags to JSX elements with colors
import {TwitterFeed} from "@/components/twitterFeeds";

export const renderMessageWithColoredHashtags = (message: string, post: TwitterFeed) => {
    // Split the message by spaces to process each word
    const words = message.split(' ');

    return words.map((word, index) => {
        // Check if the word starts with # and is a hashtag
        if (word.startsWith('#')) {
            return (
                <span key={`hashtag-word-${index}`} className="text-secondary">
                    {word}{' '}
                </span>
            );
        }

        // Check if the word contains any existing hashtag from the hashtag array
        const matchedHashtag = post && post.hashtag?.find(tag =>
            word.toLowerCase().includes(tag.toLowerCase())
        );

        if (matchedHashtag) {
            // Split the word to highlight just the hashtag part
            const parts = word.split(new RegExp(`(${matchedHashtag})`, 'i'));
            return (
                <span key={`matched-word-${index}`}>
                    {parts.map((part, partIndex) =>
                        part.toLowerCase() === matchedHashtag.toLowerCase() ?
                            <span key={`part-${index}-${partIndex}`} className="text-secondary">{part}</span> :
                            <span key={`part-${index}-${partIndex}-regular`}>{part}</span>
                    )}
                    {' '}
                </span>
            );
        }

        // Return regular word with space
        return <span key={`regular-word-${index}`}>{word}{' '}</span>;
    });
};
