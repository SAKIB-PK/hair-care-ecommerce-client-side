import React from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import HomeReview from '../Review/HomeReview'
import Team from '../Team/Team'
import HomeProduct from './HomeProduct'

const Home = () => {
    return (
        <>
            <Banner/>
            {/* Product */}
            <HomeProduct/>
            <HomeReview/>
            <Team/>
            <Footer />


        </>
    )
}

export default Home
