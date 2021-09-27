import Head from "next/head";
import Link from 'next/link'
import React from "react";
import { IMainContainerProps } from "../types/pages";
import { Header,Wrapper } from "../styles/mainContainer";


const MainContainer:React.FC<IMainContainerProps> = ({children,title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header>
                <Link href={'/'}>
                    <a>MyBlog</a>
                </Link>
                <Link href={'/posts/new'}>
                    <a>New post</a>
                </Link>
                
            </Header>
            <Wrapper>
                {children}
            </Wrapper>
        </>
    );
};

export default MainContainer;
