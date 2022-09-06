/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

interface NavbarProps {
    text: string;
    link: string;
};

const navbarLinkCSS = css({
    textDecoration: 'none',
    color: '#372772'
})
const NavbarItem = ({ text, link }: NavbarProps) => {
    return (
        <div>
            <a href={link} css={navbarLinkCSS}>{text}</a>
        </div>
    )
}

export default NavbarItem;