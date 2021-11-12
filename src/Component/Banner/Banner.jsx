import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section role="banner" className="p-4 bg-gray-700 lg:h-screen">
            <div className="mx-auto lg:grid max-w-screen-2xl lg:gap-y-8 lg:gap-x-16 lg:grid-cols-2 lg:items-center lg:h-full">
                <div className="px-4 py-8 text-center space-y-8 sm:p-16 lg:text-left">
                <h1 className="text-4xl font-extrabold sm:text-5xl text-gray-200">
                    Gorgeous hair is the best revenge
                </h1>

                <p className="max-w-xl mx-auto text-gray-300">
                Anyone can be confident with a full head of hair. But a confident bald man - there's your diamond in the rough. -- Lary David
                </p>

                <div className="flex justify-center mt-8 lg:justify-start">
                    <Link to="/explore" className="inline-block px-5 py-3 font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900">
                    Explore More
                    </Link>

                    <Link to='/my-order' className="inline-block px-5 py-3 font-medium text-white rounded-lg hover:text-gray-400">
                    My Order
                    </Link>
                </div>
                </div>

                <div className="relative h-64 sm:h-96 lg:h-full">
                <img
                    src="https://img.emedihealth.com/wp-content/uploads/2021/01/smooth-and-shiny-hair-feat-2.jpg"
                    alt="Woman university graduate"
                    className="absolute inset-0 object-cover object-bottom w-full h-full rounded-3xl"
                />

                <figure
                    className="hidden sm:absolute sm:max-w-sm sm:p-8 sm:bg-white sm:shadow-xl sm:block sm:rounded-2xl sm:bottom-8 sm:left-8"
                >
                    <blockquote>
                    <p className="text-gray-700">
                    Thousands of hair follicles are present in the scalp and contain oil-releasing glands known as sebaceous glands. The naturally secreted oil is responsible for the shiny and healthy appearance of your hair.
                    </p>
                    </blockquote>

                    <figcaption className="flex items-center mt-6 text-sm text-gray-500 space-x-1">
                    &mdash; Libby Graham,

                    <cite className="not-italic">
                        University of Elrond
                    </cite>
                    </figcaption>
                </figure>
                </div>
            </div>
        </section>
    )
}

export default Banner
