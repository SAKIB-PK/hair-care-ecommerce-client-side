import React from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import HomeProduct from './HomeProduct'

const Home = () => {
    return (
        <>
            <Banner/>
            {/* Product */}
            <HomeProduct/>
            <Footer />


        </>
    )
}

export default Home
