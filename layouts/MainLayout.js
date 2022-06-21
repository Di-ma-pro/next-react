import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../components/Navbar/Navbar'

const MainLayout = ({ children, keywords }) => {
    return (
        <>
            {/* Head tags */}
            <Head>
                <meta keywords={"nextjs-test, next, nextjs, next-js, js, css, test, Egor, chorus2" + keywords} />
                <title>Main page</title>
            </Head>

            {/* Main layout */}

            <Navbar />
            <div>
                {children}
            </div>
        </>
    )
}

export default MainLayout