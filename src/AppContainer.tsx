/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

const appContainerCSS = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    fontFamily: 'poppinsregular',
});

const AppContainer = (props: { children: React.ReactNode | React.ReactNode[] }) => {
    return (<div css={appContainerCSS}>
        {props.children}
    </div>);
}

export default AppContainer;