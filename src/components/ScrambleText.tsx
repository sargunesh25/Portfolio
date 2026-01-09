'use client';

import React from 'react';
import Link from 'next/link';

interface ScrambleTextProps {
    text: string;
    href?: string;
    isExternal?: boolean;
    className?: string;
    as?: 'a' | 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, href, isExternal = false, className, as }) => {
    const [display, setDisplay] = React.useState(text);
    const chars = "!<>-_\\/[]{}—=+*^?#________";

    const animate = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };

    // If 'as' is provided, use it. Otherwise default to logic: if href exists (Link/a), else span.
    const Component = as || (href ? (isExternal ? 'a' : Link) : 'span');

    // Props for the component
    const commonProps = {
        onMouseEnter: animate,
        className: className,
    };

    if (href) {
        return (
            // @ts-ignore
            <Component
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                {...commonProps}
            >
                {display}
            </Component>
        );
    }

    return (
        // @ts-ignore
        <Component {...commonProps}>
            {display}
        </Component>
    );
};

export default ScrambleText;
