'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface TypingTextProps {
    text: string;
    href?: string;
    isExternal?: boolean;
    className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text, href, isExternal = false, className }) => {
    const [display, setDisplay] = useState(text);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) {
            setDisplay(text);
            return;
        }

        let currentIndex = 0;
        const totalLength = text.length;

        // Clear text immediately on hover
        setDisplay('');

        const interval = setInterval(() => {
            if (currentIndex <= totalLength) {
                setDisplay(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 50); // Speed of typing

        return () => clearInterval(interval);
    }, [isHovered, text]);

    const Component = href ? (isExternal ? 'a' : Link) : 'span';

    const commonProps = {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        className: `${className} inline-block relative`, // relative for cursor if needed
    };

    // Add a blinking cursor effect using CSS or just standard typing?
    // User asked for "typing animation". Simple reveal is good.
    // Adding a cursor during typing might be nice.

    const content = (
        <>
            {display}
            {isHovered && display.length < text.length && (
                <span className="animate-pulse">|</span>
            )}
        </>
    );

    if (href) {
        return (
            // @ts-ignore
            <Component
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                {...commonProps}
            >
                {content}
            </Component>
        );
    }

    return (
        // @ts-ignore
        <Component {...commonProps}>
            {content}
        </Component>
    );
};

export default TypingText;
