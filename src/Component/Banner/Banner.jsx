import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section role="banner" class="p-4 bg-gray-700 lg:h-screen">
            <div class="mx-auto lg:grid max-w-screen-2xl lg:gap-y-8 lg:gap-x-16 lg:grid-cols-2 lg:items-center lg:h-full">
                <div class="px-4 py-8 text-center space-y-8 sm:p-16 lg:text-left">
                <h1 class="text-4xl font-extrabold sm:text-5xl text-gray-200">
                    Gorgeous hair is the best revenge
                </h1>

                <p class="max-w-xl mx-auto text-gray-300">
                Anyone can be confident with a full head of hair. But a confident bald man - there's your diamond in the rough. -- Lary David
                </p>

                <div class="flex justify-center mt-8 lg:justify-start">
                    <Link to="/explore" class="inline-block px-5 py-3 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500">
                    Explore More
                    </Link>

                    <Link to='/my-order' class="inline-block px-5 py-3 font-medium text-blue-600 rounded-lg hover:text-blue-500">
                    My Order
                    </Link>
                </div>
                </div>

                <div class="relative h-64 sm:h-96 lg:h-full">
                <img
                    src="https://img.emedihealth.com/wp-content/uploads/2021/01/smooth-and-shiny-hair-feat-2.jpg"
                    alt="Woman university graduate"
                    class="absolute inset-0 object-cover object-bottom w-full h-full rounded-3xl"
                />

                <figure
                    class="hidden sm:absolute sm:max-w-sm sm:p-8 sm:bg-white sm:shadow-xl sm:block sm:rounded-2xl sm:bottom-8 sm:left-8"
                >
                    <blockquote>
                    <p class="text-gray-700">
                    Thousands of hair follicles are present in the scalp and contain oil-releasing glands known as sebaceous glands. The naturally secreted oil is responsible for the shiny and healthy appearance of your hair.
                    </p>
                    </blockquote>

                    <figcaption class="flex items-center mt-6 text-sm text-gray-500 space-x-1">
                    &mdash; Libby Graham,

                    <cite class="not-italic">
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
