import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../components/Navbar/Navbar'

const ErrorLayout = ({ children, keywords }) => {
    return (
        <>
            {/* Head tags */}
            <Head>
                <title>Error</title>
                <meta http-equiv="refresh" content="5;URL=/" />
            </Head>

            {/* Error layout */}

            <Navbar />
            <div>
                {children}
            </div>
        </>
    )
}

export default ErrorLayout