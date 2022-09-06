/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import NavbarItem from './NavbarItem';

const navbarCSS = css({
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #372772',
    borderBottom: '1px solid #372772',
    width: '70%',
});


const Navbar = () => {
    return (
        <div css={navbarCSS}>
            <NavbarItem text='Resume' link='/resume' />
            <NavbarItem text='About' link='/about' />
            <NavbarItem text='Grassroots Mutual Aid' link='/pasadenaforall' />
            <NavbarItem text='Art' link='/art' />
        </div>
    )
}

export default Navbar;