import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '../store/';
import GlobalStyles from '../styles/globalStyles';


const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <>
        <GlobalStyles/>
        <Component {...pageProps} />
    </>
);

export default wrapper.withRedux(WrappedApp);